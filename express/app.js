var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var path = require('path');

var db;
//var ObjectID = mongodb.ObjectID;

var app = express();

var logger = function (req, res, next) {
    console.log('Got a request...');
    next();
}

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

function validTransaction(transaction) {

    var response = [];

    return response.join('\n');
}

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));

var TRANSACTIONS_COLLECTION = 'transactions';

var transactions = [
    { type: 'DEBIT', date: new Date('02/03/2017'), category: 'Grocery', description: "PURCHASE SHOP A", amount: -10.00, currency: 'USD', source: 'DEBIT_CARD', balance: 250.00, reference: null, account: 'Demo' },
    { type: 'CREDIT', date: new Date('02/03/2017'), category: 'Income', description: "SALARY FROM JOB A", amount: 100.0, currency: 'USD', source: 'ACH_CREDIT', balance: 350.00, reference: null, account: 'Demo' },
    { type: 'DEBIT', date: new Date('02/02/2017'), category: 'Grocery', description: "PURCHASE SHOP B", amount: -15, currency: 'USD', source: 'DEBIT_CARD', balance: 335.00, reference: null, account: 'Demo' },
    { type: 'DEBIT', date: new Date('02/02/2017'), category: 'Food', description: "LUNCH PLACE T", amount: -6.47, currency: 'USD', source: 'DEBIT_CARD', balance: 328.53, reference: null, account: 'Demo' },
    { type: 'DEBIT', date: new Date('02/01/2017'), category: 'Food', description: "DINNER AT MCD'S", amount: -25.24, currency: 'USD', source: 'DEBIT_CARD', balance: 303.29, reference: null, account: 'Demo' },
    { type: 'DEBIT', date: new Date('02/01/2017'), category: 'Saving', description: "SAVING MONEY", amount: -50.00, currency: 'USD', source: 'ACCT_XFER', balance: 253.29, reference: null, account: 'Demo' }
];

var categories = [
    { id: 1, category: "Income" },
    { id: 2, category: "Grocery" },
    { id: 3, category: "Luxury Food" },
    { id: 4, category: "Saving" }
];

app.get('/api/injectdata', function (req, res) {
    {
        var errors = false;
        var responses = [];

        transactions.forEach(function (transaction) {
            db.collection(TRANSACTIONS_COLLECTION).insertOne(transaction, function (err, doc) {
                if (err) {
                    errors = true;
                    responses.push(err.message);
                } else {
                    responses.push(doc.ops[0]);
                }
            });
        });

        res.send(responses.join('\n'));
    }
});

app.all('/api/transactions', function (req, res, next) {
    // Allow CORS
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/api/transactions', function (req, res) {
    //res.json(transactions);
    db.collection(TRANSACTIONS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get transactions.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post('/api/transactions', function (req, res) {
    var newTransaction = req.body;

    // call business logic test to see if transaction is valid
    var testTransaction = validTransaction(newTransaction);    
    if (testTransaction.length > 0) {
        handleError(res, "Invalid user input", testTransaction, 400);
    }

    db.collection(TRANSACTIONS_COLLECTION).insertOne(newTransaction, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new transaction.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

app.get('/api/transactions/:id', function (req, res) {
  db.collection(TRANSACTIONS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get transaction");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put('/api/transactions/:id', function (req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(TRANSACTIONS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update transaction");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete('/api/transactions/:id', function (req, res) {
  db.collection(TRANSACTIONS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete transaction");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});


app.all('/api/categories', function (req, res, next) {
    // Allow CORS
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/api/categories', function (req, res) {
    res.json(categories);
});

app.get('/api/blocked', function (req, res) {
    res.send('This was not blocked by static content');
});

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function (req, res) {
    res.send('Midas WEB api');
});

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/midas', function (err, database) {

    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 3000, function () {
        var port = server.address().port;
        console.log("Foo now running on port - ", port);
    });

});
# Midas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1. 

The reason for building this application was to learn how to build something using @Angular and to become more familiar with different design patterns that surround it.

The premise for this application is to create a platform to house financial information and allowing you to monitor your personal expenses and track spending behavior. Other use cases include flagging transactions which could be due to fraud or an account that was closed but continues to debit your account.

## Dependencies
The project requires the installation of [MongoDB](https://www.mongodb.com/download-center#community) on your local system. I used the Current Stable Release (3.4.2) of the Community Server edition on Windows 10 Professional. When downloading you can make use of the Windows Server 2008 64 bit edition and it should still install on Windows 10. Once installed, create the `C:\Data\db\` folder and spin up `mongod`. Make sure that you dont allow public firewall access if you connecting to a public network. Alternatively you can start the server with the `--auth` flag to enable security. You might need to set some environmental paths if you plan to execute the server from any path but I would recommend reading up on how to stand up MongoDB if you require something more permanent.

## General Structure
The project is being built using the n-tier design pattern to isolate functionality and promote the independence of each module. At the heart is three main components:

1. The Data Layer - Mongo DB is leveraged for its flexibility as the data schema evolves during the ongoing progress of the project.
2. The Model Layer - Web API endpoints served using [Express](http://expressjs.com/) for a lightweight solution to inject a layer between the data and http calls. This allows the Data Layer to be swopped out and not impact the Application layer.
3. Application Layer - @Angular based web site served using the the default `ng serve` dev server. The application itself is further broken up into modules to assist in the refactoring process.

## Getting it going

1. `git clone https://github.com/Xiltch/midas`
2. `cd midas`
3. `npm install`
4. make some coffee and maybe a sandwich
5. `npm start`

The `start` script will kick off the express server [http://127.0.0.1:3000](http://127.0.0.1:3000) and at the same time will initiate the `ng serve` which will trigger the typescript to compile, host the result [http://127.0.0.1:4200](http://127.0.0.1:4200) and monitor the directory for code changes and recompile the transcript to avoid restarting the server. (in some rare cases you might need to break and restart the server.) If you want to handle these two independantly you can run `ng serve` in the main directory to monitor the main application, in another console go to the express folder and use `nodemon` which will monitor the web api for changes and restart the server.

## Generate Some Dummy Data

visit [http://127.0.0.1:3000/api/injectdata](http://127.0.0.1:3000/api/injectdata) to trigger a call to inject some dummy data into the database.

## Application Structure
I am gradually building out the application exploring different methods for organizing the project as I discover new ways to create components and refactoring to inject new patterns. This path is helping me to also learn how to better leverage my development environment ([Visual Studio Code](https://code.visualstudio.com/)) to streamline the development process. 
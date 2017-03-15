import { MidasPage } from './app.po';

describe('midas App', () => {
  let page: MidasPage;

  beforeEach(() => {
    page = new MidasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

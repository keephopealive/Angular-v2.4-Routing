import { HttpTwoPage } from './app.po';

describe('http-two App', function() {
  let page: HttpTwoPage;

  beforeEach(() => {
    page = new HttpTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

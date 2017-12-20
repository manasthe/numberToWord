import { NumberToWordsPage } from './app.po';

describe('number-to-words App', () => {
  let page: NumberToWordsPage;

  beforeEach(() => {
    page = new NumberToWordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

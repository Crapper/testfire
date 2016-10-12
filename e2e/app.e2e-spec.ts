import { TestfirePage } from './app.po';

describe('testfire App', function() {
  let page: TestfirePage;

  beforeEach(() => {
    page = new TestfirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

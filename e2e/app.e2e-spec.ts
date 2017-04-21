import { NgShoppingPage } from './app.po';

describe('ng-shopping App', () => {
  let page: NgShoppingPage;

  beforeEach(() => {
    page = new NgShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

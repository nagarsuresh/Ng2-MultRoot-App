import { MultiAppModulesPage } from './app.po';

describe('multi-app-modules App', function() {
  let page: MultiAppModulesPage;

  beforeEach(() => {
    page = new MultiAppModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

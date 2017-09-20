import { FarmerInfoAppPage } from './app.po';

describe('farmer-info-app App', () => {
  let page: FarmerInfoAppPage;

  beforeEach(() => {
    page = new FarmerInfoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

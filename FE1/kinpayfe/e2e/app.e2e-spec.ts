import { KinpayfePage } from './app.po';

describe('kinpayfe App', () => {
  let page: KinpayfePage;

  beforeEach(() => {
    page = new KinpayfePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { HomeDispalyPage } from './app.po';

describe('home-dispaly App', () => {
  let page: HomeDispalyPage;

  beforeEach(() => {
    page = new HomeDispalyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

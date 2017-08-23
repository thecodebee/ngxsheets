import { NgxsheetsPage } from './app.po';

describe('ngxsheets App', () => {
  let page: NgxsheetsPage;

  beforeEach(() => {
    page = new NgxsheetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

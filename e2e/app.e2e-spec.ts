import { OlegDevClientsPage } from './app.po';

describe('oleg-dev-clients App', () => {
  let page: OlegDevClientsPage;

  beforeEach(() => {
    page = new OlegDevClientsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

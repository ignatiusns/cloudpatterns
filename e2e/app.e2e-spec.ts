import { CloudpatternPage } from './app.po';

describe('cloudpattern App', () => {
  let page: CloudpatternPage;

  beforeEach(() => {
    page = new CloudpatternPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

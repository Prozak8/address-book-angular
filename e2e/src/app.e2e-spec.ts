import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display create contact header', () => {
    expect(page.getParagraphText()).toEqual('Create contact');
  });

  it('should add a new contact', () => {
    let count = page.cardCount();
    expect(count).toBe(0);

    page.getField('name').sendKeys('Tom Hardy');
    page.getField('email').sendKeys('tom@hardy.com');
    page.getField('company').sendKeys('Paramount Pictures');
    page.getField('role').sendKeys('Lead Actor');
    page.getField('twitter').sendKeys('@Tom__Hardy_');
    page.getField('location').sendKeys('London');
    page.getField('notes').sendKeys('Favourite actor');

    page.getSubmitButton().click();

    count = page.cardCount();
    expect(count).toBe(1);
  });
});

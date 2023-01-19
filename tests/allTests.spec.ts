import {test, expect} from '../fixtures/Fixtures';
import {USER_CREDENTIALS} from '../dataForTests/UserCredentials';
import {SIGN_IN_PAGE_TEXT, HOME_PAGE_TEXT} from '../dataForTests/SiteTexts';

test.beforeEach(async ({page}) => {
});

test.beforeAll(async () => {
    console.log(`Here we go`);
});

test.afterEach(async () => {
    console.log(`Test ended`);
});

test.afterAll(async () => {
    console.log(`Finished`);
});

test('Amazon search', async ({homePage, searchPage, page}) => {
    const searchRequest: string = 'Nike';

    await homePage.makeSearchRequest(searchRequest);

    // Checking that page loaded successfully and has correct search result
    expect(await page.title()).toContain(searchRequest)
    await expect(searchPage.searchField).toHaveValue(searchRequest);
    await expect(searchPage.searchVerification).toContainText(searchRequest);
    await expect(searchPage.searchResult).toContainText([searchRequest]);
});

test('Amazon Login', async ({homePage, loginPage, page}) => {
    await homePage.goToLogin();

    await loginPage.enterEmail(USER_CREDENTIALS.USER_NAME);
    await loginPage.clickContinue();
    await loginPage.enterPassword(USER_CREDENTIALS.PASSWORD);
    await loginPage.clickSubmit();

    //Check that user is logged-in
    expect(await page.title()).toContain(HOME_PAGE_TEXT.SITE_NAME);
    await expect(homePage.userName).toContainText(HOME_PAGE_TEXT.NAME_AFTER_LOGIN);
});

test('Amazon Login Error', async ({homePage, loginPage, page}) => {
    await homePage.goToLogin();

    await loginPage.enterEmail('');
    await loginPage.clickContinue();

    // Checking that page didn't change and error is shown
    expect(await page.title()).toContain(SIGN_IN_PAGE_TEXT.SIGN_IN_DASH);
    await expect(loginPage.signinTextLocator).toContainText(SIGN_IN_PAGE_TEXT.SIGN_IN);
    await expect(loginPage.loginTextLocator).toContainText(SIGN_IN_PAGE_TEXT.EMAIL_FIELD);
    await expect(loginPage.loginError).toBeVisible();
    await expect(loginPage.loginError).toContainText(SIGN_IN_PAGE_TEXT.EMAIL_ERROR);
});
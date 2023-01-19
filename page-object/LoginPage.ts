import {Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly signinTextLocator: Locator;
    readonly loginTextLocator: Locator;
    readonly emailField: Locator;
    readonly continueButton: Locator;
    readonly passwordTextLocator: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;
    readonly loginError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signinTextLocator = page.locator('div[class="a-box-inner a-padding-extra-large"]');
        this.loginTextLocator = page.locator('label[for="ap_email"]');
        this.emailField = page.locator('input[id="ap_email"]');
        this.continueButton = page.locator('input[id="continue"]');
        this.passwordTextLocator = page.locator('label[for="ap_password"]');
        this.passwordField = page.locator('input[id="ap_password"]');
        this.submitButton = page.locator('input[id="signInSubmit"]');
        this.loginError = page.locator('div[id="auth-email-missing-alert"]');
    }

    async enterEmail(email: string) {
        await this.emailField.fill(email);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }
}
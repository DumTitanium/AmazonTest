import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly userName: Locator;
    readonly loginLink: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#nav-link-accountList-nav-line-1');
        this.loginLink = page.locator('#nav-link-accountList');
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
    }

    async goToLogin() {
        await this.loginLink.click();
    }

    async makeSearchRequest(text: string) {
        await this.searchBox.fill(text);
        await this.searchButton.click();
    }
}
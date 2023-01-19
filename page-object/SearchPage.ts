import { Locator, Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchField: Locator;
    readonly searchVerification: Locator;
    readonly searchResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('#twotabsearchtextbox');
        this.searchVerification = page.locator('span[class="a-color-state a-text-bold"]');
        this.searchResult = page.locator('span[class="a-size-base-plus a-color-base a-text-normal"]');
    }
}
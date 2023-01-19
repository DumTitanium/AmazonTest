import {test as base} from '@playwright/test';
import {HomePage} from '../page-object/HomePage';
import {SearchPage} from '../page-object/SearchPage';
import {LoginPage} from '../page-object/LoginPage';

type MyFixtures = {
    homePage: HomePage;
    searchPage: SearchPage;
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
        page: async ({baseURL, page}, use) => {
            await page.goto(baseURL);
            await use(page);
        },

        homePage: async ({page}, use) => {
            const homePage = new HomePage(page);
            await use(homePage);
        },

        searchPage: async ({page}, use) => {
            const searchPage = new SearchPage(page);
            await use(searchPage);
        },

        loginPage: async ({page}, use) => {
            const loginPage = new LoginPage(page);
            await use(loginPage);
        }
    }
)

export {expect} from '@playwright/test';
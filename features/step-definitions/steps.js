import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
// import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I have to see the product list (.*)$/, async (message) => {
    await expect($('.title')).toBeExisting();
    await expect($('.title')).toHaveTextContaining(message);
});


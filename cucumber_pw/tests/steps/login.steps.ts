import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { page } from './World';


Given(/^I am on the login page$/, async () => {
    var workPage = new LoginPage(page as Page);
    await workPage.goto();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    var workPage = new LoginPage(page as Page);
    await workPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    var workPage = new LoginPage(page as Page);
    expect(await workPage.flashMessage.innerText()).toContain(message);
});


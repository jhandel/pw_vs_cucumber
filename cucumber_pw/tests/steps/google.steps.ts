import { Given, When, Then } from '@cucumber/cucumber';

import { expect, Page } from '@playwright/test';
import { GoogleHomePage } from '../page-objects/googleHome.page';
import { page } from './World';

Given('I go to URL {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    var workPage = new GoogleHomePage(page as Page);
    await workPage.goto();
  });

  When('I type {string} in search', async (term) => {
    // Write code here that turns the phrase above into concrete actions
    var workPage = new GoogleHomePage(page as Page);
    await workPage.searchInput.click();
    await workPage.searchInput.fill(term);
    await workPage.searchInput.press("Tab");
  });

  When('I click search', async () => {
    // Write code here that turns the phrase above into concrete actions
    var workPage = new GoogleHomePage(page as Page);
    await workPage.searchBtn.click();
  });

  Then('URL should contain {string}', async (url_val) => {
    expect(page.url()).toContain(url_val);
  });
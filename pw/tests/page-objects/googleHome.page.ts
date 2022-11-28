import { expect, Locator, Page } from '@playwright/test';

export class GoogleHomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('combobox', { name: 'Search' });
    this.searchBtn = page.getByRole('button', { name: 'Google Search' });
  }

  async goto() {
    await this.page.goto('https://www.google.com');
  }
}
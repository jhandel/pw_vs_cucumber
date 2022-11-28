

import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly btnSubmit: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = this.page.getByLabel('Username');
    this.inputPassword = this.page.getByLabel('Password');
    this.btnSubmit = this.page.getByRole('button', { name: 'Login' });
    this.flashMessage = this.page.locator('div#flash');
  }

    async login (username: string, password: string) {
        await this.inputUsername.click();
        await this.inputUsername.fill(username);
        await this.inputPassword.click();
        await this.inputPassword.fill(password);
        await this.btnSubmit.click();
    }

    async goto () {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
}

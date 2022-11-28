import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { LoginPage } from './page-objects/login.page';

const records = parse(fs.readFileSync(path.join(__dirname, 'login_test.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(record.testName, async ({ page }) => {
    var workPage = new LoginPage(page as Page);
    await workPage.goto();
    await workPage.login(record.username, record.password);
    expect(await workPage.flashMessage.innerText()).toContain(record.message);
  });
}
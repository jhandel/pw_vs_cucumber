import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'login_test.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(record.testName, async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(record.username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(record.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('#flash').innerText(record.message);
  });
}
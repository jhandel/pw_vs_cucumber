import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'search_test.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(record.testName, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill(record.term);
    await page.getByRole('combobox', { name: 'Search' }).press('Tab');
    await page.getByRole('button', { name: 'Google Search' }).click();
    expect(page.url()).toContain(record.urlVal);
  });
}
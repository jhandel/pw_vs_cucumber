import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { GoogleHomePage } from './page-objects/googleHome.page';

const records = parse(fs.readFileSync(path.join(__dirname, 'search_test.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(record.testName, async ({ page }) => {
    var workPage = new GoogleHomePage(page as Page);
    await workPage.goto();
    await workPage.searchInput.click();
    await workPage.searchInput.fill(record.term);
    await workPage.searchInput.press('Tab');
    await workPage.searchBtn.click();
    expect(page.url()).toContain(record.urlVal);
  });
}
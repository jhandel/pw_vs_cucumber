import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, Page } from 'playwright';

let browser: Browser;
let page: Page;

setDefaultTimeout(60 * 1000);
Before(async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    return page;
});

After(async () => {
    await browser.close();
});

export { page,browser };
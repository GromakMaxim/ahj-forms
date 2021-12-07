import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Должен появится popover', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.button');
    await page.click('.button');

    const result = await page.evaluate(() => {
      const isHidden = !document.getElementsByClassName('button')[0].classList.contains('hidden');
      return {
        isHidden,
      };
    });
    await expect(result.isHidden)
      .toBe(true);

    await page.waitForSelector('.button');

  });
});

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMode: 250,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("https://subzero.axisbank.com/foundations/colours");
  await page.setViewport();
  const clickbutton =
    "#action > div.MuiStack-root.css-j7qwjs > div.MuiStack-root.css-1bzpuve > button";

  await page.waitForSelector(clickbutton);
  await page.click(clickbutton);

  console.log("my web page loaded");

  await browser.close();
})();

const { chromium } = require("playwright");
const OUT = "C:/Users/HP/AppData/Local/Temp/claude/c--Users-HP-OneDrive-Documents-Pabs-Claude-Project/04ece650-e023-4758-8662-7061e27392ae/scratchpad/shots";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto("http://localhost:3000/services", { waitUntil: "networkidle" });
  await page.screenshot({ path: `${OUT}/img-services.png`, fullPage: true });

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 1100));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/img-routes.png` });
  await page.evaluate(() => window.scrollTo(0, 1900));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/img-howitworks.png` });
  await page.evaluate(() => window.scrollTo(0, 2900));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/img-whatweship.png` });

  await page.goto("http://localhost:3000/what-we-ship", { waitUntil: "networkidle" });
  await page.screenshot({ path: `${OUT}/img-whatweship-page.png` });

  console.log("console errors:", JSON.stringify(errors));
  await browser.close();
})();

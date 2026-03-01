async function measurePageLoad(page, url) {
  const start = Date.now();
  await page.goto(url, { waitUntil: 'commit', timeout: 120_000 });
  await page.waitForLoadState('domcontentloaded', { timeout: 120_000 });
  const domContentLoaded = Date.now() - start;

  await page.waitForLoadState('load', { timeout: 120_000 });
  const fullyLoaded = Date.now() - start;

  return { domContentLoaded, fullyLoaded };
}

module.exports = { measurePageLoad };

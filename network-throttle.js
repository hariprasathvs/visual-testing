const { chromium } = require('@playwright/test');
const { NETWORK_PRESETS } = require('./src/config');
const { runPresetTest } = require('./src/runner');
const { printSummary } = require('./src/reporter');

async function main() {
  console.log('🚀 Starting Amazon.in Network Speed Tests');
  console.log('==========================================');

  const browser = await chromium.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];
  for (const presetName of Object.keys(NETWORK_PRESETS)) {
    results.push(await runPresetTest(browser, presetName));
  }

  await browser.close();
  printSummary(results);
}

main();

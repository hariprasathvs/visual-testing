const { TARGET_URL } = require('./config');
const { applyNetworkPreset } = require('./network');
const { measurePageLoad } = require('./measure');
const { createContext } = require('./browser');
const { printPresetHeader } = require('./reporter');

async function runPresetTest(browser, presetName) {
  printPresetHeader(presetName);

  const context    = await createContext(browser);
  const page       = await context.newPage();
  const cdpSession = await context.newCDPSession(page);

  try {
    await applyNetworkPreset(cdpSession, presetName);

    console.log(`\n⏳ Loading ${TARGET_URL} ...`);
    const { domContentLoaded, fullyLoaded } = await measurePageLoad(page, TARGET_URL);

    console.log(`   DOM Content Loaded : ${domContentLoaded} ms`);
    console.log(`   Full Page Loaded   : ${fullyLoaded} ms`);

    return { preset: presetName, domContentLoaded, fullyLoaded, status: 'PASS' };
  } catch (err) {
    console.error(`   ❌ Test FAILED for ${presetName}: ${err.message}`);
    return { preset: presetName, status: 'FAIL', error: err.message };
  } finally {
    await context.close();
  }
}

module.exports = { runPresetTest };

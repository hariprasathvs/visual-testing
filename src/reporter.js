const { NETWORK_PRESETS, COL } = require('./config');

function printPresetHeader(presetName) {
  const preset = NETWORK_PRESETS[presetName];
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`Testing with: ${presetName}`);
  console.log('─'.repeat(50));
  console.log(`\n📶 Network set to: ${presetName}`);
  console.log(`   ↓ Download : ${preset.download} Mbps`);
  console.log(`   ↑ Upload   : ${preset.upload} Mbps`);
  console.log(`   ⏱ Latency  : ${preset.latency} ms`);
}

function printSummary(results) {
  console.log('\n\n📊 FINAL RESULTS SUMMARY');
  console.log('═'.repeat(55));
  console.log('Preset'.padEnd(COL.preset), 'DOM Load'.padEnd(COL.dom), 'Full Load'.padEnd(COL.full), 'Status');
  console.log('─'.repeat(55));

  for (const r of results) {
    if (r.status === 'FAIL') {
      console.log(`${r.preset.padEnd(COL.preset)} ❌ FAILED - ${r.error}`);
    } else {
      console.log(
        r.preset.padEnd(COL.preset),
        `${r.domContentLoaded} ms`.padEnd(COL.dom),
        `${r.fullyLoaded} ms`.padEnd(COL.full),
        '✅ PASS'
      );
    }
  }

  console.log('═'.repeat(55));
  console.log('\n✅ All tests complete!');
}

module.exports = { printPresetHeader, printSummary };

const { NETWORK_PRESETS } = require('./config');

const mbpsToBytes = (mbps) => (mbps * 1024 * 1024) / 8;

async function applyNetworkPreset(cdpSession, presetName) {
  const preset = NETWORK_PRESETS[presetName];
  if (!preset) throw new Error(`Unknown preset: ${presetName}`);

  await cdpSession.send('Network.emulateNetworkConditions', {
    offline:            false,
    downloadThroughput: mbpsToBytes(preset.download),
    uploadThroughput:   mbpsToBytes(preset.upload),
    latency:            preset.latency,
  });
}

module.exports = { applyNetworkPreset };

const TARGET_URL = 'https://www.amazon.in';

const NETWORK_PRESETS = {
  '5G':      { download: 20,   upload: 10,   latency: 1   },
  '4G':      { download: 4,    upload: 3,    latency: 20  },
  '3G_FAST': { download: 1.5,  upload: 0.75, latency: 40  },
  '3G_SLOW': { download: 0.4,  upload: 0.4,  latency: 200 },
  '2G':      { download: 0.25, upload: 0.05, latency: 300 },
};

const BROWSER_CONTEXT_OPTIONS = {
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  viewport:  { width: 1280, height: 720 },
};

const COL = { preset: 12, dom: 14, full: 14 };

module.exports = { TARGET_URL, NETWORK_PRESETS, BROWSER_CONTEXT_OPTIONS, COL };

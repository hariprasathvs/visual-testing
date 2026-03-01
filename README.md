# Visual Testing

## Network Throttle Test

Tests page load performance of a target URL across real-world network conditions using Playwright and Chrome DevTools Protocol (CDP).

### What it measures

| Metric | Description |
|---|---|
| DOM Content Loaded | Time until the HTML is fully parsed and the DOM is ready |
| Full Page Loaded | Time until all resources (scripts, stylesheets) have loaded |

### Network presets

| Preset | Download | Upload | Latency |
|---|---|---|---|
| 5G | 20 Mbps | 10 Mbps | 1 ms |
| 4G | 4 Mbps | 3 Mbps | 20 ms |
| 3G_FAST | 1.5 Mbps | 750 Kbps | 40 ms |
| 3G_SLOW | 400 Kbps | 400 Kbps | 200 ms |
| 2G | 250 Kbps | 50 Kbps | 300 ms |

### How it works

1. Launches a Chromium browser
2. For each network preset, opens a fresh browser context
3. Applies the network conditions via CDP (`Network.emulateNetworkConditions`)
4. Navigates to the target URL and waits for:
   - `domcontentloaded` — DOM fully parsed
   - `load` — all resources loaded
5. Records both timestamps and prints a summary table

### Prerequisites

```bash
npm install
npx playwright install chromium
```

### Run

```bash
npm run network-throttle
```

### Sample output

```
Preset       DOM Load       Full Load      Status
5G           1254 ms        1268 ms        ✅ PASS
4G           1760 ms        1763 ms        ✅ PASS
3G_FAST      3303 ms        3304 ms        ✅ PASS
3G_SLOW      11131 ms       11131 ms       ✅ PASS
2G           17253 ms       17254 ms       ✅ PASS
```

### Changing the target URL

Edit the `TARGET_URL` constant in [network-throttle.js](network-throttle.js):

```js
const TARGET_URL = 'https://www.amazon.in';
```

### Why this matters

Most testing happens on fast office WiFi. Real users — especially in tier-2 and tier-3 cities — are on 3G or below. This test surfaces the network conditions under which your product slows down or breaks entirely, before your users find it for you.

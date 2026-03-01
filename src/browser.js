const { BROWSER_CONTEXT_OPTIONS } = require('./config');

function createContext(browser) {
  return browser.newContext(BROWSER_CONTEXT_OPTIONS);
}

module.exports = { createContext };

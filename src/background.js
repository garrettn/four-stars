let registered = null;

async function registerScript(prefs) {
  if (registered) {
    registered.unregister();
  }

  const urls = (prefs.urls || []).map(domain => `*://*.${domain}/*`);
  const matches =
    prefs.listType === 'enable' && urls.length > 0 ? urls : ['*://*/*'];
  const config = {
    matches,
    js: [{ file: 'content.js' }]
  };

  if (prefs.listType === 'disable' && urls.length > 0) {
    config.excludeMatches = urls;
  }

  registered = await browser.contentScripts.register(config);
}

browser.storage.local.get().then(registerScript);
browser.storage.onChanged.addListener(changes =>
  registerScript({
    listType: changes.listType.newValue,
    probability: changes.probability.newValue,
    urls: changes.urls.newValue
  })
);

let registered = null;

async function registerScript() {
  if (registered) {
    registered.unregister();
  }

  registered = await browser.contentScripts.register({
    matches: ['*://*/*'],
    js: [{ file: 'content.js' }]
  });
}

registerScript();

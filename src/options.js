import defaultOptions from './default-options';

function rehydrate(options) {
  const { probability, listType, urls } = Object.assign(
    {},
    defaultOptions,
    options
  );
  document.querySelector('#probability').value = probability;
  if (listType === 'enable') {
    document.querySelector('#list-enable').checked = true;
  } else {
    document.querySelector('#list-disable').checked = true;
  }
  document.querySelector('#urls').value = urls.join('\n');
}

function handleSubmit(e) {
  e.preventDefault();
  const { elements } = e.target;
  const results = {
    probability: parseInt(elements.probability.value),
    listType: elements.listtype.value,
    urls: elements.urls.value.split(/[\s,]+/)
  };
  browser.storage.local.set(results);
}

function restoreDefaults() {
  browser.storage.local
    .set(defaultOptions)
    .then(() => rehydrate(defaultOptions));
}

function init() {
  browser.storage.local.get().then(rehydrate);
  document.querySelector('form').addEventListener('submit', handleSubmit);
  document.querySelector('#restore').addEventListener('click', restoreDefaults);
}

document.addEventListener('DOMContentLoaded', init);

import { string, tokens } from 'wink-nlp-utils';

function getReplacementWord(word) {
  const stem = string.stem(word);
  // Using slice instead of replace because the extracted stem
  // might not match the case of the original word
  return '****' + word.slice(stem.length);
}

function replaceRandomWord(textContent) {
  const words = tokens.removeWords(string.tokenize0(textContent));

  if (!words.length) {
    return;
  }

  const toReplace = words[Math.floor(Math.random() * words.length)];

  return textContent.replace(toReplace, getReplacementWord(toReplace));
}

function traverseAndReplace({ probability }) {
  const iterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_TEXT,
    node =>
      Math.random() > probability / 100
        ? NodeFilter.FILTER_REJECT
        : /^\s*$/.test(node.data)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT
  );

  let currentNode;

  while ((currentNode = iterator.nextNode())) {
    currentNode.textContent = replaceRandomWord(currentNode.textContent);
  }
}

browser.storage.local.get('probability').then(traverseAndReplace);

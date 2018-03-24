const probability = 0.1;

function isLexicalWord(word) {
  // TODO: Obviously need a better check than this
  return word.length > 3;
}

function getReplacementWord(word) {
  const match = word.match(/\w+(ing|er|ed|s)$/);
  return match ? '****' + match[1] : '****';
}

function replaceRandomWord(textContent) {
  const words = textContent.split(/\W+/).filter(isLexicalWord);

  if (!words.length) {
    return;
  }

  const toReplace = words[Math.floor(Math.random() * words.length)];

  return textContent.replace(toReplace, getReplacementWord(toReplace));
}

const iterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  node => {
    if (Math.random() > probability) {
      return NodeFilter.FILTER_REJECT;
    }

    if (/^\s*$/.test(node.data)) {
      return NodeFilter.FILTER_REJECT;
    }

    return NodeFilter.FILTER_ACCEPT;
  }
);

let currentNode;

while ((currentNode = iterator.nextNode())) {
  currentNode.textContent = replaceRandomWord(currentNode.textContent);
}

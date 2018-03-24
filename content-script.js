const probability = 0.1;

function replaceRandomWord(node) {
  const words = node.textContent.split(/\W+/).filter(w => w.length > 3);

  if (!words.length) {
    return;
  }

  const toReplace = words[Math.floor(Math.random() * words.length)];

  node.textContent = node.textContent.replace(toReplace, '****');
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
  replaceRandomWord(currentNode);
}

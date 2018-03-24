const iterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  node =>
    !/^\s*$/.test(node.data)
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT
);

let currentNode;
let nodes = [];

while ((currentNode = iterator.nextNode())) {
  nodes.push(currentNode.textContent);
}

console.log(nodes);

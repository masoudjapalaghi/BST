function Node(value, left, right, parent = '', children = []) {
  this.value = value;
  this.right = right;
  this.left = left;
  this.parent = parent;
  this.children = children;
  this.isRight = null;
  this.isLeft = null;
  this.position = {};
}

function getPosition(position, isLeft = false) {
  var axisX = 350;
  var axisY = 80;
  const { x, y } = position;
  return {
    x: isLeft ? x - axisX + y : x + axisX - y,
    y: y + axisY,
  };
}

function createTree(arr) {
  const root = arr[0];
  if (root) {
    root.position = { x: 900, y: 60 };
  }

  for (var i = 1; i < arr.length; i++) {
    nodeDirection(root, arr[i]);
  }

  try {
    createData(root);
  } catch {
    console.log('No Input');
  }
}

function nodeDirection(root, node) {
  var nodeValue = Number(node.value);
  var rootValue = Number(root.value);
  if (nodeValue < rootValue) {
    if (root.left == null) {
      root.left = node;
      node.isLeft = true;
      node.position = getPosition(root.position, true);
    } else {
      nodeDirection(root.left, node);
    }
  } else if (nodeValue > rootValue) {
    if (root.right == null) {
      root.right = node;
      node.isRight = true;
      node.position = getPosition(root.position);
    } else {
      nodeDirection(root.right, node);
    }
  }
}
function createData(node) {
  if (node == null) {
    return;
  }

  if (node.left) {
    node.children.push(node.left);
    node.left.parent = node;
    if (!node.right) {
      let newNode = new Node('Empty', null, null);
      newNode.isRight = true;
      node.children.push(newNode);
      newNode.parent = node;
    }
  }

  if (node.right) {
    node.children.push(node.right);
    node.right.parent = node;
    if (!node.left) {
      let newNode = new Node('Empty', null, null);
      newNode.isLeft = true;
      node.children.unshift(newNode);
      newNode.parent = node;
    }
  }

  createData(node.left);
  createData(node.right);
}

export function createNodes(list) {
  const new_list = [];

  for (var i = 0; i < list.length; i++) {
    if (list[i] == '') {
      continue;
    }
    new_list.push(new Node(list[i], null, null));
  }

  createTree(new_list);
  return new_list;
}

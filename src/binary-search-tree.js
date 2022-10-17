const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.$root = null;
  }

  root() {
    return this.$root;
  }

  add(data) {
    this.$root = addWithIn(this.$root , data);
    function addWithIn( node, value) {
      if (!node) {
        return new Node(value);
      }
      if ( node.data === value) {
        return node;
      }
      if ( value < node.data) {
        node.left = addWithIn( node.left , value );
      }
      else {
        node.right = addWithIn( node.right , value );
      }
      return node;
    }
  }

  has(data) {
    return searchWitnIn( this.$root, data);
    function searchWitnIn( node, value) {
      if (!node) {
        return false;
      }
      if ( node.data === value) {
        return true;
      }
      return value < node.data ? searchWitnIn( node.left, value) : searchWitnIn( node.right, value)
    }
  }

  find(data) {
    return searchWitnData( this.$root, data);
    function searchWitnData( node, value) {
      if (!node) {
        return null;
      }
      if ( node.data === value) {
        return node;
      }
      return value < node.data ? searchWitnData( node.left, value) : searchWitnData( node.right, value)
    }
  }

  remove(data) {
    this.$root = removeNodeLis(this.$root, data);
    function removeNodeLis( node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNodeLis( node.left, value );
        return node;
      }
      else if( node.data < value) {
        node.right = removeNodeLis( node.right, value );
        return node;
      }
      else {
        if (!node.left && !node.right){
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let mitFromR = node.right;
        while (mitFromR.left) {
          mitFromR = mitFromR.left;
        }
        node.data = mitFromR.data;
        node.right = removeNodeLis(node.right, mitFromR.data)
        return node;
      }
    }
  }

  min() {
    if (!this.$root) {
      return;
    }
    let current = this.$root;
    while( current.left) {   
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.$root) {
      return;
    }
    let current = this.$root;
    while( current.right) {   
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
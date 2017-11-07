// ============================
// What is a binary search tree?
// ============================

//                 Node1
//                /
//            Node2
//           /    \
//          /      Node3
//  Root-Node4
//          \      Node5
//           \    /
//            Node6
//                \
//                 Node7

// A binary search tree is a data structure that... looks like a tree :) There is a root node at the top. From there, each node can only have at most, two children. Child nodes to the left are lesser in value when compared to the parent node and child nodes to the right are greater in value when compared to the parent node. To be a true BST, the entire subtree of a particular node needs to be less than or greater than the value of the parent node (depending on what side the subtree is on). 
// A balanced BST is a tree that only has a difference of one level between the full tree height. It's important to be balanced because unbalance takes away efficiency. It also can turn into just one branch which is basically a linked list and makes the purpose of using a binary search tree pointless. 
// Deleting - there are 3 scenarios. A node that has no children, a node that has one child and a node that has 2 children. 
// A node with no children is easy, just remove the connection to the parent node and delete the node.
// A node with one child is also easy, just connect the parent node to the child node (above and below the node being deleted or grandparent to grandchild) and then delete the node.
// It's trickier with a node that has 2 children. You need to find the node with the lowest value on the right side (or the greatest value on the left side) and replace the node to be deleted with the found lowest value node. Then delete the found node from it's original location. Taking the smallest or greatest value makes sure that that node will only have one child at most and that's an easy fix. 

// PROS 
// ====
// Very efficient to access/search nodes. As long as the height of the tree (levels of nodes down) is not too high. 

// CONS 
// ====
// Adding or deleting nodes can be more difficult. Especially if trying to keep the tree balanced. 
// You need a comparison function to find the correct location of a node whereas with a SLL, you only need to go down a single list line. 


// =========================
// Javascript code for a BST
// =========================

// Create a node with a value
class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

// BST class
class BinarySearchTree {
  constructor() {
    // starts the build of the object with root being at the head
    this.root = null;
  }

  // method to add a single value to the BST 
  add(val) {
    // if there is no root, the tree has not been started so start it here
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    let current = this.root;
    let node = new Node(val);
    
    // as long as current is not null, continue the loop. This will allow you to transverse down the tree until you find the correct location for the new node.
    while (current) {
      // if the value is LESS than the current value
      // ^^^
      if (val < current.value) {
        if (!current.left) {
          // if there is not left node, just add the node here because the value is less than the current node
          current.left = node;
          break;
        } else {
          // otherwise set current equal to the left node and restart the while loop to keep transversing down the tree 
          current = current.left;
        }
      // if the value is GREATER than the current value
      // ^^^
      } else {
        if (!current.right) {
          // if there is not right node, just add the node here because the value is greater than the current node
          current.right = node;
          break;
        } else {
          // otherwise set current equal to the right node and restart the while loop to keep transversing down the tree 
          current = current.right;
        }
      }
    }
  }

  // method to add an array of values to the BST
  populateTree(arr) {
    // first sort the array
    arr = arr.sort((a, b) => a - b)
    // the recursive function used to choose values in the array according to a binary search so that the BST can be balanced. 
    let binarySearch = (arr, start, end) => { // if start and end values are ever the same, the next round of binarySearch() will both result in null
      // the condition that ends the recursive loop, at some point, all halves will be portioned out and start will become greater than end, so will stop the loop.
      if (start > end) {
        return null;
      }
      
      let mid = start + Math.floor((end - start) / 2);
      let val = arr[mid];

      this.add(val);
      binarySearch(arr, start, mid - 1); // this portions it off to the left half of the given search
      binarySearch(arr, mid + 1, end); // this portions it off to the right half of the given search
    };
    binarySearch(arr, 0, arr.length - 1); // this starts off the search
    this.showObjectTree(); // show the tree once finished
  }

  showObjectTree() {
    console.log(JSON.stringify(this.root, null, 2)); // prints out the object tree
  }
}

// -----------------
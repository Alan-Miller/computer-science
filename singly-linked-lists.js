// ============================
// What is a singly linked list?
// ============================

// Example: Node1 -> Node2 -> Node3 -> Node4 -> ...

// A singly linked list is a data structure that holds a list of linked nodes. Each node has data and a pointer or reference (often called next). The pointer points to the next node on the list.
// It's like a treasure hunt, once you find a clue, it will give you another clue to the next location.
// When adding a node or removing a node, all you have to do is change the pointers so that they are pointing to the correct node.
// For adding in the middle of a list - Find where the node needs to be added. Point the new node to the parent's original child. Now point the parent to the new node. 
// For removing - Find the node. Point the node's parent to the node's child. Done.

// PROS 
// ====
// Adding and deleting is pretty easy compared to other structures like an array.
// You do not need to define a size.
// Your pointers determine the order of the list. It does not matter the order at which nodes are added.

// CONS 
// ====
// They use more memory than arrays because they also have pointers.
// You have to start from the beginning of the list (you can only transverse in one direction for a SLL) so if something is at the end, accessing that data can be expensive.

// WHY?
// ====
// A SLL has the advantage when it comes to adding something in the middle of the list. If it was an array, the latter half of the items would have to be moved to keep the right order. Whereas with a SLL, it is a simple data insertion affecting only 2 nodes. 
// Adding to a linked list can be faster than adding to a binary search tree. Especially if you're trying to keep the BST balanced. 
// Etc...

// =========================
// Javascript code for a SLL
// =========================

// class to create a node
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // prototype method to add to the linked list
  add(val) {
    let node = new Node(val)
    
    if (!this.head) {
      // the list hasn't been started yet so add a head
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // when current.next is null, it is the last node on the list. Set it's next value equal to the new node
      current.next = node;
    }
  }

  // prototype method to add to the middle of the linked list
  middleAdd(middleVal, newVal) {
    let current = this.head;
    let node = new Node(newVal)
    while (current.next) {
      if (current.value === middleVal) {
        // make the new node equal to the current node's next object
        node.next = current.next;
        // make the current node's next object equal to the new node
        current.next = node;
        break;
      }
      current = current.next;
    }
  }

  // prototype method to remove from the linked list
  remove(val) {
    let current = this.head;
    // if what's being removed is the first node
    if (current.value === val) {
      this.head = current.next;
    } else {
      let previous = current;
      while (current.next) {
        // if what's being removed is in the middle of the list
        if (current.value === val) {
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }
      // if what's being removed is the last node
      if (current.value === val) {
        previous.next = null;
      }
    }
  }
  
  showList() {
    let list = ''
    let current = this.head
    while (current.next) {
      list += current.next.next ? current.value + " ➔ " : current.value
      current = current.next;
    }
    console.log(list)
  }
}








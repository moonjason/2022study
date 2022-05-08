/* 
Instructions 
https://leetcode.com/problems/reverse-linked-list/ 

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

*/ 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
var reverseListMine = function(head) {
    let l1 = head;
    let temp = l1;
    const values = [];
    while (l1) {
        values.push(l1.val);
        l1 = l1.next;
    };
    for ( let i = values.length - 1; i > -1; i--) {
        temp.val = values[i];
        temp = temp.next;
    };
    return head
};
 // Mine ^

 // More Concise VVV 
var reverseList = function(head) {  // [ 1, 2, 3, 4, 5 ]
    let prevNode=null; // returning this, you're turning this into the reversed 
    let currentNode=head; 
    while(currentNode){ 
       let nextNode=currentNode.next;  // temp var
       currentNode.next=prevNode; // redirecting node for reversal of linked list 
       prevNode=currentNode; // appending node to linked list with the proper pointer 
       currentNode=nextNode; // iterating through linked list 
    }
    return prevNode
}

// Recursive version vvv 
const reverseListRecursive = function (head, prev = null) {

    // We reached the end of the list. Return the previous node.
    if (!head){
        // We reached the end of the list. 
        // Return the previous node. Because the previous node is the new head of list.
        return prev;
    }
     
    let next_node = head.next;  // Store the next node (We're about to override and we need it)
        head.next = prev;       // Set the current node to point to the previous node - Re orders the LinkedList
        prev      = head;       // Set the previous node to the current node
    // Do it again, on the next node (The one we stored earlier)
    return reverseList(next_node, prev)
};



console.log(reverseList([1,2,3,4,5]))
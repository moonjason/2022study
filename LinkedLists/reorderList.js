/**
 * 
https://leetcode.com/problems/reorder-list/

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// O(N) Solution 
var reorderList = function(head) { // [1,2,3,4,5]
    // Loop through the list and store each value in an array
    // Two point approach - loop through array
    // Take turns incrementing left and right pointers 
    // Once those two pointers meet  return the Linked List 
    const values = [];
    let node = head;
    while(node){ 
        values.push(node)
        node = node.next
    }

    let left = 0;
    let right = values.length - 1;
    
    while(left < right) { 

        values[left].next = values[right] // left = 0;right = 4 [ 1 -> 5]
        left++ // left = 0
        values[right].next = values[left] // left = 1; right = 4 [ 1 -> 5 -> 2]
        right-- // right = 3
        
    }  
    
    values[left].next = null // if left === 3 a.k.a. last node 
    return values[0]
}
console.log(1 % 2)
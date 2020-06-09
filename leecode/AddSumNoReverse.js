/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var res = new ListNode(0);
  var p = l1,
    q = l2,
    curr = res;
  var carry = 0;
  while (p != null || q != null) {
    var x = p != null ? p.val : 0;
    var y = q != null ? q.val : 0;
    var sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return res.next;
};

var addTwoNumNoReverse = function (l1, l2) {
  var s1 = [];
  var s2 = [];
  var p = l1;
  var q = l2;
  var r = [];
  var res = new ListNode(0);
  var curr = res;
  var carry = 0;
  while (p != null) {
    s1.push(p);
    p = p.next;
  }
  while (q != null) {
    s2.push(q);
    q = q.next;
  }
  while (s1.length > 0 || s2.length > 0) {
    var x = s1.length > 0 ? s1.pop().val : 0;
    var y = s2.length > 0 ? s2.pop().val : 0;
    var sum = x + y + carry;
    carry = Math.floor(sum / 10);
    r.push(sum % 10);
  }
  if (carry > 0) {
    r.push(carry);
  }
  while (r.length > 0) {
    curr.next = new ListNode(r.pop());
    curr = curr.next;
  }
  return res.next;
};

var l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(2);
var l2 = new ListNode(4);
l2.next = new ListNode(6);
l2.next.next = new ListNode(5);
console.log(addTwoNumNoReverse(l1, l2));

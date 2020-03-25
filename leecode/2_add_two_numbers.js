/**
 * Definition for singly-linked list.
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
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode(0);
  // let res = null;
  let i = res;
  let inNum = 0;

  while (l1 != null || l2 != null) {
    // 只要有值就加，没有值的就当0
    // 不需要判断next，直接设置为null先，指针已经到next，直接修改指针指向对象
    const x = l1 == null ? 0 : l1.val;
    const y = l2 == null ? 0 : l2.val;
    const sum = x + y + inNum;
    // 先放在下一步，否则指针丢失，新增的内容放在下一个，而不是替换
    res.next = new ListNode(sum % 10);
    inNum = Math.floor(sum / 10);
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
    res = res.next;
  }
  //  最后处理进位
  if (inNum > 0) {
    res.next = new ListNode(inNum);
  }
  return i.next;
};

function createList(arr) {
  let res = new ListNode();
  let iRes = res;
  arr.forEach((v, i) => {
    if (i == arr.length - 1) {
      iRes.val = v;
      iRes.next = null;
    } else {
      iRes.val = v;
      iRes.next = new ListNode();
    }
    iRes = iRes.next;
  });
  // console.log(`------res------`);
  // console.log(res);
  return res;
}

const a = addTwoNumbers(createList([2, 4, 9]), createList([5, 6, 4]));
console.log(`------a------`);
console.log(a);

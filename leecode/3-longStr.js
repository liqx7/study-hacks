/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //     动态规划
  let res = 0;
  let coll = new Set();
  let i = 0,
    j = 0;
  while (i < s.length && j < s.length) {
    if (!coll.has(s[j])) {
      coll.add(s[j]);
      res = Math.max(res, j - i + 1);
      j++;
    } else {
      coll.delete(s[i]);
      i++;
    }
  }
  return res;
};

var lengthOfLongestSubstring1 = function (s) {
  let res = 0;
  let m = new Map();
  let i = 0,
    j = 0;
  while (i < s.length && j < s.length) {
    if (!m.has(s[j])) {
      m.add(s[j], j);
      res = Math.max(res, j - i + 1);
      j++;
    } else {
      m.delete(s[i]);
      i++;
    }
  }
};

console.log(lengthOfLongestSubstring("abcacbbb"));

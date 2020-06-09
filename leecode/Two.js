nums = [2, 7, 11, 15];
target = 9;
var hash = {};
var res = [];
for (let i = 0; i < nums.length; i++) {
  var a = nums[i];
  if (hash[String(a)] !== undefined) {
    res = [i, hash[String(a)]];
    break;
  } else {
    hash[target - a] = i;
  }
}

console.log(`------res------`);
console.log(res);

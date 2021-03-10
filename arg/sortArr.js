function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr[0];
  }

  let mid = Math.floor(len / 2);

  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  const res = mergeTwoSortedArr(mergeSort(leftArr), mergeSort(rightArr));
  return res;
}

function mergeTwoSortedArr(arr1, arr2) {
  let i = 0,
    j = 0;
  let len1 = arr1.length,
    len2 = arr2.length;
  let res = [];
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i += 1;
    } else {
      res.push(arr2[j]);
      j += 1;
    }
  }

  if (i < len1) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}

// mergeTwoSortedArr([4, 6], [5, 8]);

const a = mergeSort([
  [1, 2],
  [5, 6],
  [4, 8],
]);
console.log(`------a------`);
console.log(a);

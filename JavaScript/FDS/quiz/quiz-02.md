# 2. 자료 구조와 알고리즘



```js
// 선형 검색

function linearSearch( array, target) {
  let index = -1;
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) index = i;
  }
  return index;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1
```

```js
// 이진 검색

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let result = -1;  // return은 되도록 적게 사용하면 좋다.

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      // return mid;
      result = mid; // mid의 index의 값을 반환
      break;  // 무한루프 방지
    } if (array[mid] < target) {
      start = mid + 1;
    } else if (array[mid] > target) {
      end = mid - 1;
    }
  }
  // return -1;
  return result;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1

```
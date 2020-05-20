# 2. 자료 구조와 알고리즘

## 1. 검색

### 1.1 선형 검색

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

### 1.2 이진 검색

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

## 2.정렬

### 2.1 버블정렬

```js

function bubbleSort(array) {
    for(let j = 0; j < array.length - 1; j++){
        for(let i = 0; i < array.length - 1; i++) {
            if( array[i] > array[i+1] ){
                // 배열에서 재할당
                let temp = array[i+1];
                array[i+1] = array[i];  
                array[i] = temp;     
            }
            // console.log(array)
        }
    }
    return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));     // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
```


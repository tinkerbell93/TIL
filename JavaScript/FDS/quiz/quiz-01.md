# 1. 제어문 연습 문제

```js
// 1.
var x = 15;
// if ( x > 10 && x < 20 ) console.log(x);
var result = (x > 10 && x < 20) && 'true';
console.log(result);
```

```js
// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// 문자열 타입 변환하는 방법 : + 문자열
// 문자열로 담을 변수가 필요
var str = '';
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // 짝수만 출력
    str += i; // str = str + i;
  }
}
console.log(str);
```

```js
// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (let i = 10; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

```

```js
// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let i = 0;
while (i < 10) {
  if (!(i % 2)) {
    console.log(i);
  }
  i++;
}
```

```js
// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

let i = 10;
while (i > 0) {
  if (i % 2) {
    console.log(i);
  }
  i--;
}
```

```js
// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

let sum = 0;
for ( let i = 0; i < 10; i++ ){
  sum += i;
}
console.log(sum);
```

```js
// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// 73

let sum = 0;
for (let i = 0; i < 20; i++) {
  if (!(i % 2 === 0 || i % 3 === 0)) {
    sum += i;
  }
}
console.log(sum);
```

```js
// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// 117

let sum = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
}
console.log(sum);
```

```js
// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log(`[ ${i}, ${j} ]`);
    }
  }
}

```

```js
// 11. 삼각형 출력하기 - pattern 1

let result = '';
for (let i = 0; i < 5; i++) {
  // i = 0일때, *
  // i = 1일때, **
  // i = 2일때, ***
  result += '*';
  console.log(result);
}
```

```js
// 12. 삼각형 출력하기 - pattern 2

let result = '';
// i 라인 개수
for (let i = 0; i < 5; i++) {
  // j 공백
  let space = '';
  for (let j = 0; j < 5; j++) {
    if (i + j > 4) {
      space += ' ';
    }
  }
  // k 별
  let star = '';
  for (let k = 0; k < 5; k++) {
    if (i + k < 5) {
      star += '*';
    }
  }
  result = space + star;
  console.log(result);
}
```

```js
// 13. 삼각형 출력하기 - pattern 3

for (let i = 0; i < 5; i++) {
  let result = '';
  for (let j = 0; j < 5; j++) {
    if (i + j < 5) {
      result = result + '*';
    }
  }
  console.log(result);
  result = ' ' + result;
}
```

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












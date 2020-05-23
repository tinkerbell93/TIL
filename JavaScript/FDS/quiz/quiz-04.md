```js
// Q2) words 배열의 각 요소(문자열)를 역순으로 가지는 새로운 배열(newWords)을 만들어주세요.
const words = ['hello', 'world', 'nice', 'to', 'meet', 'you'];
const newWords = words.map(word => word.split('').reverse().join(''))
// 'hello' word
// [hello] split
// ['h', 'e', 'l', 'l', 'o'] spilt
// ['o', 'l', 'l', 'e', 'h'] reverse
// ['olleh'] join() -> 기본구분자는 ,이기때문에 join('')를 넣는다.



// 요소에 접근을 해서 문자열을 뒤집는다.



console.log('Q2');
console.log(newWords); // [ 'olleh', 'dlrow', 'ecin', 'ot', 'teem', 'uoy' ]

// Q4) numbers3 배열의 요소 중 요소의 값이 인덱스와 일치하는 요소를 출력해주세요.
// forEach로 풀어보기
const numbers3 = [0, 3, 88, 3, 2, 4, 6, 8, 8];
console.log('Q4');
numbers3.filter((number, index) => {
    number === index ? console.log(number) : -1;        
})
// 0
// 3
// 6
// 8

// // Q5) kvArray 배열을 사용하여 아래 예제와 같은 요소를 가진 새로운 배열(reformattedArray)을 만들어주세요.
// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }
//   ];
//   const reformattedArray = kvArray.map((array, index) => {
//     return kvArray.push(array.key )
//     console.log(array.key , array.value);
//   })
//   console.log('Q5');
//   console.log(reformattedArray);
//   /*
//   [
//     { '1': 10 },
//     { '2': 20 },
//     { '3': 30 }
//   ]
//   */
```


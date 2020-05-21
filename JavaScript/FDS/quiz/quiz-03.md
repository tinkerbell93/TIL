# 3. Array HOF 연습 문제

## 1. html 생성

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}">
<label><input type="checkbox" ${todo.completed === true ? 'checked' : ''}>${todo.content}</label>
</li>`
  });

  return html;
}

console.log(render());
/*
  <li id="3">
    <label><input type="checkbox">HTML</label>
  </li>
  <li id="2">
    <label><input type="checkbox" checked>CSS</label>
  </li>
  <li id="1">
    <label><input type="checkbox">Javascript</label>
  </li>
  */
```



## 2. 특정 프로퍼티 값 추출

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map(todo => todo[key]);
  
  // 연습 코드
  // let result = [];
  // todos.forEach(todo => {
  //     result += todo[key];
  // })
  // return result;
  
  // forEach로 풀었을때
  // todos.forEach((todo, index) => {
  //     result[index] = todo[key];
  // })
  // return result;
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]

```



## 3. 프로퍼티 정렬

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  return todos.slice().sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
}
// a.key와 a[key] 둘 다 사용할 수 있지 않나????

console.log(sortBy('id'));
/*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
  */
console.log(sortBy('content'));
/*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
console.log(sortBy('completed'));
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
  */
```



## 4. 새로운 요소 추가

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos = [newTodo].concat(todos)
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
  [
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
```



##  5. 특정 요소 삭제

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  // return이 아니라 todos에 값을 재할당하는거지????
  // true인 것만 반환해서 리턴하는게 안되나????
}

removeTodo(2);

console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
*/
```








# 3. Array HOF 연습 문제

## 1. html  생성

아래 배열을 사용하여 html을 생성하는 함수를 작성하라.

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

요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중, 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.

단, for 문이나 Array#forEach는 사용하지 않도록 하자.

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

요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.

단, todos는 변경되지 않도록 하자.

참고: [Array.prototype.sort](https://poiemaweb.com/fastcampus/array#91-arrayprototypesort)

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
// nop.이라고 생각했지만 둘 다 사용이 가능하다..????

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

새로운 요소(예를 들어 `{ id: 4, content: 'Test', completed: false }`)를 인수로 전달하면 todos의 선두에 새로운 요소를 추가하는 함수를 작성하라. 단, Array#push는 사용하지 않도록 하자.

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  //	todos = [newTodo].concat(todos);
  
  // 함수 호출을 하지 않아고 리터럴을 만들수 있다.
  todos = [newTodo, ...todos];
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

todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  // return이 아니라 todos에 값을 재할당하는거지? => filter는 accessor metho이기때문이다.
  // true인 것만 반환해서 리턴하는게 안되나????
}

removeTodo(2);
// removeTodo(4); 라면?

console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
*/
```

요소를 제거하거나 삭제한다 => filter를 떠올리기



## 6. 특정 요소의 프로퍼티 값 반전

todos에서 **대상 요소의 id를 인수로 전달하면** 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.

hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 [Object.assign](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 또는 [스프레드 문법](https://poiemaweb.com/fastcampus/spread-syntax#3-객체-리터럴-내부에서-사용하는-경우)을 사용한다.

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  // todos.map(todo => todo = {...todos[id], !(todo.completed)});
  todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
}

// todo.id === id 조건이 있는 이유? 인수로 전달된 해당 객체를 조작하기 위해서????
// 인수를 전달받은 아이디값과 동일한지 확인, 조건이 없다면 모든 객체의 completed 값이 반전됨

// 빈객체를 만들고
// todo를 빈객체에 얕은 복사를 하는데 todo.completed의 값은 반대로 넣음
// 그리고 todos에 재할당

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
```

이렇게 해도 원했던 값이 나오는 이유는? 

```js
function toggleCompletedById(id) {
  todos.map(todo => (todo.id === id ? todo.completed = !todo.completed : todo));
}
```

원본의 todos에서 todo.completed만 바꼈기 때문이다. 문제의 답은 원본 객체에서 새로운 객체로 만들어서 리턴했지만 해당 함수는 원본 객체에 수정했기 때문이다.



## 7. 모든 요소의 completed 프로퍼티 값을 true로 설정

todos의 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 [Object.assign](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 또는 [스프레드 문법](https://poiemaweb.com/fastcampus/spread-syntax#3-객체-리터럴-내부에서-사용하는-경우)을 사용한다.

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos = todos.map((todo, index) => {
    console.log(todo[index]); // undefined를 식별자로 생각하여 const undefined = ''; 를 사용하면 에러남
    console.log(todo[index] = {}); // undefined
    todo[index] = { ...todo, completed: true };
    return todo[index];
  });
  // map 메소드 이용
  // todos = todos.map(todo => ({ ...todo, completed: true }));

  // forEach 메소드 이용
  // todos.forEach((todo, index) => (todos[index] = { ...todo, completed: true }));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
```



## 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.

단, for 문, Array#forEach는 사용하지 않도록 하자.

```js
// 완료한 일을 필터해서 그것의 length를 출력한다.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.filter(todo => todo.completed).length
}
// const countCompletedTodos = () => todos.filter(todo => todo.completed).length

console.log(countCompletedTodos()); // 1
```



## 9. id 프로퍼티의 값 중에서 최대값 구하기

todos의 id 프로퍼티의 값 중에서 최대값을 구하는 함수를 작성하라.

단, for 문, Array#forEach는 사용하지 않도록 하자.

```js
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function getMaxId() {
    // return Math.max(...(todos.map((todo) => todo.id)));
    // map 메소드를 사용해서 1대 1매칭으로 각 요소들의 id 값을 가져온다.
    // 스프레드 문법으로 배열을 해체 시킨다.
    // Math.max를 사용해서 최댓값을 구한다.
    
    // Math.max([], [1]) => 배열이나 객체가 들어갈 수 없다.
    
    return todos.length ? Math.max(...(todos.map((todo) => todo.id))) : 0;
  }
  
  console.log(getMaxId()); // 3
```








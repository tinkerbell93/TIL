#  JavaScript lesson

## TODO v2.0

![todo](./img/todo.png)

[ 도전1 ]

```js
// State
// input에 추가하면 ul li에 노드추가
let todos = [];
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $ckCompleteAll = document.getElementById('ck-complete-all');

// 아이디 생성
const makeId = () => Math.max(...todos.map(todo => (todo.id)), 0) + 1;

// todo 추가
const addTodo = content => {
  todos = [{ id: makeId(), content, complated: false }, ...todos];
  render();
};

// todo 삭제
const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

// todo 완료
// 체크하면 complated 값 변환
const complatedTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, complated: !todo.complated } : todo));
  render();
};

// todo 전체 완료
const complatedTodoAll = () => {
  todos = todos.map(todo => ({ ...todo, complated: true }));
  render();
};

// clear completed 개수
const clearTodo = () => todos.filter(todo => todo.complated).length;

// todo render
const render = () => {
  let html = '';
  // eslint-disable-next-line no-return-assign
  todos.forEach(todo => (
    html += `
      <li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.complated ? 'checked' : ''}>
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  ));
  $todos.innerHTML = html;
  document.querySelector('.completed-todos').textContent = clearTodo();
  document.querySelector('.active-todos').textContent = todos.length - clearTodo();
};

window.onload = () => {
  todos = [
    { id: 1, content: 'HTML', complated: false },
    { id: 2, content: 'CSS', complated: true },
    { id: 3, content: 'Javascript', complated: false }
  ];
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

$input.onkeyup = e => {
  if (e.keyCode !== 13) return;
  $input.value.trim();
  addTodo($input.value);
  $input.value = '';
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$todos.onchange = e => {
  // console.log('check');
  complatedTodo(e.target.parentNode.id);
};

$ckCompleteAll.onchange = e => {
  complatedTodoAll();
  console.log(e);
};

```



[ 도전2 ]

```js
// State
// input에 추가하면 ul li에 노드추가
let todos = [];
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $ckCompleteAll = document.getElementById('ck-complete-all');
const $clearBtn = document.querySelector('.btn');

// clear completed 개수
const clearTodo = () => todos.filter(todo => todo.complated).length;

// todo render
const render = () => {
  let html = '';
  // eslint-disable-next-line no-return-assign
  todos.forEach(todo => (
    html += `
      <li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.complated ? 'checked' : ''}>
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  ));
  $todos.innerHTML = html;
  document.querySelector('.completed-todos').textContent = clearTodo();
  document.querySelector('.active-todos').textContent = todos.length - clearTodo();
};

// 아이디 생성
const makeId = () => Math.max(...todos.map(todo => (todo.id)), 0) + 1;

// todo 추가
const addTodo = content => {
  todos = [{ id: makeId(), content, complated: false }, ...todos];
  render();
};

// todo 삭제
const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

// todo 완료
// 체크하면 complated 값 변환
const complatedTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, complated: !todo.complated } : todo));
  render();
};

// todo 전체 완료
const complatedTodoAll = () => {
  todos = todos.map(todo => ({ ...todo, complated: true }));
  render();
};

// todo 전체 완료 해제
const notComlatedTodoAll = () => {
  todos = todos.map(todo => ({ ...todo, complated: false }));
  render();
};

// 브라우저 실행되자마자 로드
window.onload = () => {
  todos = [
    { id: 1, content: 'HTML', complated: false },
    { id: 2, content: 'CSS', complated: true },
    { id: 3, content: 'Javascript', complated: false }
  ];
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

$input.onkeyup = e => {
  if (e.keyCode !== 13) return;
  $input.value.trim();
  addTodo($input.value);
  $input.value = '';
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$todos.onchange = e => {
  // console.log('check');
  complatedTodo(e.target.parentNode.id);
};

$ckCompleteAll.onchange = () => {
  // console.log(...todos.map(todo => todo.complated));
  $ckCompleteAll.checked ? complatedTodoAll() : notComlatedTodoAll();
  // console.log(e);
};

$clearBtn.onclick = () => {
  
};
```



---



[ 차이? ]

```js
const render = () => {    
    let html = '';
    html = todos.forEach(todo => (
        $todos.innerHTML += `
        <li id="${todo.id}" class="todo-item">
            <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.complated ? 'checked' : ''}>
            <label for="ck-${todo.id}">${todo.content}</label>
            <i class="remove-todo far fa-times-circle"></i>
        </li>`
    ));

};
```

`html = ` 무의미함

```js
const render = () => {    
    let html = '';
    todos.forEach(todo => (
        // 문자열을 만든다.
        html += `
        <li id="${todo.id}" class="todo-item">
            <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.complated ? 'checked' : ''}>
            <label for="ck-${todo.id}">${todo.content}</label>
            <i class="remove-todo far fa-times-circle"></i>
        </li>`
    ));
    $todos.innerHTML = html;
};
```



---


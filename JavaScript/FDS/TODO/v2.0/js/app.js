// State
// 기본세팅
// 2. 취득에 성공하면 초기표시 한다.
// user의 액션에 따라 달라짐

// 전역으로 사용하는 이유? 모든 코드가 todos에 의존한다.
// 전역처럼 보이지만 나중에 모듈을 사용할 것이기 때문에 전역변수가 아님.
let todos = [];

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');


// 1. 서버에서 todos 정보를 취득한다.
const getTodos = () => {
  // from DB!
  todos = [
    { id: 1, content: 'HTML', complated: false },
    { id: 2, content: 'CSS', complated: true },
    { id: 3, content: 'Javascript', complated: false }
  ];

  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, complated: false }, ...todos];
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, complated: !todo.complated } : todo));
};

const completeAll = complated => {
  todos = todos.map(todo => ({ ...todo, complated }));
};

const clearCompleted = () => {
  todos = todos.filter(todo => !todo.complated);
};

const render = () => {
  let html = '';
  todos.forEach(({ id, content, complated }) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${complated ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li> `;
  });
  $completedTodos.textContent = todos.filter(todo => todo.complated).length;
  $activeTodos.textContent = todos.filter(todo => !todo.complated).length;
  $todos.innerHTML = html;
};

// 전역객체는 전역변수와 표준빌트인 저장소 역할을 한다.
// 전역객체는 DOM을 포함한다, 브라우저 전체화면을 가리킨다. 두개의 의미를 중의적으로 갖고 있다.
// load, domcontentedloaded


// EVENTs
window.onload = getTodos;
// window.onload = () => {
//   // 어플리케이션이 가동되자마자 할일
//   getTodos();
// };

$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13) return;

  addTodo($inputTodo.value);
  // 이부분에서 this는 window
  $inputTodo.value = '';

  render();
};
// 이벤트 핸들러 내에서는 여러가지 일을 할 수 밖에 없으나 일반 함수는 하나의 기능만 한다.

$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;
  removeTodo(target.parentNode.id);
  render();
};

$todos.onchange = ({ target }) => {
  toggleTodo(target.parentNode.id);
  render();
};

$completeAll.onchange = () => {
  completeAll($completeAll.checked);
  render();
};

$clearCompleted.onclick = e => {
  clearCompleted();
  render();
};
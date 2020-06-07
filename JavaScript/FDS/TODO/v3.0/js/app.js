// State
let todos = [];

// 1. 서버에서 리소스를 취득
// 2. 취득한 리소스를 화면에 출력

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

const render = () => {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = completedTodos();
  $activeTodos.textContent = todos.length - completedTodos();
};

const generateId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

const removeAdd = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const completedAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }));
};

const completed = id => {
  todos = todos.map(todo => (todo.id === +id ? ({ ...todo, completed: !todo.completed }) : todo));
};

const completedTodos = () => todos.filter(todo => todo.completed).length;

const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];

  todos.sort((todo1, todo2) => todo2.id - todo1.id);

  render();
};

window.onload = () => {
  getTodos();
};

// EVENTs
// NAV TODO
$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li')) return;
  document.querySelector('.active').classList.remove('active');
  target.classList.add('active');
};

// ADD TODO
$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13) return;
  addTodo($inputTodo.value);
  $inputTodo.value = '';
  render();
};

// REMOVE TODO
$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;
  removeAdd(target.parentNode.id);
  render();
};

// COMPLITED TODO
$todos.onchange = ({ target }) => {
  completed(target.parentNode.id);
  render();
};

// SELECT ALL
$completeAll.onchange = () => {
  // $completeAll.checked ? todos = todos.map(todo => ({ ...todo, completed: true})) : todos = todos.map(todo => ({ ...todo, completed: false}));
  completedAll($completeAll.checked);

  render();
};

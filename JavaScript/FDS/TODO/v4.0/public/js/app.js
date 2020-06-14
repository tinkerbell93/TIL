// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $input = document.querySelector('.input-todo');
const $completedAll = document.getElementById('ck-complete-all');
const $completedtodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed .btn');

// FUNCTIONs
const checkCompletedAll = () => {
  todos.every(todo => todo.completed) && todos.length ? $completedAll.checked = true : $completedAll.checked = false;
};
 
const render = () => {
  const _todos = todos.filter(todo => (navState === 'all' ? todo : (navState === 'active' ? !todo.completed : todo.completed)));

  let html = '';
  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  $completedtodos.textContent = completedTodos();
  $activeTodos.textContent = todos.length - completedTodos();
  checkCompletedAll();
};

const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ].sort((todo1, todo2) => todo2.id - todo1.id);

  render();
};

const changeNavState = id => {
  [...$nav.children].forEach(navItem => {
    navItem.classList.toggle('active', id === navItem.id);
  });

  navState = id;
  render();
};

const generate = () => Math.max(0, ...todos.map(todo => todo.id)) + 1;

const addTodo = content => {
  todos = [{ id: generate(), content, completed: false }, ...todos];
  render();
};

const completedTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);

  render();
};

const completedAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }));

  render();
};

const completedTodos = () => todos.filter(todo => todo.completed).length;

const clearCompleted = () => {
  todos = todos.filter(todo => !todo.completed);

  render();
};

// EVENTs
window.onload = getTodos;

// NAV
$nav.onclick = ({ target }) => {
  if (!target.matches('li')) return;
  // document.querySelector('.active').classList.remove('active');
  // target.classList.add('active');
  changeNavState(target.id);
};

// ADD TODO
$input.onkeyup = ({ keyCode, target }) => {
  if (keyCode !== 13) return;
  addTodo(target.value);
  target.value = '';
};

// COMPLELTED TODO
$todos.onchange = ({ target }) => {
  completedTodo(target.parentNode.id);
};

// REMOVE TODO
$todos.onclick = ({ target }) => {
  if (!target.matches('.todo-item i')) return;
  removeTodo(target.parentNode.id);
};

// COMPLETED ALL
$completedAll.onchange = ({ target }) => {
  completedAll(target.checked);
};

// ClEAR COMPLETED
$clearCompleted.onclick = () => {
  clearCompleted();
}
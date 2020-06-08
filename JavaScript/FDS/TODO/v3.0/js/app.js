// State
// 뷰를 바꾸는 트리거
let todos = [];
let navState = 'all';

// 1. 서버에서 리소스를 취득
// 2. 취득한 리소스를 화면에 출력

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearBtn = document.querySelector('.clear-completed .btn');


// FUNCTIONs
const render = () => {
  let html = '';
  let _todos = todos.filter(({completed}) => navState ===  'complete' ? completed : (navState === 'active' ? !completed : true));

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = completedTodos();
  $activeTodos.textContent = todos.length - completedTodos();
  checkedCompletedAll();

  // viewTodos를 로컬스토리지에 저장
  localStorage.setItem('todos', JSON.stringify(_todos));
};

const changeNavState = id => {
  
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', 
    $navItem.id === id )
  })

  navState = id;
  render();
}

const generateId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const completedAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }));
};

const checkedCompletedAll = () => {
  if (todos.every(todo => todo.completed) ? $completeAll.checked = true : $completeAll.checked = false);
}

const completed = id => {
  todos = todos.map(todo => (todo.id === +id ? ({ ...todo, completed: !todo.completed }) : todo));
};

const completedTodos = () => todos.filter(todo => todo.completed).length;

const clearCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
}

const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, contentnav: 'Javascript', completed: false }
  ];
  
  // 저장된 로컬스토리지에서 todos 불러오기
  todos = JSON.parse(localStorage.getItem('todos'));

  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

window.onload = () => {
  getTodos();
};

// EVENTs
// NAV TODO
$nav.onclick = ({target}) => {
  if (!target.matches('.nav > li:not(.active)')) return;
  changeNavState(target.id)
  

  render();
};


// ADD TODO
$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;
  addTodo($inputTodo.value);
  $inputTodo.value = '';
  render();
};

// REMOVE TODO
$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;
  removeTodo(target.parentNode.id);
  render();
};

// COMPLITED TODO
$todos.onchange = ({ target }) => {
  completed(target.parentNode.id);

  render();
};

// SELECT ALL
$completeAll.onchange = () => {
  completedAll($completeAll.checked);
  
  render();
};

// CLEAR COMPLETED
$clearBtn.onclick = () => {
  clearCompleted();
  render();
};
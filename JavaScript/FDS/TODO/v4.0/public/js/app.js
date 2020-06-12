// import { ajax } from './ajax.js';

// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';
  const _todos = todos.filter(({ completed }) => (navState === 'completed' ? completed : navState === 'active' ? !completed : true));

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
    console.log(content);
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(({ completed }) => completed).length;
  $activeTodos.textContent = todos.filter(({ completed }) => !completed).length;
};

// Ajax
const ajax = (() => {
  const req = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        callback(JSON.parse(xhr.response));
      } else {
        console.error(xhr.status);
      }
    };
  };

  return {
    get(url, callback) {
      req('GET', url, callback);
    },
    post(url, payload, callback) {
      req('POST', url, callback, payload);
    },
    patch(url, payload, callback) {
      req('PATCH', url, callback, payload);
    },
    delete(url, callback) {
      req('DELETE', url, callback);
    }
  };
})();

const getTodos = () => {
  ajax.get('/todos', _todos => {
    todos = _todos;
    render();
    // console.log('[getTodos]', todos);
  });
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  const newTodo = { id: generateId(), content, completed: false };
  ajax.post('/todos', newTodo, _todos => {
    todos = _todos;
    render();
  });
  console.log('[addTodo]', todos);
};

const toggleTodo = (id, completed) => {
  ajax.patch(`/todos/${id}`, { completed }, _todos => {
    todos = _todos;
    render();
  });
  console.log('[toggleTodo]', todos);
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  ajax.delete(`/todos/${id}`, () => {
    todos = todos.filter(todo => todo.id !== +id);
    render();
  });
  console.log('[removeTodo]', todos);
};

const toggleCompleteAll = completed => {
  ajax.patch('/todos', { completed }, _todos => {
    todos = _todos;
    render();
  });
  console.log('[toggleCompleteAll]', todos);
};

const removeCompleted = () => {
  ajax.delete('/todos/completed', _todos => {
    todos = _todos;
    render();
  });
  // todos = todos.filter(todo => !todo.completed);
  console.log('[removeCompleted]', todos);

};

const changeNavState = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;

  console.log('[changeNavState]', navState);
  render();
};

// Event bindings
window.onload = getTodos;

$inputTodo.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  console.log(content);

  addTodo(target.value);
  target.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id, e.target.checked);
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(+e.target.parentNode.id);
};

$completeAll.onchange = e => {
  toggleCompleteAll(e.target.checked);
};

$clearCompleted.onclick = () => {
  // console.loge(e.target.id);
  removeCompleted();
};

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li:not(.active)')) return;
  changeNavState(target.id);
};

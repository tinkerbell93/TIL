import { ajax } from './ajax.js';

let todos = [];
const $pre = document.querySelector('pre');
const render = () => {
  $pre.textContent = JSON.stringify(todos, null, 2);
};


ajax.get('/todos', _todos => {
  todos = _todos;
  const payload = { id: 4, content: 'React', completed: false };
  ajax.post('/todos', payload, todo => {
    todos = [todo, ...todos];
    const completed = !todos.find(todo => todo.id === 4).completed;
    ajax.patch('/todos/4', { completed }, _todo => {
      todos = todos.map(todo => (todo.id === 4 ? { ...todo, ..._todo } : todo));
      ajax.delete('/todos/4', _ => {
        todos = todos.filter(todo => todo.id !== 4);
        render();
      });
    });
  });
});

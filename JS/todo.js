const todoForm = document.getElementById('todo_form');
const todoInput = document.querySelector('#todo_form input');
const clickBtn = document.querySelector('#todo_form button');
const todoList = document.getElementById('todo_list');

let todos = [];
const TODO_KEY = 'todo';

function saveTodo(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function submitForm(e) {
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: todo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  saveTodo(todos);
  paintToDO(newTodoObj);
}

function paintToDO(todoObj) {
  const li = document.createElement('li');
  li.id = todoObj.id;
  const span = document.createElement('span');
  span.innerText = todoObj.text;
  const btn = document.createElement('button');
  btn.addEventListener('click', deleteList);
  btn.innerText = `✖️`;
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function deleteList(item) {
  const li = item.target.parentElement;
  li.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo(todos);
}

todoForm.addEventListener('submit', submitForm);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  const parseTodo = JSON.parse(savedTodo);
  todos = parseTodo;
  parseTodo.forEach(paintToDO);
}

const todoFormClick = document.querySelector('#todo_form');
const todoForms = document.querySelector('#todo');
const todoListClcik = document.querySelector('#todo_list');
const upBtn = document.querySelector('#up');

function clickToDo() {
  todoListClcik.style.display = 'block';
  upBtn.style.display = 'block';
}

function upTodo() {
  todoListClcik.style.display = 'none';
  upBtn.style.display = 'none';
}

todoFormClick.addEventListener('click', function () {
  setTimeout(clickToDo, 100);
});
upBtn.addEventListener('click', function () {
  setTimeout(upTodo, 200);
});

function saveLocalTodos(todo) {
  //Check if there are already todos
  let todos = checkStorageTodos();

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  message.style.display = 'none';
}

function getTodos() {
  let todos = checkStorageTodos();

  todos.forEach((todo) => {
    createTodoDiv(todo);
  });
}

function removeLocalTodos(todo) {
  let todos = checkStorageTodos();
  const todoIndex = todos.indexOf(todo.children[0].innerText);

  todos.splice(todoIndex, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  checkStorageTodos();
}

function checkStorageTodos() {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  if (todos.length === 0) {
    message.style.display = 'flex';
  } else {
    message.style.display = 'none';
  }

  return todos;
}

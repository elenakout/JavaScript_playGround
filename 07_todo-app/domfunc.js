function createTodoDiv(todo) {
  // create DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);

  // Complete button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  // Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // Appent to List
  todoList.appendChild(todoDiv);
}

function addTodo(event) {
  event.preventDefault();

  createTodoDiv(todoInput.value);

  //Add todo to LocalStorage
  saveLocalTodos(todoInput.value);

  todoInput.value = '';
}

function deletecheck(e) {
  const item = e.target;

  // Delete item
  if (item.classList.contains('trash-btn')) {
    const todo = item.parentElement;

    //Animation
    todo.classList.add('fall');
    // Delete localstorage
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  // Check completed
  if (item.classList.contains('complete-btn')) {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  const visibleTodos = [];

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        visibleTodos.push(todo);
        // todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          visibleTodos.push(todo);
          // todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          visibleTodos.push(todo);
          // todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });

  if (visibleTodos.length === 0) {
    message.style.display = 'flex';
  } else {
    message.style.display = 'none';
  }

  visibleTodos.forEach((todo) => {
    todo.style.display = 'flex';
  });
}

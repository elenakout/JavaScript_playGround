// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);

// Functions
function addTodo(event) {
  event.preventDefault();
  // create DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
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

  todoInput.value = '';
}

function deletecheck(e) {
  const item = e.target;

  // Delete item
  if (item.classList.contains('trash-btn')) {
    const todo = item.parentElement;

    //Animation
    todo.classList.add('fall');
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

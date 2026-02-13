const todoInput = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#buttonTodoAdd');
const todoList = document.querySelector('#listTodo');

// click button
addTodoButton.addEventListener('click', addTodo);

function addTodo() {
  // get input
  const task = todoInput.value;
  // .split(/\s+/) // handles multiple space
  // .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  // .join(' '); // ← IMPORTANT: space here

  if (!task) {
    alert('You must write type first');
  } else {
    // create list item
    const todoItem = document.createElement('li');

    // insert text
    todoItem.textContent = task;

    // delete list item
    const deleteBtn = (document.createElement('button').innerText = 'Delete');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.onclick = function () {
      todoItem.remove();
    };

    // show on UI
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}

// apply typescript for safety type soo once the project is done

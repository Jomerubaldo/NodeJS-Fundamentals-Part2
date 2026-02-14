const todoInput = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#buttonTodoAdd');
const todoList = document.querySelector('#listTodo');

// click button
addTodoButton.addEventListener('click', addTodo);

function addTodo() {
  const task = todoInput.value.trim();

  if (!task) {
    alert('You must write type first');
    return;
  }

  // Main wrapper
  const todoItem = document.createElement('div');
  todoItem.className =
    'group flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 rounded-xl hover:shadow-md transition-shadow';

  // Left section
  const leftSection = document.createElement('div');
  leftSection.className = 'flex items-center gap-3 flex-1';

  // Circle
  const circle = document.createElement('div');
  circle.className =
    'flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#dbdfe6] dark:border-gray-700 hover:border-primary cursor-pointer';

  // Text
  const text = document.createElement('p');
  text.className = 'text-base font-medium text-[#111318] dark:text-gray-100';
  text.textContent = task;

  // Right section (buttons)
  const rightSection = document.createElement('div');
  rightSection.className =
    'flex items-center gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity';

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.className =
    'p-2 text-[#616f89] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors';
  editBtn.innerHTML =
    '<span class="material-symbols-outlined text-[20px]">edit</span>';

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className =
    'p-2 text-[#616f89] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors';
  deleteBtn.innerHTML =
    '<span class="material-symbols-outlined text-[20px]">delete</span>';

  deleteBtn.onclick = function () {
    todoItem.remove();
  };

  // Build structure
  leftSection.appendChild(circle);
  leftSection.appendChild(text);

  rightSection.appendChild(editBtn);
  rightSection.appendChild(deleteBtn);

  todoItem.appendChild(leftSection);
  todoItem.appendChild(rightSection);

  todoList.appendChild(todoItem);

  todoInput.value = '';
}

// apply typescript for safety type soo once the project is done

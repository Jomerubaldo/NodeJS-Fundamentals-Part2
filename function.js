// refference kung ano ang mgagagamitin mona element mula sa html
const input = document.querySelector('#inputTodo');
const button = document.querySelector('#buttonTodoAdd');
const list = document.querySelector('#listTodo');

// create an button to called function and execute what is inside it
button.addEventListener('click', myFunction);

function myFunction() {
  // gagawa siya ng list na element
  const createNewList = document.createElement('li');

  //  kunin ang value na iniinput ng user
  const getUserAdd = input.value;

  // e tranfer and value na ininput ni user from textnode and get the value from user
  const userInput = document.createTextNode(getUserAdd);

  // saan niya ilalagay tapos gagawa siya ng append sa list
  document.querySelector('#listTodo').appendChild(createNewList);

  // isasama na niya yung li tapos append siya ng ininput at ng user at trinasfer sa textnode
  createNewList.appendChild(userInput);
}

// create palang to

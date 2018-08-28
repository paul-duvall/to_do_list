// Declare variables for user interface elements

const taskInput = document.querySelector('#task-input');
const addTaskButton = document.querySelector('#add-task-button');
const taskList = document.querySelector('#task-list');
const inputForm = document.querySelector('#input-form');

// Event listeners

callEventListeners();

function callEventListeners() {
  // Add task event
  inputForm.addEventListener('submit', addTask);
}

function addTask(e) {

  if (taskInput === "") {
    return;
    // Could add an alert in here that goes below the input field
  }

  // Create the li element for the new task
  const li = document.createElement('li');
  // Add a class to the new li element
  li.className = 'task-list-item';
  // Create a text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  
  // Append the li to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';


  console.log(li);

  e.preventDefault();
}
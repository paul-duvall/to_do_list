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
  // Delete task event
  taskList.addEventListener('click', removeTask);
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

  // Create a link element for the delete button
  const link = document.createElement('a');
  // Add class to link
  link.classList = 'item-delete';
  // Add html into link
  link.innerHTML = '<img src="images/delete-button.svg" width=22px>'
  // Append the link to the list item
  li.appendChild(link);

  // Clear the input field
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('item-delete')){
    e.target.parentElement.parentElement.remove();
  }
}
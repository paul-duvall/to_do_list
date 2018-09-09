// Declare variables for user interface elements

const taskInput = document.querySelector('#task-input');
const addTaskButton = document.querySelector('#add-task-button');
const taskList = document.querySelector('#task-list');
const inputForm = document.querySelector('#input-form');

// Event listeners

callEventListeners();

function callEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  inputForm.addEventListener('submit', addTask);
  // Delete task event
  taskList.addEventListener('click', removeTask);
}

// Retrieve existing tasks from local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
       // Create the li element for the new task
  const li = document.createElement('li');
  // Add a class to the new li element
  li.className = 'task-list-item';
  // Create a text node and append to the li
  li.appendChild(document.createTextNode(task));
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
    });
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

  // Add task to local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear the input field
  taskInput.value = '';

  e.preventDefault();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove task from list
function removeTask(e) {
  if(e.target.parentElement.classList.contains('item-delete')){
    e.target.parentElement.parentElement.remove();

    // Remove item from local storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
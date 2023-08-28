const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

function addTask(event) {
  event.preventDefault();

  const taskTitle = taskTitleInput.value.trim();
  const taskDescription = taskDescriptionInput.value.trim();

  if (taskTitle === '' || taskDescription === '') {
    return;
  }

  const taskElement = createTaskElement(taskTitle, taskDescription);
  taskList.appendChild(taskElement);

  taskTitleInput.value = '';
  taskDescriptionInput.value = '';
}

function createTaskElement(title, description) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  const titleElement = document.createElement('h3');
  titleElement.classList.add('task-title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('task-description');
  descriptionElement.textContent = description;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('task-delete');
  deleteButton.innerHTML = '&#10006;';

  taskElement.appendChild(titleElement);
  taskElement.appendChild(descriptionElement);
  taskElement.appendChild(deleteButton);

  return taskElement;
}

function deleteTask(event) {
  if (event.target.classList.contains('task-delete')) {
    const taskElement = event.target.parentNode;
    taskList.removeChild(taskElement);
  }
}

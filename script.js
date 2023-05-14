const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = inputTask.value.trim();
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(newTask);
    inputTask.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
});

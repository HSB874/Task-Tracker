const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // prevent adding empty tasks

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    // Task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Mark as complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.addEventListener('click', () => {
        taskContent.style.textDecoration = taskContent.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = ''; // Clear the input
}

// Event listener for adding tasks
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

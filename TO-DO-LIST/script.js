// Get the form and list elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const saveBtn = document.getElementById('save-btn');

// Initialize the task list
let tasks = [];

// Function to add a task
function addTask(task) {
    // Create a new task element
    const taskElement = document.createElement('li');
    taskElement.textContent = task;

    // Add the task to the list
    taskList.appendChild(taskElement);

    // Update the tasks array
    tasks.push(task);
}

// Function to save tasks
function saveTasks() {
    // Create a JSON string of the tasks array
    const tasksJson = JSON.stringify(tasks);

    // Save the tasks to local storage
    localStorage.setItem('tasks', tasksJson);
}

// Function to load tasks
function loadTasks() {
    // Get the tasks from local storage
    const tasksJson = localStorage.getItem('tasks');

    // Parse the JSON string into an array
    if (tasksJson) {
        tasks = JSON.parse(tasksJson);
    }
}

// Load tasks from local storage
loadTasks();

// Add event listener to the form
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    // Add the task if it's not empty
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

// Add event listener to the save button
saveBtn.addEventListener('click', saveTasks);
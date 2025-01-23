const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearAllButton = document.getElementById('clear-all');
const categorySelect = document.getElementById('category-select');

addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAllTasks);

function addTask() {
    const taskText = taskInput.value.trim();
    const category = categorySelect.value;

    if (taskText) {

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText} <span class="category">(${category})</span>
            <button class="remove-btn">Remove</button>
        `;

        listItem.querySelector('.remove-btn').addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.style.transform = 'scale(0)';
        taskList.appendChild(listItem);
        setTimeout(() => (listItem.style.transform = 'scale(1)'), 50);

        taskInput.value = '';
    }
}

function clearAllTasks() {
    taskList.innerHTML = '';
}

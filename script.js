// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the task text

        if (taskText === "") { // Check if the input is empty
            alert("Please enter a task");
            return;
        }

        // Create a new list item for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add an event listener to the remove button to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the list item and the list item to the task list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listeners for the add button and the input field (for Enter key press)
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

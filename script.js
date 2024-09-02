document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const taskTimeInput = document.getElementById("task-time");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskTime = taskTimeInput.value;

        if (taskText.trim() === "" || taskTime === "") {
            alert("Please enter a task and set a date and time.");
            return;
        }

        addTask(taskText, taskTime);
        taskInput.value = "";
        taskTimeInput.value = "";
    });

    function addTask(taskText, taskTime) {
        const li = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.textContent = `${taskText} - Due: ${new Date(taskTime).toLocaleString()}`;

        const taskControls = document.createElement("div");
        taskControls.classList.add("task-controls");

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newTaskText = prompt("Edit Task", taskText);
            const newTaskTime = prompt("Edit Due Time", taskTime);
            if (newTaskText && newTaskTime) {
                taskContent.textContent = `${newTaskText} - Due: ${new Date(newTaskTime).toLocaleString()}`;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        taskControls.appendChild(completeButton);
        taskControls.appendChild(editButton);
        taskControls.appendChild(deleteButton);

        li.appendChild(taskContent);
        li.appendChild(taskControls);

        taskList.appendChild(li);
    }
});
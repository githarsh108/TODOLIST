const addTaskBtn = document.querySelector('.add-task-btn')
const taskInput = document.querySelector('.text-input')
const taskList = document.querySelector('.task-list')

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim()
    if (taskText === '') return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', () => {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});

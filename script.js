const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="remove-btn">X</button>`;

    li.querySelector('.task').addEventListener('click', () => {
        li.querySelector('.task').classList.toggle('completed');
    });

    li.querySelector('.remove-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
});
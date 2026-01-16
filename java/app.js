let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const filter = document.body.dataset.filter;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (!input || input.value.trim() === "") return;

    tasks.push({ text: input.value, completed: false });
    input.value = "";
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    if (!list) return;

    list.innerHTML = "";

    let filtered = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    filtered.forEach(task => {
        const originalIndex = tasks.indexOf(task);
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span class="tick-icon" onclick="toggleTask(${originalIndex})">&#10003;</span>
            <span>${task.text}</span>
            <button onclick="deleteTask(${originalIndex})">X</button>
        `;
        list.appendChild(li);
    });

    const done = tasks.filter(t => t.completed).length;
    const counter = document.getElementById("counter");
    if (counter) counter.innerText = `Completed: ${done} / ${tasks.length}`;
}

renderTasks();

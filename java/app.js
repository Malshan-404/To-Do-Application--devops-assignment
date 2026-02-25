// 1. Initialize tasks with unique IDs for better tracking
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const filter = document.body.dataset.filter || "all";

// Helper to save to LocalStorage
const saveTasks = () => localStorage.setItem("tasks", JSON.stringify(tasks));

function addTask() {
    const input = document.getElementById("taskInput");
    if (!input?.value.trim()) return;

    // Added a unique ID using Date.now()
    tasks.push({ 
        id: Date.now(), 
        text: input.value.trim(), 
        completed: false 
    });
    
    input.value = "";
    saveTasks();
    renderTasks();
}

// Optimized: Find task by ID instead of array index
function toggleTask(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    if (!list) return;

    // Filter logic
    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    // Efficiently build the list using map and join
    list.innerHTML = filteredTasks.map(task => `
        <li class="${task.completed ? 'completed' : ''}" data-id="${task.id}">
            <span class="tick-icon" onclick="toggleTask(${task.id})">
                ${task.completed ? '✅' : '○'}
            </span>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Remove</button>
        </li>
    `).join('');

    updateCounter();
}

function updateCounter() {
    const counter = document.getElementById("counter");
    if (!counter) return;
    
    const completedCount = tasks.filter(t => t.completed).length;
    counter.innerText = `Completed: ${completedCount} / ${tasks.length}`;
}

// Initial render
renderTasks();

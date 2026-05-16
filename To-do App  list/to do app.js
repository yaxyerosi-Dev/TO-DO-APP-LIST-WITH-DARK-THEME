const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const themeBtn = document.getElementById('themeBtn');

// Add Task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');

  li.className = `
    flex justify-between items-center
    bg-gray-100 dark:bg-gray-700
    text-gray-800 dark:text-white
    p-3 rounded-lg
  `;

  li.innerHTML = `
    <span>${taskText}</span>

    <div class="flex gap-2">
      <button class="completeBtn bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg">
        ✓
      </button>

      <button class="deleteBtn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
        ✕
      </button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = '';

  // Complete Task
  const completeBtn = li.querySelector('.completeBtn');

  completeBtn.addEventListener('click', () => {
    li.querySelector('span').classList.toggle('line-through');
    li.querySelector('span').classList.toggle('opacity-50');
  });

  // Delete Task
  const deleteBtn = li.querySelector('.deleteBtn');

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
});

// Theme Toggle
let darkMode = true;

themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  darkMode = !darkMode;

  if (darkMode) {
    themeBtn.textContent = '🌙';
  } else {
    themeBtn.textContent = '☀️';
  }
});
// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

// Variáveis
let taskCounter = parseInt(localStorage.getItem("taskCounter")) || 1;
const tasks = {};
let currentEditId = null;

// Funções
const updateTaskCounter = () => {
  localStorage.setItem("taskCounter", taskCounter.toString());
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();
  const existingTodoIndex = todos.findIndex(t => t.id === todo.id);
  
  if (existingTodoIndex >= 0) {
    todos[existingTodoIndex] = todo;
  } else {
    todos.push(todo);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodoLocalStorage = (todoId) => {
  let todos = getTodosLocalStorage();
  todos = todos.filter(todo => todo.id !== todoId);
  localStorage.setItem("todos", JSON.stringify(todos));
  delete tasks[todoId];
};

const updateTodoStatusLocalStorage = (todoId) => {
  let todos = getTodosLocalStorage();
  const todo = todos.find(t => t.id === todoId);
  
  if (todo) {
    todo.done = !todo.done;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

const saveTodo = (text, done = false, save = true, id = null) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.style.display = "flex";
  
  const todoId = id || taskCounter;
  todo.id = `todo-${todoId}`;

  if (!id) {
    taskCounter++;
    updateTaskCounter();
  }

  tasks[todoId] = { id: todoId, text: text, done };

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = `${todoId} - ${text}`;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  if (done) {
    todo.classList.add("done");
  }

  if (save) {
    saveTodoLocalStorage({ id: todoId, text, done });
  }

  todoList.appendChild(todo);
  todoInput.value = "";
  todoInput.focus();
};

const updateTask = (text) => {
  if (currentEditId !== null) {
    const task = tasks[currentEditId];
    task.text = text;
    
    const taskElement = document.querySelector(`#todo-${currentEditId}`);
    taskElement.querySelector("h3").innerText = `${currentEditId} - ${text}`;
    
    saveTodoLocalStorage({
      id: currentEditId,
      text: text,
      done: taskElement.classList.contains("done")
    });
    
    toggleForms();
  }
};

const getSearchTodos = (search) => {
  const todos = document.querySelectorAll(".todo");
  const normalizedSearch = search.toLowerCase();

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
    todo.style.display = todoTitle.includes(normalizedSearch) ? "flex" : "none";
  });
};

const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    switch (filterValue) {
      case "all":
        todo.style.display = "flex";
        break;
      case "done":
        todo.style.display = todo.classList.contains("done") ? "flex" : "none";
        break;
      case "todo":
        todo.style.display = !todo.classList.contains("done") ? "flex" : "none";
        break;
    }
  });
};

const loadTodos = () => {
  const todos = getTodosLocalStorage();

  if (todos.length > 0) {
    taskCounter = Math.max(...todos.map(todo => todo.id)) + 1;
    updateTaskCounter();
    todos.forEach((todo) => {
      saveTodo(todo.text, todo.done, false, todo.id);
    });
  }
};

// Event Listeners
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value.trim();
  if (inputValue) {
    saveTodo(inputValue);
  }
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const editedText = editInput.value.trim();
  if (editedText) {
    updateTask(editedText);
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;
  getSearchTodos(search);
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  getSearchTodos("");
});

filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  filterTodos(filterValue);
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  
  if (!parentEl) return;

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
    const todoId = parseInt(parentEl.id.replace("todo-", ""));
    updateTodoStatusLocalStorage(todoId);
  }

  if (targetEl.classList.contains("remove-todo")) {
    const todoId = parseInt(parentEl.id.replace("todo-", ""));
    parentEl.remove();
    removeTodoLocalStorage(todoId);
  }

  if (targetEl.classList.contains("edit-todo")) {
    const todoId = parseInt(parentEl.id.replace("todo-", ""));
    currentEditId = todoId;
    editInput.value = tasks[todoId].text;
    toggleForms();
  }
});

// Inicialização
loadTodos();
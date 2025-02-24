const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let taskCounter = 1;
const tasks = {};
let currentEditId = null;

const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.id = `todo-${taskCounter}`;

  const todoId = taskCounter;
  taskCounter++;

  tasks[todoId] = { id: todoId, text: text };

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

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
};

const editTask = (id) => {
  const task = tasks[id];

  if (task) {
    currentEditId = id;
    editInput.value = task.text;
    toggleForms();
  }
};

const updateTask = (text) => {
  if (currentEditId !== null) {
    tasks[currentEditId].text = text;
    const taskElement = document.querySelector(`#todo-${currentEditId}`);
    taskElement.querySelector("h3").innerText = `${currentEditId} - ${text}`;
    toggleForms();
    updateTodo();  // Atualiza as tarefas após edição
  }
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

getSearchTodos = (search) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase();

        const normalizedSearch = search.toLowerCase();

        if(!todoTitle.includes(normalizedSearch)) {
            todo.style.display = "none"
        }

    })

}

const updateTodo = () => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3");

    // Verifica se o título contém o ID atual
    if (todoTitle.innerText.startsWith(`${currentEditId} -`)) {
      todoTitle.innerText = `${currentEditId} - ${tasks[currentEditId].text}`;
    }
  });
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
  }

  if (targetEl.classList.contains("edit-todo")) {
    const taskId = parseInt(
      parentEl.querySelector("h3").innerText.split(" - ")[0]
    );

    editTask(taskId);
  }
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedText = editInput.value;
  if (updatedText) {
    updateTask(updatedText);
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();

  toggleForms();
});




searchInput.addEventListener("keyup", (e) => {
    
    const search = e.target.value;

    getSearchTodos(search);
})
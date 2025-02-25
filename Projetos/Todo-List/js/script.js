// Seleção de elementos do DOM
const todoForm = document.querySelector("#todo-form"); // Formulário de novas tarefas
const todoInput = document.querySelector("#todo-input"); // Campo de entrada para o texto da tarefa
const todoList = document.querySelector("#todo-list"); // Lista que exibirá as tarefas
const editForm = document.querySelector("#edit-form"); // Formulário de edição de tarefas
const editInput = document.querySelector("#edit-input"); // Campo de entrada para editar tarefa
const cancelEditBtn = document.querySelector("#cancel-edit-btn"); // Botão para cancelar a edição
const searchInput = document.querySelector("#search-input"); // Campo de pesquisa de tarefas
const eraseBtn = document.querySelector("#erase-button"); // Botão para limpar a pesquisa
const filterBtn = document.querySelector("#filter-select"); // Filtro para tarefas: todas, feitas, pendentes

// Controle do contador de tarefas e armazenamento local
let taskCounter = parseInt(localStorage.getItem("taskCounter")) || 1; // ID das tarefas com persistência no localStorage
const tasks = {}; // Objeto para armazenar as tarefas em memória
let currentEditId = null; // Armazena o ID da tarefa que está sendo editada

// Atualiza o contador de tarefas no localStorage
const updateTaskCounter = () => {
  localStorage.setItem("taskCounter", taskCounter.toString()); 
};

// Alterna entre os formulários de adicionar e editar tarefas
const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

// Recupera as tarefas salvas no localStorage
const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || []; // Retorna um array vazio se não houver tarefas
};

// Salva ou atualiza uma tarefa no localStorage
const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();
  const existingTodoIndex = todos.findIndex(t => t.id === todo.id); // Verifica se a tarefa já existe
  
  if (existingTodoIndex >= 0) {
    todos[existingTodoIndex] = todo; // Atualiza tarefa existente
  } else {
    todos.push(todo); // Adiciona nova tarefa
  }

  localStorage.setItem("todos", JSON.stringify(todos)); // Salva as alterações no localStorage
};

// Remove uma tarefa do localStorage
const removeTodoLocalStorage = (todoId) => {
  let todos = getTodosLocalStorage();
  todos = todos.filter(todo => todo.id !== todoId); // Remove a tarefa com o ID correspondente
  localStorage.setItem("todos", JSON.stringify(todos)); // Atualiza o localStorage
  delete tasks[todoId]; // Remove da memória
};

// Atualiza o status de conclusão de uma tarefa no localStorage
const updateTodoStatusLocalStorage = (todoId) => {
  let todos = getTodosLocalStorage();
  const todo = todos.find(t => t.id === todoId); // Encontra a tarefa pelo ID
  
  if (todo) {
    todo.done = !todo.done; // Altera o status de concluída para pendente ou vice-versa
    localStorage.setItem("todos", JSON.stringify(todos)); // Atualiza o localStorage
  }
};

// Cria ou atualiza a exibição de uma tarefa na interface e no localStorage
const saveTodo = (text, done = false, save = true, id = null) => {
  const todo = document.createElement("div"); // Cria o elemento para a tarefa
  todo.classList.add("todo");
  todo.style.display = "flex"; // Exibe como um item flexível
  
  const todoId = id || taskCounter; // Usa o contador de tarefas ou o ID passado
  todo.id = `todo-${todoId}`; // Define o ID da tarefa no DOM

  if (!id) {
    taskCounter++; // Incrementa o contador se for uma nova tarefa
    updateTaskCounter(); // Atualiza o contador no localStorage
  }

  tasks[todoId] = { id: todoId, text: text, done }; // Armazena a tarefa na memória

  // Adiciona o título da tarefa ao DOM
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = `${todoId} - ${text}`;
  todo.appendChild(todoTitle);

  // Criação dos botões de ação (concluir, editar, remover)
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

  // Marca a tarefa como concluída, se necessário
  if (done) {
    todo.classList.add("done");
  }

  if (save) {
    saveTodoLocalStorage({ id: todoId, text, done }); // Salva no localStorage
  }

  todoList.appendChild(todo); // Adiciona a tarefa à lista no DOM
  todoInput.value = ""; // Limpa o campo de input
  todoInput.focus(); // Foca no campo de input para a próxima tarefa
};

// Atualiza o texto de uma tarefa já existente
const updateTask = (text) => {
  if (currentEditId !== null) {
    const task = tasks[currentEditId]; // Obtém a tarefa que está sendo editada
    task.text = text; // Atualiza o texto da tarefa
    
    const taskElement = document.querySelector(`#todo-${currentEditId}`); // Seleciona o elemento da tarefa no DOM
    taskElement.querySelector("h3").innerText = `${currentEditId} - ${text}`; // Atualiza o título da tarefa
    
    saveTodoLocalStorage({
      id: currentEditId,
      text: text,
      done: taskElement.classList.contains("done") // Mantém o status da tarefa
    });
    
    toggleForms(); // Alterna os formulários
  }
};

// Filtra as tarefas com base na pesquisa do usuário
const getSearchTodos = (search) => {
  const todos = document.querySelectorAll(".todo");
  const normalizedSearch = search.toLowerCase(); // Normaliza o texto para busca insensível a maiúsculas/minúsculas

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
    todo.style.display = todoTitle.includes(normalizedSearch) ? "flex" : "none"; // Exibe ou oculta a tarefa
  });
};

// Filtra as tarefas por status: todas, feitas ou pendentes
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

// Carrega as tarefas salvas no localStorage ao inicializar o aplicativo
const loadTodos = () => {
  const todos = getTodosLocalStorage();

  if (todos.length > 0) {
    taskCounter = Math.max(...todos.map(todo => todo.id)) + 1; // Ajusta o contador de tarefas
    updateTaskCounter(); // Atualiza o contador no localStorage
    todos.forEach((todo) => {
      saveTodo(todo.text, todo.done, false, todo.id); // Exibe cada tarefa salva
    });
  }
};

// Event listeners para interações do usuário
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value.trim();
  if (inputValue) {
    saveTodo(inputValue); // Adiciona uma nova tarefa
  }
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const editedText = editInput.value.trim();
  if (editedText) {
    updateTask(editedText); // Atualiza uma tarefa existente
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms(); // Cancela a edição e retorna ao estado anterior
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;
  getSearchTodos(search); // Chama a função de pesquisa ao digitar
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = ""; // Limpa o campo de pesquisa
  getSearchTodos(""); // Exibe todas as tarefas
});

filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  filterTodos(filterValue); // Aplica o filtro escolhido pelo usuário
});

// Detecta cliques em qualquer parte da página e manipula as ações (concluir, editar, remover tarefas)
document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  
  if (!parentEl) return; // Se não for uma tarefa, sai da função

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done"); // Marca a tarefa como concluída
    const todoId = parseInt(parentEl.id.replace("todo-", ""));
    updateTodoStatusLocalStorage(todoId); // Atualiza o status no localStorage
  }

  if (targetEl.classList.contains("remove-todo")) {
    const todoId = parseInt(parentEl.id.replace("todo-", ""));
    parentEl.remove(); // Remove a tarefa do DOM
    removeTodoLocalStorage(todoId); // Remove do localStorage
  }

  if (targetEl.classList.contains("edit-todo")) {
    const todoId = parseInt(parentEl.id.replace("todo-", ""));
    currentEditId = todoId; // Define qual tarefa está sendo editada
    editInput.value = tasks[todoId].text; // Preenche o campo de edição com o texto da tarefa
    toggleForms(); // Alterna para o formulário de edição
  }
});

// Inicialização das tarefas ao carregar a página
loadTodos();

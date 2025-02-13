// 1 - adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou");
});

// 2 - Removendo eventos

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBth = document.querySelector("#other-btn");

thirdBth.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Objeto do evento
const title = document.querySelector("#title");

title.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - Ações Default
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Deu ruim");
});

// // 6 - keyup and keydonw
// document.addEventListener("keyup", (e) => {
//     console.log(`Soltou a tecla: ${e.key}`)
// });

// document.addEventListener("keydown", (event) => {
//     console.log(`Vamos ver na prática: ${event.key}`);
// });

const nameUser = document.querySelector("#name");

nameUser.addEventListener("keydown", (event) => {
  console.log(`${event.key}`);
});

// 7 - Outros eventos do mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", (e) => {
  console.log("Pressionou o botão");
});

mouse.addEventListener("mouseup", (e) => {
  console.log("Largou o botão");
});

mouse.addEventListener("dblclick", (e) => {
  console.log("double click no botão");
});

// 8 - movimento do mouse
const mouseMove = document.querySelector("#mouseMove");

mouseMove.addEventListener("mousemove", (event) => {
  console.log(`Mexendo o mouse no x: ${event.x}`);
  console.log(`Mexendo o mouse no Y: ${event.y}`);
});

// 9 - Eventos por Scroll
// window.addEventListener("scroll", (e) => {
//     if(window.pageXOffset > 200) {
//         console.log("Passando de 200px")
//     }
// });

// 10 - Focus
const input = document.querySelector("#myInput");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
  console.log("saiu no input");
});

// 11 - evento de carregament
window.addEventListener("load", () => {
  console.log("A pagina carregou");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Teste";
});

// 12 - debounce
const debounce = (low, delay) => {
  let timeOut;

  return (...args) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      low.apply(args);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);

// 1 - Movendo-se pelo dom

console.log(document.body);

// 2 - selecionando por tag
const listItems = document.getElementsByTagName("li")

// 4 - selecionando elementos por classes

const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionado elementos por CSS

const productQuery = document.querySelectorAll(".product");

console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild
const navLiks = document.querySelector("nav ul");

const li = document.createElement("li");

navLiks.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Título Kbau ";

header.replaceChild(h2, title);

// 9 - CreateTextNode
const myText = document.createTextNode("Agora vem mais uma coisa");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

header.appendChild(h3);

// 10 - Trabalhando com atributos
const firstLink = navLiks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - altura e largura

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - Posição do elemento

const product3 = products[0];

console.log(product3.getBoundingClientRect());

// // 13 - CSS com JS
// mainContainer.style.color = "blue"
// mainContainer.style.backgroundColor = "black"
// mainContainer.style.paddingBottom = "50px"

// 14 - HTMLCollection

for(const li of listItems) {
    li.style.backgroundColor = "yellow"
}
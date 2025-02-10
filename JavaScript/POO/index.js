// //1 - métodos
// const animal = {
//     name: "Pluto", 
//     latir: function() {
//         console.log("AU AU")
//     }
// };

// console.log(animal.name);

// animal.latir();

// // 2 - aprofundando em metodos
// const people = {
//     name: "Gabryel",

//     getNome: function() {
//         return this.name;
//     },

//     setName: function() {
//         this.name = name;
//     },
// };

// people.setName("Leo")

// // 6 - função como classe

// function createDog(name, raca) {
//     const dog = Object.create({});

//     dog.name = name;
//     dog.raca = raca;

//     return dog;

// };


// const rex = createDog("rex", "American Bully");

// console.log(rex);

// 7 - funções como classe

// function dog(name, raca) {
//     this.anme = name;
//     this.raca = raca
// };

// const husky = new dog("Alpha", "Husky");

// console.log(husky)

// // 8 - funcão com metodos

// dog.prototype.uivar = function() {
//     console.log("auuuuuu!")
// };

// husky.uivar();

// 9 - classes ES6

// class dog {
//     constructor(name, raca) {
//         this.name = name;
//         this.raca = raca
//     };
// };

// const rex = new dog("rex", "Pitbull");

// console.log(rex);

// // 10  - mais sobre classes

// class truck {
//     constructor(axles, color) {
//         this.axles = axles;
//         this.color = color;
//     }

//     aboutTruck() {
//         console.log(`Its truck has ${this.axles} axles and your color is ${this.color}`);
//     };
// };

// const scania = new truck(6, "blue");

// scania.aboutTruck();


// 11 - Override
// class user {
//     constructor(name, age) {
//      this.name = name;
//      this.age = age;   
//     };
// }

// const gabryel = new user("Gabryel", 20);

// console.log(gabryel);

// // 12 - symbols 
// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca;
//         this.turbinas = turbinas;
//     };
// };

// const asas = Symbol();
// const pilotos = Symbol();

// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 2

// const boeing = new Aviao("boeing", 4);

// console.log(boeing);

// console.log(boeing[asas]);
// console.log(boeing[pilotos]);

// // 13 - getter and setter
// class Post {
//     constructor(title, description, tags) {
//         this.title = title;
//         this.description = description;
//         this.tags = tags;
//     };

//     get exibitTitle() {
//         return `Você está lendo: ${this.title}`;
//     };

//     set adicionarTags(tags) {
//         const tagsArray = tags.split(", ");
//         this.tags = tagsArray;
//     };

// };

// const myPost = new Post("Post de programação");

// console.log(myPost);

// console.log(myPost.exibitTitle);

// myPost.adicionarTags = "programação, js, react";

// console.log(myPost);

// 14 - herança

// class Mamifero{
//     constructor(patas){
//         this.patas = patas;
//     };
// };

// class Lobo extends Mamifero {
//     constructor(patas, name) {
//         super(patas, patas);
//         this.name = name;
//     };
// };

// const alpha = new Lobo(4, "Alpha");

// console.log(alpha);

// // 15 - instanceOf
// console.log(alpha instanceof Lobo);

// console.log(Lobo instanceof Mamifero);


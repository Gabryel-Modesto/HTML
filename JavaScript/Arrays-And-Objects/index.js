// //1 - arrays

// const list = [1,2,3,4];

// console.log(list);

// // 2 - mais sobre arrays 
// const arr = ["a", "b", "c", "v"];

// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[1]);

// // 3 - propeties
// const numbers = [8,5,2];
// console.log(numbers.length);

// // 4 métodos
// const otherNumbers = [0,1,2,3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "UpperCase";
// console.log(text.toUpperCase());

// console.log(text.indexOf("e"));

// // 5 - Objects

// const person = {
//     name: "Gabryel",
//     age: 21,
//     job: "Student"
// };

// console.log(person);

// console.log(person.name);

// // 6 - Removendo e criando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Renault",
//     km: 20000.
// };

// console.log(car);

// car.doors = 4

// console.log(car)

// delete car.model;

// console.log(car);

// // 7 - mais sobre objetos

// const obj = {
//     a: 'teste',
//     b: true
// }

// console.log(obj instanceof Object)


// // object.assign = duplica tudo que está dentro de um obj para o outro

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj)

// console.log(obj2)

// //8 - conhecendo melhor os objtetos
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))

// console.log(Object.entries(obj))

// // 9  - mutação
// const a = {
//     name: "Gabryel"
// }

// const b = a

// console.log(a)
// console.log(b)

// // 10 - loop em array

// const users = ['Wil', 'Leo', "Gabryel", "Rosário"]


// for(let i = 0; i < users.length; i++){
//     console.log(`Listando o usuário: ${users[i]}`)
// }

// // 1 - push and pop

// const array2 = ['a', 'b', 'd'];

// array2.push('p')

// console.log(array2)

// array2.pop()

// array2.push('z', 'j', 'f')
// console.log(array2)


//12 - shift and unshift

// const latters = ['l', 'm', 'd', 'k']

// 15 - FOREACH
// const nums = [1,2,3,4,5];

// nums.forEach((num) => {
//     console.log(`O número é: ${num}`)
// });

// const posts = [
//     {title: "Primeiro Post", catogory: "JS" },
//     {title: "Segundo Post", catogory: "PY" },
//     {title: "Terceiro Post", catogory: "JAVA" }
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo: ${post.title}, da categoria ${post.catogory}`)
// });


// //16 - includes

// const brands = ["BMW", "MECA", "RAM"];

// console.log(brands.includes("RAM"));


// if(brands.includes("BMW")) {
//     console.log('Há carros da marca BMW')
// };

// //17 - reverse

// const reverseTeste = [1,2,3];
// reverseTeste.reverse();

// console.log(reverseTeste)


//18 - trim
// const trimTest = "      testando\n            "

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length)

// console.log(trimTest.trim().length)

//19 - padstart

// const padTest = "5";

// const nweNumver = padTest.padStart(5, "0")
// console.log(padTest)
// console.log(nweNumver)

// // 20 - slip 
// const frase = "PEga o macacoooo "
// const arrayDaFrase = frase.split(" ")

// console.log(arrayDaFrase)

// // 21 - join
// const fraseNova = arrayDaFrase.join(" ")
// console.log(fraseNova)


// // 22 - repet

// const work = "Gabryel"
// console.log(work.repeat(5))

// 23 - rest operador / rest parameters 

// const somaInfinity = (...args) => {
//     let total = 0

//     for(let i = 0; i <args.length; i++) {
//         total += args[i]
//     };
//     return total;
// };

// console.log(somaInfinity(50,90,80))

// // 24- for of

// const sumInfanity = (...args) => {
//  let total = 0
 
//  for(num of args) {
//     total += num
//  }
//  return total;
// }


// 25 - destructuring
// const userDetails = {
//     firstName: "Gabryel",
//     lastName: "Modesto",
//     job: "programmer"
// };

// const {firstName, lastName, job} = userDetails;

// console.log(firstName, lastName, job);

// //renomear variaveis

// const {firstName: primeiroName} = userDetails;


// console.log(firstName);

// 26 - destructuring com array

// const myList = ["Avisao", "Carro", "Bike"];

// const [veiculoA, veiculoB, veiculoC] = myList;

// console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON

const myJson = '{"name": "Gabryel", "age": 31, "skills": ["PHP", "JS", "PY"]}';

console.log(myJson);

//28 - JSON para obj e obj para JSON

const myObject = JSON.parse(myJson)
console.log(myObject)

const myNewJSON = JSON.stringify(myObject)

console.log(myNewJSON)
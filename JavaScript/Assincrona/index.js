// // 1 - setTimeout
// console.log("Ainda n deu");

// setTimeout(function() {
//     console.log("async")
// },2000 )


// console.log("Ainda n deu 2");

// // 2 -  setInterval
// console.log("Ainda n deu");

// // setInterval(() => {
// //     console.log("Interval")
// // }, 3000);

// console.log("Ainda n deu 2 ");

// // 3 - promises

// const promessa = Promise.resolve(5 + 5);

// console.log("Alguma cosia")


// promessa.then(Value => {
//     console.log(`A soma é: ${Value}`);
//     return Value;
// });

// console.log("Alguma cosia 2 ")


// // 4 - tratando error em promises

// Promise.resolve(4  * "*55");

// then((n) => {
//     if(Number.isNaN(n)) {
//         throw new Error("Deu ruim");
//     };
// })
// .catch((err) => console.log(`Um erro deu errado: ${err}`));

// // 5 - Rejeitando promises
// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if(n > 10) {
//             resolve(`O numéro é mais que 10`);
//         } else {
//             reject(new Error("Número menor que 10"));
//         };
//     });
// };

// const a = checkNumber(60);

// const b = checkNumber(5);

// a.then((v) => console.log ( `O resultado é: ${v}`))
// .catch((err) => console.log(`Um erro ocorreu ${err}`));

// b.then((v) => console.log ( `O resultado é: ${v}`))
// .catch((err) => console.log(`Um erro ocorreu ${err}`));

// 6 - resolvendo varias promises
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve(10);
//     }, 3000);
// });


// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//     if(30 > 10) {
//         resolve(30);
//     } else {
//         reject("Erro");
//     };
// });


// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7  - async functions
// async function somar2(a, b) {
//     return a + b;
// };

// somar2(2,8).then((value) => {
//     console.log(`O valor da soma é: ${value}`);
// });

// console.log("Teste async")

// // 8 - async await

// function resolveCmDelay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Resolvido");
//         }, 2000);
//     });
// };

// async function chamadaAsync() {
//     console.log("Chamando a promise, esperando o resultado");
//     const result = await resolveCmDelay();
//     console.log(`O resultado cegou: ${result}`);
// };

// chamadaAsync();

// 9 - generators

// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
// };

// const gen = generator();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
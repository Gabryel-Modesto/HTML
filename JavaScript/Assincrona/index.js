// 1 - setTimeout
console.log("Ainda n deu");

setTimeout(function() {
    console.log("async")
},2000 )


console.log("Ainda n deu 2");

// 2 -  setInterval
console.log("Ainda n deu");

// setInterval(() => {
//     console.log("Interval")
// }, 3000);

console.log("Ainda n deu 2 ");

// 3 - promises

const promessa = Promise.resolve(5 + 5);

console.log("Alguma cosia")


promessa.then(Value => {
    console.log(`A soma é: ${Value}`);
    return Value;
});

console.log("Alguma cosia 2 ")


// 4 - tratando error em promises

Promise.resolve(4  * "*55");

then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Deu ruim");
    };
})
.catch((err) => console.log(`Um erro deu errado: ${err}`));
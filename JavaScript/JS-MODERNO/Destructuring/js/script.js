const fruits = ["maça", "mamão", "laranja"];

const[f1,f2,f3] = fruits;

console.log(f1,f2,f3);

const productDetails = {
    name: "Mouse",
    price: 40.40,
    category: "Periférico",
    color: "Azul"
};

const {name, price, category, color} = productDetails;

console.log(`O nome do produto é: ${name}, o valor dele é: ${price}, sua categoria é: ${category} e sua cor é: ${color}`);
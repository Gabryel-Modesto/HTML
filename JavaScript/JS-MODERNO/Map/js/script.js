const products = [
    {name: "Camisa", price: 20.00, category: "Roupas"},
    {name: "Saia", price: 25.00, category: "Roupas"},
    {name: "Microondas", price: 80.00, category: "eletro"},
    {name: "AirFri", price: 200.00, category: "eletro"},
    {name: "caneta", price: 5.00, category: "material"},
];

products.map((product) => {
    if(product.category === "eletro") {
        product.onSale = true;
    };
});

console.log(products);
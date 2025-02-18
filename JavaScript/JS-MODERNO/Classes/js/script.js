class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };


    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    };
};

const shirt = new Product("Camisa Polo", 60);

console.log(shirt);

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))

// Herança

class ProductWithAttibutes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors
    }

    showColors() {
        console.log("As cores são");
        this.colors.forEach((color) => {
            console.log(color);
        });
    };
};

const hat = new ProductWithAttibutes ("Chápeu", 20.90, ["Amarelo", "Preto", "Azul"]);

console.log(hat);

console.log(hat.name)

hat.showColors()
const arr = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr, ...arr2];


const arr4 = [0, ...arr3, 7];

console.log(arr4);

const carName = {name: "Gol"};
const carBrand = {name: "VW"};
const otherInfos = {km: 100000, price: 50000 };

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car);
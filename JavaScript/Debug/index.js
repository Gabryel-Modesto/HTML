// 1 - Strict;
"use strict";

// 2 - console.log

let a = 1;
let b = 2;

if(a == 1)  {
    a = b + 2;
};

console.log(a);

for(let i =0; i < b; i++) {
    a = a + 2;
    console.log(a);
};

if(a > 5) {
    a = 25;
};

console.log(a)


// 3 - debugger
let c = 1;
let d = 2;

if(c == d) {
    c = d + 2; 
};

//debugger;

for(let i = 0; i < d; i++) {
    c = c + 2;
};

// 4 - tratamento de dados
function checkNumber(n) {
    const result = Number(n);

    if(Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return
    };
    console.log("Valor válido");
    return result;
};

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("tstetete");


// 5 - Exceptions 

// let z = 10;

// if(z != 11) {
//     throw new Error("O valor de z não pode ser diferente de 11");
// };

// 6 - Try Catch
try {
    const sum = x + y
} catch (error) {
    console.log(`Erro no programa: ${error}`);
};

// 7 - finally
try {
    const value = checkNumber('ADS');

    if(!value) {
        throw new Error("Valores Inválidos");
    }
} catch(e) {
    console.log(`Deu ruim: ${e}`);
} finally {
    console.log("FOi executado");
};

// 8 - assertion

function checkArray(arr) {
    if(arr.length === 0) {
        throw new Errror ("O array precisa ter elementos");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    };
};

checkArray([1,2,3]);
// console.log("Opa, bão? ");  

// console.log(document.head);
// console.log(document.body);


// Acessando elementos por tag, class e id
// let titulo = document.getElementsByTagName("h1")[0]; 

// var paragrafos = document.getElementsByClassName("para");

// var para3 = document.getElementById("p3");

// paragrafos[0].innerText = "Tauba";

// para3.innerHTML = " <h3> Novo texto aqui </h3>";

// var p1 = document.getElementsByTagName("p")[0];
// p1.style.backgroundColor = "red";

// para3.style.color = "green";

function cliquei(){
    console.log("Cliquei de novo")
};

function outrofoco(){
    console.log("Mudei o foco, não está mais na caixa")
};

function trocaTexto(textoCaixinha){
  let texto = document.getElementById("textoPraTrocar");
  texto.innerText = textoCaixinha.value;
};

function corVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "60px"
}

function corAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "30px"
}
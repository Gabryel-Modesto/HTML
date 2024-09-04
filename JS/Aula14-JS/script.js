// let contagem = 0;

// function mostrarContagem() {
//     contagem++;
//     console.log(contagem);

//     if (contagem >= 10) {
//         clearInterval(minhaContagem);
//     }
// }


// let minhaContagem = setInterval(mostrarContagem, 1000);


let hr = document.getElementById("horas");
let min = document.getElementById("minutos");
let seg = document.getElementById("segundos");
let textSaudacao = document.getElementById("saudacaoTexto");
let dayMonthYear = document.getElementById('diaMesAno');

let days = ["DOMINGO / ", "SEGUNDA-FEIRA / ", "TERÇA-FEIRA / ", "QUARTA-FEIRA / ", "QUINTA-FEIRA /", "SEXTA-FEIRA / ", "SÁBADO /"]
let mes = ["01", "02", "03", "04", "05", "06", "07", "08","09","10", "11", "12"];

let comprimento = ''

let update = setInterval(function (){
    let dataAtual = new Date();
    let hrAtual = dataAtual.getHours().toString().padStart(2,"0");
    let minAtual = dataAtual.getMinutes().toString().padStart(2,"0");
    let segAtual = dataAtual.getSeconds().toString().padStart(2,"0");
    let diaSemanaAtual = dataAtual.getDay();
    let mesAno = dataAtual.getMonth();
    let dia = dataAtual.getDate().toString().padStart(2, "0");
    let anoMes = dataAtual.getFullYear();
   

    let horaAtual = dataAtual.getHours();
    
    comprimento = trocaSaudacao(horaAtual);

    hr.textContent = hrAtual;
    min.textContent = minAtual;
    seg.textContent = segAtual;
    textSaudacao.textContent = `${comprimento} ${days[diaSemanaAtual]}`;
    dayMonthYear.textContent = `${dia} / ${mes[mesAno]} / ${anoMes}`;
    


})

function trocaSaudacao(horas) {
    if (horas >= 18) {
        return "Boa noite - ";
    } else if (horas >= 12) {
        return "Boa tarde - ";
    } else if (horas >= 5) {
        return "Bom dia - ";
    } else {
        return "Boa madrugada - ";
    };
};
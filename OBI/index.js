//Pneu
function question1(n, m){
    let difference = n - m

    return difference
}
//console.log(question1(30, 18))

//Tomadas
function question2(T_1, T_2, T_3, T_4){

    let total = T_1 + T_2 + T_3 + T_4 - (question2.length - 1)

    return total
}
//console.log(question2(2,4,3,2));

//Recorde
function question3(R, M, L){
    /*
    R = Nota atleta
    M = Recorde Mundial
    L = Recorde Olímpico
    */
   let recordeMundial = "*";
   let recordeOlimpicio = "*";

   if(R > M){
    recordeMundial = "RM";
   }
   if(R> L){
    recordeOlimpicio = "RO"
   }

   return recordeMundial + "\n" + recordeOlimpicio
}
//console.log(question3(96, 95, 97));

function question4(A, B, C){
    let minTrips = 3
    if(A + B < C){
        minTrips = 1
    }
    if(A + B >= C && (A + B < C || A < C)){
        minTrips = 2
    }

    return minTrips
}

function question5(A, B, C){
    let idades = [A, B, C]
    
    idades.sort()

    

    return idades[1]
}
//console.log(question5(55, 69, 45));

function question6(A, B, C){
    let resultado
    if((B - A) < (C - B)){
        resultado = 1
    }
    else if((B - A) > (C - B)){
        resultado = -1
    }
    else{
        resultado = 0
    }

    return resultado
}

function question7(A, S, D){
    /* A = altura muro
    S = Distância subida
    D = Distância escorregada
    */
    if (S >= A) {
        return 1;
    } else {
        const progressoDiario = S - D;
        const distanciaRestante = A - S;
        const diasParaAlcancar = (distanciaRestante + progressoDiario - 1) / progressoDiario;
        const diasInteiros = Math.floor(diasParaAlcancar);

        return diasInteiros + 1;
    }
}
//console.log(question7(4,2,1));

function question8(idadeMonica, idadeFilho1, idadeFilho2) {
    const idadeFilho3 = idadeMonica - idadeFilho1 - idadeFilho2;
    const idadeMaisVelho = Math.max(idadeFilho1, idadeFilho2, idadeFilho3);

    return idadeMaisVelho;
}

function question9(A, M) {
    // Capacidade máxima do bondinho
    const capacidadeMaxima = 50;

    // Soma total de pessoas (alunos + monitores)
    const totalPessoas = A + M;

    // Verifica se a soma total é menor ou igual à capacidade máxima
    if (totalPessoas <= capacidadeMaxima) {
        return 'S';
    } else {
        return 'N';
    }
}
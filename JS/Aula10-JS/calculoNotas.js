/*
                        CALCULO DE NOTAS
*/

var alunos = ["Pedro", "Tiago", "João"];
var notasA = [8.0, 7.0, 6.0];
var notasB = [7.0, 5.7, 6.3];

function media(nota1, nota2) {
    var n1 = nota1
    var n2 = nota2
    var media = (n1 + n2) / 2;
    return media;
};

function mostrarResultados() {
    for (var index in alunos) {
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        console.log("O aluno ", alunos[index], "teve a média de ", mediaAtual)
    }
}
mostrarResultados();

function Passou() {
    for (var index in alunos) {
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        if (mediaAtual >= 7) {
            console.log("O aluno ", alunos[index], " foi aprovado!");
        } else if (mediaAtual >= 5 && mediaAtual < 7) {
            console.log("O aluno ", alunos[index], " está de recuperação!")
        } else {
            console.log("O aluno ", alunos[index], "reprovou!")
        };
    }
};
Passou();


var input = `7
4 5
13 10
6 4
3 3
3 5
3 4
3 8`;

var lines = input.split('\n');

const vetor = [];

for(let i = 0; i < 8; i++) {
    vetor.push(lines[i].split(' '));
    vetor[i][0] = Number(vetor[i][0]);
    vetor[i][1] = Number(vetor[i][1]);
}

var impar = [];
function lacoQueFazVetorIntervalo(num1, num2) {
    if(num1 > num2) {
        while (num1 - 1 > num2) {
            impar.push(num2 += 1);
        }
    } else {
        while (num1 + 1 < num2) {
            impar.push(num1 += 1);
        }
    }
}

function verificaSeEhImpar(numero) {
    if (numero % 2 !== 0) {
        return numero;
    }
}

function soma(num1, num2) { 
   return num1 + num2;
}

function processaTudo(num1, num2) {
    impar = [];
    lacoQueFazVetorIntervalo(num1, num2);
    let arr = impar.filter(verificaSeEhImpar);
    var result = arr.reduce(soma, 0);
    return result;
}

let vetorResultado=[];

for(let i = 1; i < 8; i++) {
    const a = vetor[i][0];
    const b = vetor[i][1];
    vetorResultado.push(processaTudo(a, b));
}

console.log(`${vetorResultado[0]}
${vetorResultado[1]}
${vetorResultado[2]}
${vetorResultado[3]}
${vetorResultado[4]}
${vetorResultado[5]}
${vetorResultado[6]}`);
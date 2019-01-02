const input = `5 2
6 3
5 0`;

const lines = input.split('\n');

const pares = [];

for(i=0; i < lines.length; i++) {
    const aux = lines[i].split(' ');
    pares.push(aux);
    pares[i][0] = Number(pares[i][0]);
    pares[i][1] = Number(pares[i][1]);

}
 
const resultado = [];

function interval(maior, menor) {
    const vetorIntervalo =[];
    while(maior >= menor) {
        vetorIntervalo.push(menor++);
    }
    resultado.push(vetorIntervalo);
}


for (i=0; i < lines.length; i++) {
    maior = pares[i][0];
    menor = pares[i][1];
    if(maior > 0 & menor > 0) {
        interval(maior, menor);
    }
}

let soma = (a, b) => a + b;

console.log(`${resultado[0][0]} ${resultado[0][1]} ${resultado[0][2]} ${resultado[0][3]} Sum=${resultado[0].reduce(soma, 0)}
${resultado[1][0]} ${resultado[1][1]} ${resultado[1][2]} ${resultado[1][3]} Sum=${resultado[1].reduce(soma, 0)}`);





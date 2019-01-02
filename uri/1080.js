var input = `2
113
45
34565
6
8
6
6
6
6
6
6
6
7
7
8
8
8
8
8
8
8
9
9
9
9
9
113
45
34565
6
8
6
6
6
6
6
6
6
7
7
8
8
8
8
8
8
8
9
9
9
9
9
113
45
34565
6
8
6
6
6
6
6
6
6
7
7
8
8
8
8
8
8
8
9
9
9
9
9
113
45
34565
8
6
6
6
6888
6
6
6
7
7
8
8
8
8
8
8
8
9
9
9
9
9
113
45
34565
6
8
6
999999`;
var lines = input.split('\n');

const vetor = lines.map(elemento => Number(elemento));

let vetorCemNumeros = [];

for(i=0; i < 100; i++) {
    var teste = vetorCemNumeros.push(vetor[i]);
}

const maior = Math.max(...vetorCemNumeros);
console.log(`${maior}
${vetorCemNumeros.indexOf(maior) + 1}`);

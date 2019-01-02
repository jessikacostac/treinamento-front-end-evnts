var input = `1.0 4.0 8.5 9.0
6.4`;
var lines = input.split('\n');

var notas = lines[0].split(' ');
var notaExame = Number(lines[1]);

var transformaNumero = elemento => Number(elemento);

var calculaMedia = (a, b, c, d) => (((a*2) + (b*3) + (c*4) + (d)) / 10);

var [n1, n2, n3, n4] = notas.map(transformaNumero);

var media = calculaMedia(n1, n2, n3, n4);

var mediaExame = ((media + notaExame)/2).toFixed(1);

function processaMedia (media){
    if(media >= 7) {
        situacao = `Media: ${media.toFixed(1)}
        Aluno aprovado.`;
        return situacao;
    } else if(media < 5 ) {
        situacao = `Media: ${media.toFixed(1)}
        Aluno reprovado.`;
        return situacao;
    } else {
       return processaMediaExame(media);
    }
};

var processaMediaExame = media => {
    if(mediaExame >= 5) {
        situacao = `Media: ${media.toFixed(1)}
        Aluno em exame.
        Nota do exame: ${notaExame}
        Aluno Aprovado.
        Media final: ${mediaExame}`;
        return situacao;
    } else {
        situacao = `Media: ${media.toFixed(1)}
        Aluno em exame.
        Nota do exame: ${media}
        Aluno reprovado.
        Media final: ${mediaExame.toFixed(1)}`;
        return situacao;
    }
};

console.log(processaMedia(media));
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            ////////////  REGEX  //////////////
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});



// O novo evento de input
// O truque de deixar invisível adicionando uma classe com display:none
// Como realizar uma busca, escondendo todos os elementos e mostrando apenas aqueles que nos interessam
// Como buscar por apenas um pedaço de uma palavra com as Expressões Regulares em Javascript


// As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings, 
// facilitando quando o termo for maior. Pode ser uma busca simples, como no nosso caso, em que queremos 
// identificar quais nomes contêm determinadas letras; ou casos complexos, se queremos pesquisar se o parágrafo 
// contém a palavra "nome", por exemplo, é como quando os editores de texto buscam por uma palavra usando o comando "CTRL + F".
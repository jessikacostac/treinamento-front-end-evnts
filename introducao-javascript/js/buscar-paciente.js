//AJAX - técnica de fazer uma REQUEST com JavaScript de modo Assíncrono 
//(assíncrono porque ele não está parando o fluxo do javascript)
//Não interfere o funcionamento dos outros scripts na página e não trava caso a request não funcione bem.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; //retorna uma string JSON
            var pacientes = JSON.parse(resposta); //transforma em um objeto

            //iterar o array - "Para cada paciente você pega esse paciente e chama a função anônima e chama a função 'adicionaPaciente'"
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});

// Como fazer uma requisição assíncrona com o Javascript
// O objeto XMLHttpRequest
// Como configurar e enviar uma requisição
// O evento de load
// O que é a técnica AJAX.
// O formato JSON
// Como converter JSON para um objeto Javascript com a função JSON.parse()
// Como lidar com erros durante o AJAX
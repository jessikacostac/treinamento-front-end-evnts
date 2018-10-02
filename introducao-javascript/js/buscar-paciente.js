//AJAX - técnica de fazer uma REQUEST com JavaScript de modo Assíncrono 
//(assíncrono porque ele não está parando o fluxo do javascript)
//Não interfere o funcionamento dos outros scripts na página e não trava caso a request não funcione bem.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200) {
            // var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("invisivel");
            // console.log(xhr.responseText); //retorna uma string JSON

            var resposta =  xhr.responseText;

            var pacientes =  JSON.parse(resposta);

            //iterar o array - "Para cada paciente você pega esse paciente e chama a função anônima e chama a função 'adicionaPaciente'"
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
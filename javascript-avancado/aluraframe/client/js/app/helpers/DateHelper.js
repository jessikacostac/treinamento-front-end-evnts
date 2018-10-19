class DateHelper {
    //se não coloca o contructor{} por padrão já vem um interno
    //definindo os métodos como STATIC, sendo assim você pode invocar os métodos diretamente na classe

    //Avisando que ão não pode criar um novo 
    constructor() {
        //lançar um novo erro -  função construtoras - Não pdoe ser instanciada
        throw new Error("Date Helper não pode ser instanciada");
    } 

    //Métodos státicos
    static dataParaTexto(data) {
        //TEMPLATE STRINGS Super Power
        return `${data.getDate()}/ ${data.getMonth()+1}/${data.getFullYear()}`;  

    }

    static textoParaData(texto) {
        //failed fast - erra rápido*
        //Expressão regular é regex????????***************
        //(/\--"todo mundo que é digito \d" (D maiúsculo é qualquer coisa diferente de número)--d{4} --"tem que ter 4 digitos"-- -\d{2}-\d{2}/.test(texto) "testa se este texto segue o padrão"

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
        //se o retorno da expressão for false retorne>>
            throw new Error("Data deve estar no formato aaaa-mm-dd");

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }

}

//backstick ``




// adiciona(event) {

//     event.preventDefault();
//     // alert('Chamei ação no controller');

//     //Tratando a Data comprogramação funcional
//     let data =  new Date(
//         //spread operator - permite passar um array como parametro para uma função, constructor de uma classe
//         //1º elemento do array vai ser o 1º parametro passado para esta função
//         //2º item do array item vai ser o 2º parametro  passado para esta função ou contrtuctor
//         ...this._inputData.value
//         .split('-')
//         //aero function -  quando só tem uma instrução não precisa
//         .map((item, indice) => item - indice % 2)
//     );

//     let negociacao =  new Negociacao(
//         data,
//         this._inputQuantidade.value,
//         this._inputValor.value
//     );


//     // console.log(negociacao);


//     // console.log(this._inputData.value);
//     // console.log(this._inputQuantidade.value);
//     // console.log(this._inputValor.value);
// }
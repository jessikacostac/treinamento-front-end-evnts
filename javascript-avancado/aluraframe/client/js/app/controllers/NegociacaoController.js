//Criando o primeiro "Controller" da aplicação
class NegociacaoController {

    constructor() {

        //Otimização do código
        //Atribuimos ao $ querySelector para não precisar reescrevar toda vez que precisar acessar o elemento
        //Capturando os valores dos elementos
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();
        
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
            );


        console.log(negociacao);

        console.log(DateHE.dataParaTexto(negociacao.data));
    }

  }

        //Forma antiga de acessar os inputs
        // let inputData = document.querySelector('#data');
        // let inputQuantidade...
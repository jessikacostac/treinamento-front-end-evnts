class NegociacaoController {

    constructor() {

        //Otimização do código
        //Atribuimos ao $ querySelector para não precisar reescrevar toda vez que precisar acessar o elemento
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();
        // alert('Chamei ação no controller');

        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
    }
  }

        //Forma antiga de acessar os inputs
        // let inputData = document.querySelector('#data');
        // let inputQuantidade...
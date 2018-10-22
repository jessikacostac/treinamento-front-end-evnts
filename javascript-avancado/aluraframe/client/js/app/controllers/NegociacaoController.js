//Criando o primeiro "Controller" da aplicação
class NegociacaoController {

    constructor() {

        //Otimização do código
        //Atribuimos ao $ querySelector para não precisar reescrevar toda vez que precisar acessar o elemento
        //Capturando os valores dos elementos
        //Atributos
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes._negociacoes);
   }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }


    _limpaFormulario() {

        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

//Criando o primeiro "Controller" da aplicação
class NegociacaoController {

    constructor() {
        //Otimização do código
        //Atribuimos ao $ querySelector para não precisar reescrevar toda vez que precisar acessar o elemento
        //Capturando os valores dos elementos
        //Atributos
        let $ = document.querySelector.bind(document);
        // debugger; *********** debugar código
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model =>
            //Quem é esse model? Vai ser uma instância de ListaNegociacao
            //que vai ser passada para esta function quando for chamada
            this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem =  new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociação Adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
        // console.log(this._listaNegociacoes._negociacoes);
   }

   apaga() {
       this._listaNegociacoes.esvazia();
       this._negociacoesView.update(this._listaNegociacoes);

       this._mensagem.texto = 'Negociações apagadas com sucesso';
       this._mensagemView.update(this._mensagem)
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

}
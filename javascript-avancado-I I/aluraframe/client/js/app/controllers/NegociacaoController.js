class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        let self = this;
        
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            
            get(target, prop, receiver) {
                
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    
                    return function() {
                        
                         console.log(`interceptando ${prop}`);
                         Reflect.apply(target[prop], target, arguments);
                         self._negociacoesView.update(target);
                    }
                }
                
                return Reflect.get(target, prop, receiver);
            }
            
        });
         
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);    
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();   
    }
    
    apaga() {
        
        this._listaNegociacoes.esvazia();
         
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}





//Criando o primeiro "Controller" da aplicação


        //Otimização do código
        //Atribuimos ao $ querySelector para não precisar reescrevar toda vez que precisar acessar o elemento
        //Capturando os valores dos elementos
        //Atributos

        // debugger; *********** debugar código


        // this._listaNegociacoes = 
        //     new ListaNegociacoes(model => this._negociacoesView.update(model));
            //Quem é esse model? Vai ser uma instância de ListaNegociacao
            //que vai ser passada para esta function quando for chamada para atualizar o modelo toda vez que for chamado o método adiciona e esvazia
            //Outra opção Reflect apply


     
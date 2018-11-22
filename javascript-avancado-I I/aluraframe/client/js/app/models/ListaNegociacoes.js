class ListaNegociacoes {
    
    constructor() {
        // constructor(armadilha) {
        
        this._negociacoes = [];
        // this._armadilha = armadilha;


    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        // this._armadilha(this);
        //API de Reflexão do JS
        // Reflect.apply(this._armadilha, this._contexto, [this]);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        // this._armadilha(this);
        // Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}


//Modelo é a parte mais reutilizável do nosso sistema

//function() {}             >>>  Escopo dinâmico - ("this") varia de acordo com o contexto que é chamada.

//Aero function - ( => );   >>>Escopo Léxico - o contexto sempre vai manter onde está seu escopo.

// O this de uma função é dinâmico, isto é, seu valor é determinado no momento em que a função é chamada. Como o this é dinâmico, é possível usar artifícios da linguagem, como a API Reflect, para alterá-lo se assim desejarmos.

// O this de uma arrow function é léxico, isto é, seu valor é determinado no local onde a arrow function for definida, ela não cria um novo this. O this de uma arrow function não pode ser alterado, mesmo se usarmos recursos da linguagem, como a API Reflect.

// Arrow functions ajudam bastante quando aplicamos o paradigma orientado a objetos, pois o this passa a se comportar como o esperado, especialmente em outras linguagens de programação, como Java e C#.
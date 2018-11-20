class Mensagem {

    //Modelo de mensagem vai guardar um texto para informar o usuário

    //COm o ES6, se eu não passar no constructor um texto, ele vai considerar uma string vazia
    constructor(texto="") {

        this._texto = texto;
    }

    //Acessando o valor de "texto" pelo método Getter
    get texto() {

        return this._texto;
    }

    //Alterando o "texto" pelo setter
    set texto(texto) {

        this._texto = texto;
    }
}

// let Mensagem = new Mensagem('');

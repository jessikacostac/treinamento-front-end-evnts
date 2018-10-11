class Negociacao {

    constructor(data, quantidade, valor) {

        //Por padrão quando existe o "_" no começo, quer dizer que este metodo não pode ser alterado fora da class.
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //Não congela a propriedade _data por se tratar de um objeto
        //Superfície rasa de segurança
        Object.freeze(this);
    }

    //Métodos acessadores -  propriedade GETTER acesso restrito
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {

        //Progrmação DEFENSIVA, cria um novo objeto que cria uma cópia da data como uma camada de proteção - IMUTABILIDADE - solução viável e aceita
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}

    var n1 = new Negociacao(new Date(), 5, 700);

    console.log(Object.isFrozen(n1)); //tá congelado? -  falso
    console.log(Object.freeze(n1)); //true
    console.log(n1);

    console.log(n1.data);

    //ES6
    //LET -> Escopo de bloco -  só existem nos blocos onde foram declaradas
    //Evita vazamento de memória fora do escopo
class Negociacao {

    constructor(data, quantidade, valor) {

        //Por padrão quando existe o "_" no começo, quer dizer que este metodo não pode ser alterado.
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
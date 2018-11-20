class MensagemView extends View {

    constructor(elemento) {

        super(elemento) ;
    }

    template(model) {

        //if ternário
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}
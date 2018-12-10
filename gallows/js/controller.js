const criaController = (jogo) => {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    // consulta jogo.getLacunas() e exibe para o usuário cada lacuna 

    const exibeLacunas = () => {

        //Tira as lacunas da tela
        $lacunas.empty();
        //pega novamente todas as lacunas
        jogo.getLacunas().forEach((lacuna) => {
            // para cada lacuna cria uma <li>
            $('<li>')
            .addClass('lacuna')
            .text(lacuna)
            .appendTo($lacunas)            
        });

    };

    // muda o texto do placeHolder do campo de entrada    
    const mudaPlaceHolder = (texto) => $entrada.attr('placeholder', texto);

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    const guardaPalavraSecreta =() => {

        //pega valor - tira espaços
        jogo.setPalavraSecreta($entrada.val().trim());
        //Limpa campo de entrada
        $entrada.val('');
        //troca placeholder
        mudaPlaceHolder('Digite o seu Chute');
        //exibe lacunas
        exibeLacunas();

    };

    const reinicia = function() {

        jogo.reinicia();
        $lacunas.empty();
        mudaPlaceHolder('Palavra secreta');
    };


    const leChute = () => {

        jogo.processaChute($entrada.val().trim().substr(0,1));
        $entrada.val('');
        exibeLacunas();

        if(jogo.ganhouOuPerdeu()) {

            setTimeout(() => {

                if(jogo.ganhou()) {
                alert('Uhuuuu, Você Ganhou!');
                } else if(jogo.perdeu()) {
                    alert('Não foi desta vez, tente novamente!');
                }
                reinicia();

            }, 500);
        } 

    }

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    const inicia = () => {
        $entrada.keypress((event) => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return { inicia: inicia };
};
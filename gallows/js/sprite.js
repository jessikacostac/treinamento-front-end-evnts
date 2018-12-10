//alterando as imagens FRAMES

//function expressions
const createSprite = (selector) => {
    //recebe seletor ".sprite"

    const moveFrame = (de, para) => {
        
        $el.removeClass(de)
            .addClass(para);
    };

    const hasNext =  () => atual + 1 <= ultimo;

    const nextFrame = () => {

        if(hasNext()) moveFrame(frames[atual], frames[++atual]);
    };

    const reset = () => {

        moveFrame(frames[atual], frames[0]);
        atual = 0;
    };

    const isFinished = () => !hasNext();

    const $el = $(selector);

    const frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let atual = 0;
    let ultimo = frames.length -1;

    $el.addClass(frames[atual]);

    return {
        nextFrame,
        reset,
        isFinished
    };
};


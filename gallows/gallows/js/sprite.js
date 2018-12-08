var el = document.querySelector('.sprite');
var frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];
var i = 0;

function nextFrame() {
    if(i < frames.length) {
        el.classList.add(frames[++i])
        console.log(i)
    }
} 




// function createSprite() {
//     document.querySelector(seletor).classList.add('frame1')

// }
// //recebe seletor ".sprite" div


// var frame = "frame";
// var cont = 1;

// function nextFrame(seletor) {
//     console.log("ok");
//     seletor.classList.add('.frame5')

//     // if(cont < 10) {
//     //     return frame + cont++
//     // }

// }
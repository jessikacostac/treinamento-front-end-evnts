
// Âncora
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
});

let form = document.querySelector('form');
let btnForm = document.querySelector('#btn');
console.log(btnForm);


btnForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Inscrição realizada com Sucesso!");
    form.reset();

});



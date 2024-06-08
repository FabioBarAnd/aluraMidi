function tocarSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento /*== elemento != null*/ && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log ('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        console.log(evento.code === 'Space' || evento.code === 'Enter');
        if(evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.unkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

var titulos = 'aplico';
numero_pagina(31);
var contadorRespCorrectas=0;
var words = ['columpio','ejemplo','empleo','amplio','temprano'];
  			var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
  			$('#solve').click( function() {wordfindgame.solve(gamePuzzle, words);});
  			var puzzle = wordfind.newPuzzle(words,{height: 20, width:20, fillBlanks: false});
              wordfind.print(puzzle);


document.getElementById('bt_comprobar').addEventListener('click',calcularNota);              
              
function calcularNota(){
    var classNameElements = document.getElementsByClassName('word');
    Array.from(classNameElements).forEach(
        (currElement) => {
            var ce = currElement.classList.contains('wordFound');
            if(ce){
                contadorRespCorrectas = contadorRespCorrectas+1;
            }
            
        }

    );
    if(contadorRespCorrectas == classNameElements.length){
        document.getElementById('txtNota').innerHTML = 10.00;
    }else if(contadorRespCorrectas<4){
        alert('Aún te faltan encontrar '+(classNameElements.length-contadorRespCorrectas)+' palabras en la sopa de letras.');
    }
}




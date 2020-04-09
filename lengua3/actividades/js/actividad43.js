var titulos = 'aplico';


var loadTxt = [ 'Que cumplas muchos años más. <br>Eres una persona sensacional. <br>Te quiero mucho. <br>Ariana',
    'Eres mi mejor amigo. <br>Siempre estaremos juntos. <br>¡Cuenta conmigo! <br>Juan.'];

//separarTexto(loadTxt[0],'tar1');
//separarTexto(loadTxt[1],'tar2');

document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];


numero_pagina(25);


enviarEventosListener("tar1"); 
enviarEventosListener("tar2"); 

function validNum(){
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
  }
}
function separarTexto(cadena,id){
    var separador = " ";
    var splitCadena = [];
    splitCadena = cadena.split(separador);
    addTag(splitCadena,id);
    
}
function addTag(arregloCadena,id){
    for(j=0; j< arregloCadena.length; j++){
        var test = document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML = test + '<span>'+ ' ' +arregloCadena[j]+'</span>';
    } 
    
}
function underlinetext(id) {
    var txt = "";

        if (window.getSelection) {
                txt = window.getSelection();
        }
        else if (document.getSelection) {
            txt = document.getSelection();
        } else if (document.selection) {
            txt = document.selection.createRange().text;
        }
        var str = document.getElementById(id).innerHTML;
        var res = str.replace(txt.toString(),'<span class="underline">'+txt.toString()+'</span>');
        document.getElementById(id).innerHTML = res;
}
function enviarEventosListener(id)
{
    document.getElementById(id).addEventListener('mouseup',function(){
        underlinetext(id);
    });
    

}


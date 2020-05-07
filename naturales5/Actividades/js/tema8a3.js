var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';

function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 3)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 4)
});
var loadTxt = [ 
    "La cartelera grande informa sobre las actividades en la escuela.",
    "La cartelera pequeña contiene imágenes sobre el reciclaje.",
    "La cartelera tiene anuncios importantes.",
    "Los estudiantes arman una cartelera interesante."];



document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];
document.getElementById('tar3').innerHTML = loadTxt[2];
document.getElementById('tar4').innerHTML = loadTxt[3];
    

enviarEventosListener("tar1"); 
enviarEventosListener("tar2"); 
enviarEventosListener("tar3");
enviarEventosListener("tar4");
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
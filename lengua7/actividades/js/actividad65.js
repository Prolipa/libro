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
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});

var loadTxt = [ 
    "<h4><b style='color:#00976F'>Campana sobre campana</b></h4>",
    "Campana sobre campana y sobre campana una, asómate a la ventana, verás al Niño en la cuna.",
    "Belén, campanas de Belén, que los ángeles tocan, ¿qué nuevas me traéis?",
    "Campana sobre campana y sobre campana dos, asómate a la ventana porque está naciendo Dios.",
    "Belén, campanas de Belén, que los ángeles tocan, ¿qué nuevas me traéis?"];
document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];
document.getElementById('tar3').innerHTML = loadTxt[2];
document.getElementById('tar4').innerHTML = loadTxt[3];
document.getElementById('tar5').innerHTML = loadTxt[4];

enviarEventosListener("tar1"); 
enviarEventosListener("tar2"); 
enviarEventosListener("tar3");
enviarEventosListener("tar4");
enviarEventosListener("tar5");

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

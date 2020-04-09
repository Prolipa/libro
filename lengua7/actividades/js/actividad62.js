var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';

function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 5)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 5)
});
var loadTxt = [ 
    "Niñito bonito,<br> carita de santo,<br> este veinticuatro,<br> alegre le canto. <br><h6>Raymundo Zambrano</h6>",
    "Desde el veinticinco<br> que fue Navidad,<br> hasta el dos de febrero,<br> se canta nomás.<br><h6>Raymundo Zambrano</h6>",
    "Cantemos, cantemos<br> con dicha y con fe,<br> si no nos dan chicha<br> nos darán café.<br><h6>Dumas Mora</h6>",
    "Prendan la candela,<br> pero con astilla,<br> para que nos den<br> café con tortilla.<br><h6>Eumeny Álava</h6>",
    "Cantemos, cantemos,<br> no estemos pensando,<br> que el que lo está oyendo,<br> lo está murmurando.<br><h6>Rosita Basurto y Margarita García</h6>",
    "Mentira, Niñito,<br> que no es murmurando,<br> son unos versitos<br> que están repasando.<br><h6>Rosita Basurto y Margarita García</h6>",
    "Niñito bonito,<br> vestido de blanco,<br> al que no le canta<br> sáquelo del banco.<br><h6>Dumas Mora</h6>",
    "Niñito bonito,<br> vestidito 'e randa,<br> ya nomás se acaban<br> todas sus parrandas.<br><h6>Rosita Basurto y Margarita García</h6>",
    "Niñito bonito,<br> vestidito ‘e broche,<br> con estos versitos<br> pase buena noche.<br><h6>Rosita Basurto y Margarita García</h6>",
    "<h6>Puga, Consuelo (2012). El chigualo manabita, la fiesta<br> navideña montubia, Picoazá 2010 [Tesis magistral inédita].<br> Universidad de Cuenca/ Pontificia Universidad del<br> Ecuador, pp. 31-64.</h6>",
    "<h4><b style='color:#009DCC'>Chigualos manabitas</b></h4>",
    "Cantemos, cantemos,<br> vamos a cantá,<br> el niño se ha ido<br> y en el cielo está.",
    "No llores, negrita,<br> por tu hijo ya,<br> los ángeles del cielo<br> lo van a cuidá.",
    "Dancemos con el niño,<br> el niño se va.<br> Los ángeles del cielo<br> alas te traerán.",
    "El niño se ha muerto,<br> lo vamos a chigualiá,<br> tírame ese niño<br> de allá para acá.",
    "Hagamos una rueda<br> donde el niño está,<br> con palma y corona<br> como un ángel más.",
    "Mamita, mamita,<br> mamita, mamá,<br> porque hay gente alegre<br> si no es pa' llorá.",
    "Estamos de fiesta<br> y en el cielo están,<br> porque un ángel negro<br> ya lo pueden pintá.",
    "<h6>S/A (2017). 'Chigualos y Arrullos'. Enciclopedia de Ejemplos. Recuperado de https://goo.gl/ct8PRL</h6>",
    "<h4><b style='color:#009DCC'>Chigualo esmeraldeño</b></h4>"];


document.getElementById('tar12').innerHTML = loadTxt[11];
document.getElementById('tar13').innerHTML = loadTxt[12];
document.getElementById('tar14').innerHTML = loadTxt[13];
document.getElementById('tar15').innerHTML = loadTxt[14];
document.getElementById('tar16').innerHTML = loadTxt[15];
document.getElementById('tar17').innerHTML = loadTxt[16];
document.getElementById('tar18').innerHTML = loadTxt[17];
document.getElementById('tar19').innerHTML = loadTxt[18];
document.getElementById('tar20').innerHTML = loadTxt[19];
    
 
enviarEventosListener("tar12"); 
enviarEventosListener("tar13"); 
enviarEventosListener("tar14");
enviarEventosListener("tar15");
enviarEventosListener("tar16");
enviarEventosListener("tar17");
enviarEventosListener("tar18");
enviarEventosListener("tar19");
enviarEventosListener("tar20");


document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];
document.getElementById('tar3').innerHTML = loadTxt[2];
document.getElementById('tar4').innerHTML = loadTxt[3];
document.getElementById('tar5').innerHTML = loadTxt[4];
document.getElementById('tar6').innerHTML = loadTxt[5];
document.getElementById('tar7').innerHTML = loadTxt[6];
document.getElementById('tar8').innerHTML = loadTxt[7];
document.getElementById('tar9').innerHTML = loadTxt[8];
document.getElementById('tar10').innerHTML = loadTxt[9];
document.getElementById('tar11').innerHTML = loadTxt[10];
    

enviarEventosListener("tar1"); 
enviarEventosListener("tar2"); 
enviarEventosListener("tar3");
enviarEventosListener("tar4");
enviarEventosListener("tar5");
enviarEventosListener("tar6");
enviarEventosListener("tar7");
enviarEventosListener("tar8");
enviarEventosListener("tar9");
enviarEventosListener("tar10");
enviarEventosListener("tar11");
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
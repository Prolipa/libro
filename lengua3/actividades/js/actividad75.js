var titulos = 'aplico';

var loadTxt = [ 
    'Érase una vez un rey que tenía doce hijas muy hermosas. Ellas dormían en una sola habitación, que el rey cerraba con llave todas las noches, personalmente. Sin embargo, cuando abría la puerta por las mañanas, veía que sus zapatos estaban rotos de tanto bailar y nadie era capaz de explicar lo que sucedía.',
    'Entonces el rey ofreció la mano de una de sus hijas y el reino, al caballero que lograra resolver el misterio, pero si no lo lograba en tres días, moriría. Muchos príncipes valientes perdieron su vida intentando averiguar cómo se gastaban los zapatos de las princesas. Un buen día, un soldado se presentó ante el rey y le dijo que aceptaba el reto. Esa noche, el soldado vigiló el dormitorio de las princesas que fingían dormir. La mayor de las princesas, creyendo que él se había dormido, les dijo a sus hermanas que se vistieran y se arreglaran para ir al baile. Cuando estuvieron listas, la mayor golpeó su cama. Con el golpe se abrió el piso y apareció una puerta por la que se deslizaron todas. El soldado tenía una capa que lo volvía invisible. Se la puso y las siguió. Las princesas llegaron hasta un río. Desde allí doce príncipes encantados las llevaron en sus barcas hasta un castillo donde bailaron toda la noche.',
    'Al día siguiente, el soldado se presentó ante el rey y le contó cómo era que salían las princesas y lo que hacían. El rey, como lo había prometido, le concedió la mano de su hija mayor. De esta manera, el soldado se convirtió en el heredero del soberano. Y todos vivieron muy felices.'];

document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];
document.getElementById('tar3').innerHTML = loadTxt[2];
    
enviarEventosListener("tar1"); 
enviarEventosListener("tar2"); 
enviarEventosListener("tar3"); 

document.getElementById('nt1').addEventListener('keyup',()=>{
    validMaxIngreso('nt1',parseFloat('1.5'));
});
document.getElementById('nt2').addEventListener('keyup',()=>{
    validMaxIngreso('nt2',2);
});
document.getElementById('nt3').addEventListener('keyup',()=>{
    validMaxIngreso('nt3',parseFloat('1.5'));
});

document.getElementById('nt4').addEventListener('keyup',()=>{
    validMaxIngreso('nt4',3);
});

document.getElementById('nt5').addEventListener('keyup',()=>{
    validMaxIngreso('nt5',2);
});


document.getElementById('nt1').addEventListener('keypress',()=>{
    validIngresoNum(0,9);
});
document.getElementById('nt2').addEventListener('keypress',()=>{
    validIngresoNum(0,9);
});validIngresoNum
document.getElementById('nt3').addEventListener('keypress',()=>{
    validIngresoNum(0,9);
});

document.getElementById('nt4').addEventListener('keypress',()=>{
    validIngresoNum(0,9);
});

document.getElementById('nt5').addEventListener('keypress',()=>{
    validIngresoNum(0,9);
});

document.getElementById('bt_comprobar').addEventListener('click',calcularNota);

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
var calculo =0;
function calcularNota(){
    var notas_abiertas = document.getElementsByClassName('nota-abierta');
    
    Array.from(notas_abiertas).forEach((elemento) =>{
        calculo = calculo + parseFloat(elemento.value);
    });
    $('#txtNota').html(calculo.toFixed(2)+' ');
    document.getElementById('bt_comprobar').disabled = true;   
}


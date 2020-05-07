var titulos = 'aplico';
numero_pagina(29);

var loadTxt = [ '<input id="i1" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center">ste es un día especial. <br><input id="i2" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">or eso quiero celebrarlo contigo. <br><input id="i3" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">res mi mejor amiga. <br><input id="i4" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">andra',
    '<input id="i5" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">l director del <input id="i6" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">olegio. <br>" <input id="i7" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">ermano <input id="i8" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">iguel" <br><input id="i9" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">nvita <br><input id="i10" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;"> la fiesta en honor al maestro <br><input id="i11" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">arlos <input id="i12" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">lava <br><input id="i13" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">or sus 25 años de labor docente. <br><input id="i14" type="text" name="inp_act" maxlength="1" size="1" style="border: 0; border-bottom: 1px solid grey; text-align: center;">echa: 20 de octubre'];

var respuestasCorrectas = {
    0: ['i1','E'],
    1: ['i2','P'],
    2: ['i3','E'],
    3: ['i4','S'],
    4: ['i5','E'],
    5: ['i6','C'],
    6: ['i7','H'],
    7: ['i8','M'],
    8: ['i9','I'],
    9: ['i10','a'],
    10: ['i11','C'],
    11: ['i12','A'],
    12: ['i13','P'],
    13: ['i14','F']
    

}
/* var respuestasCorrectas = [
    'E',
    'P',
    'E',
    'S',
    'E',
    'C',
    'H',
    'M',
    'I',
    'a',
    'C',
    'A',
    'P',
    'F'
] */
var respuestasIncorrectasSelected =[],respuestasCorrectasSelected=[];

loadTxt.sort(f_randomico);
document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];

document.getElementById('bt_comprobar').addEventListener('click',function(){
    calcularNota();
});

function calcularNota(){
    if(hasRespNoSelected()){
        alert('DEBE ESCRIBIR TODAS LAS LETRAS EN LOS CASILLEROS CORRESPONDIENTES');
    }else{
        var totalNota = 14;
        var input = document.getElementsByName('inp_act');
        var notaSobre = 10;
        var calculo = (notaSobre * validarRespuestasCorrectasSelItem(respuestasCorrectas,input))/totalNota;
        document.getElementById('txtNota').innerHTML = calculo.toFixed(2);
        pintarRespuestasEquivocadas();
        pintarRespuestasCorrectas();
        document.getElementById('bt_comprobar').disabled = true;
    }
    
}

var respu=0;
function validarRespuestasCorrectasSelItem(respuestasCorrectas,respuestasSeleccionadas){
    
    var numRespCorrectas=0;
    respuestasSeleccionadas.forEach( function(element) {
        if(JSON.stringify(respuestasCorrectas).indexOf(element.value)>= 0){
            respu = respu+1;
            numRespCorrectas = numRespCorrectas+1;
            respuestasCorrectasSelected.push(element.id);
        }else{
            respuestasIncorrectasSelected.push(element.id);
        }
    });
    return numRespCorrectas;
}
function pintarRespuestasEquivocadas(){
    respuestasIncorrectasSelected.forEach(function(element){
        document.getElementById(element).style.background='red';
    });
}
function pintarRespuestasCorrectas(){
    respuestasCorrectasSelected.forEach(function(element){
        document.getElementById(element).style.background='green';
    });
}
var result,cont,respNoSelected=[];
function hasRespNoSelected(){
   cont =0;
    var inputElements = document.getElementsByName('inp_act');
    inputElements.forEach(function(element){
        document.getElementById(element.id).classList.remove('parpadea');
        
    });
    inputElements.forEach(function(element){
        if(element.value == ""){
            cont = cont+1;
            respNoSelected.push(element.id);
        }
    });
    if(cont!=0){
        result = true;
    }else{
        result = false;
    }
    respNoSelected.forEach(function(element){
        document.getElementById(element).classList.add('parpadea');
        
    });
    return result;
}


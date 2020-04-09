var titulos = "aplico";
function Inicio() {

    
} 


function Cargar(){

    rnd=[];
    p=[];

   NumerosAleatorios(4,rnd,4);


p[1]='<div class="col col-md-8">'+
    '<p class="text-justify" >. En una pecera hay 28 peces rojos'+
        'y 36 peces amarillos. Cada pez'+
        'amarillo pesa __1'+
        '3'+
            'de un pez rojo.'+
        'Si un pez rojo pesa 138 gramos,'+
        '¿cuál es el peso, en kilogramos,'+
        'de todos los peces de la pecera?</p>'+
    '<p><label for="">R.</label>El peso de todos los peces es de <input type="number" class="caja1" id="a0">  kilogramos</p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i1_p103_act91.png" class="img-responsive">'+
'</div>';

p[2]='<div class="col col-md-8">'+
    '<p class="text-justify" >. Para hacer ejercicio, Fernando decide subir y bajar por las gradas del'+
        'edificio donde vive. Subió al sexto piso, bajó al segundo, subió al'+
        'quinto y se quedó en el cuarto. Entre cada piso las escaleras tienen'+
        '18 peldaños. ¿Cuántos peldaños subió y bajó Fernando? </p>'+
    '<p><label>R. </label> Recorrió <input type="number" class="caja1" id="a1"> peldaños.</p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i2_p103_act91.png" class="img-responsive">'+
'</div>';

p[3]='<div class="col col-md-8">'+
    '<p class="text-justify" >La nueva administración de un museo arqueológico en un sector'+
        'de la Costa decidió hacer un programa de autogestión. Recaudan'+
        'un promedio diario de $ 132,87. Si gastan $ 97,35 cada día y ahorran'+
        'el resto, ¿cuánto habrán ahorrado en un año?'+
        '(Nota: considera el año comercial de 360 días para simplificar cálculos).</p>'+
    '<p><label>R.</label> Al cabo de un año tendrán $<input type="number" class="caja1" id="a2"></p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i3_p103_act91.png" class="img-responsive">'+
'</div>';

p[4]='<div class="col col-md-8">'+
    '<p class="text-justify" >Para un campeonato de ecuavóley, los 6 equipos participantes confeccionan'+
        'sus uniformes en el mismo local. Cada equipo compra'+
        '5 uniformes, a $ 18 cada uno; les hacen un descuento de $ 2 por'+
        'uniforme. ¿Cuánto pagan en total por los uniformes?</p>'+
        '<p><label>R.</label> Pagan en total $<input type="number" class="caja1" id="a3"> </p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i4_p103_act91.png" class="img-responsive">'+
'</div>';

    $('.contenidopa').append(p[rnd[0]]);
    $('.contenidopb').append(p[rnd[1]]);
    $('.contenidopc').append(p[rnd[2]]);
    $('.contenidopd').append(p[rnd[3]]);

   
 };

 function NumerosAleatorios(cantidadNumeros,myArray,rango){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*rango);
    var existe = false;
        for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
            existe = true;
            break;
            }
        }
        if(!existe){
            myArray[myArray.length] = numeroAleatorio;
        }

    }
};

function NumerosP3(cantidadNumeros,myArray,num){
    
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*num);
    var existe = false;
        for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
            existe = true;
            break;
            }
        }
        if(!existe){
            myArray[myArray.length] = numeroAleatorio+"000";
        }

    }
};

function calificar(num,a,nombre){
    sim="#";
    nom=sim+nombre;
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
         $(nom).css("background-color", "red");
     }
    return nota;
};

function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseFloat(auxm)); 
};

 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    nombre="a";
    vra=[];
    al=[5.52,252,12787.2,480];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],al[i],nombre+i);
    }

    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
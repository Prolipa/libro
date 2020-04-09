var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    p1=[];
    p2=[];
    p3=[];
    a=[];
    b=[];
    rb=[0];
    rbb=[0];
    rw=[0];
    ryy=[0];
    num=[];
    
    $("#nota1").val(0);

    NumerosAleatorios(2,b,2);
    NumerosAleatorios(3,a,3);
    NumerosAleatorios(6,num,10);

    p1[1]='<li>¿Cuánto dinero gastaron en el agua? R. <input type="number" class="caja" id="a0"></li>';
    p1[2]='<li>¿Cuántos litros de agua tomó cada uno?  R. $<input type="number" class="caja" id="a1"></li>';

    $("#contenidop1").append(p1[b[0]]);
    $("#contenidop1").append(p1[b[1]]);
    
    //Pregunta 2
    

    for(i=1;i<=5;i++){
        x=0;
        p2[i]='<li><label>'+num[i]+'</label> <sup>2</sup> = <input type="number" class="cajaa" id="b'+i+'"> X <input type="number" class="cajaa" id="c'+i+'"> = <input type="number" class="cajaa" id="d'+i+'"></li>';
        $("#contenidop2a").append(p2[i]);
        x=Math.pow(num[i],2);
        rb.push(x);

    }

    for(i=1;i<=5;i++){
        p2[i]='<li><label>'+num[i]+'</label> <sup>3</sup> = <input type="number" class="cajaa" id="x'+i+'"> X <input type="number" class="cajaa" id="y'+i+'"> X <input type="number" class="cajaa" id="z'+i+'"> = <input type="number" class="cajaa" id="w'+i+'"></li>';
        $("#contenidop2b").append(p2[i]);
        y=Math.pow(num[i],3);
        rw.push(y);
    }

    //Pregunta 3
    

p3[1]='<div class="col col-md-8">'+
    '<li><p>En un huerto hay 12 filas con una docena de árboles de'+
    'manzano en cada una. Del total de árboles, 16 se secaron.</p></li>'+
    '<p>¿Cuántos árboles quedaron en buen estado?</p>'+
    '<p>R. Quedaron en buen estado <input type="number" class="caja" id="e0"> árboles de manzano.</p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i1_p132_act105.png" class="img-responsive">'+
'</div>';

p3[2]='<div class="col col-md-8">'+
    '<li><p>Graciela empaca camisetas para la venta, en grupos de 12. </p></li>'+
    '<p>Si hace 12 paquetes y cada camiseta tiene un valor de'+
        '12 dólares, ¿cuánto dinero recibirá por la venta?'+
        '</p>'+
    '<p>R.  Recibirá <input type="number" class="caja" id="e1">dólares.</p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i2_p132_act105.png" class="img-responsive">'+
'</div>';

p3[3]='<div class="col col-md-8">'+
    '<li><p>Marcelo colocó 81 m2'+
        'de césped en su patio. Si cada lado'+
        'del patio tiene la misma dimensión, ¿cuántos metros tiene'+
        'cada lado?</p></li>'+
'                                            '+
    '<p>R. Cada lado mide<input type="number" class="caja" id="e2">metros </p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i3_p132_act105.png" class="img-responsive">'+
'</div>';

    $("#contenidop3").append(p3[a[0]]);
    $("#contenidop3").append(p3[a[1]]);
    $("#contenidop3").append(p3[a[2]]);
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

function NumerosP4(cantidadNumeros,myArray,num){
    
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
            myArray[myArray.length] = numeroAleatorio+"0";
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
    debugger
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
    ra=[12,3];
    vra=[];
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<3;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=1;i<6;i++){
        calificar(vrb[i],num[i],nombre+i);
    }

    nombre="c";
    vrc=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=1;i<6;i++){
        calificar(vrc[i],num[i],nombre+i);
    }

    nombre="d";
    vrd=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=1;i<6;i++){
        calificar(vrd[i],rb[i],nombre+i);
    }

    nombre="x";
    vrz=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrz);
    }
    for(i=1;i<6;i++){
        calificar(vrz[i],num[i],nombre+i);
    }

    nombre="y";
    vry=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vry);
    }
    for(i=1;i<6;i++){
        calificar(vry[i],num[i],nombre+i);
    }

    nombre="z";
    vrz=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrz);
    }
    for(i=1;i<6;i++){
        calificar(vrz[i],num[i],nombre+i);
    }

    nombre="w";
    vrw=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrw);
    }
    for(i=1;i<6;i++){
        calificar(vrw[i],rw[i],nombre+i);
    }

    nombre="e";
    vre=[];
    re=[128,1728,9];
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<3;i++){
        calificar(vre[i],re[i],nombre+i);
    }

    

    nombre="f";
    vrf=[];
    rf=[1322,5000,6500,7600,8500,12000,15000,16500,9052.75,8050];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrf);
    }
    for(i=0;i<10;i++){
        calificar(vrf[i],rf[i],nombre+i);
    }
    nota1=$("#nota1").val();
    nota1=parseFloat(nota1);



    

    

    

    var notaFinal = ((nota*9)/50)+nota1;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal );
    $('#Calificar').attr('disabled', true);
    
    });
});



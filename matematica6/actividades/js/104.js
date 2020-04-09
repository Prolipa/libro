var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    p1=[];
    p2=[];
    p3=[];
    a=[];
    rb=[0];
    rbb=[0];
    rw=[0];
    ryy=[0];
    num=[];

    NumerosAleatorios(3,a,3);
    NumerosAleatorios(6,num,10);

    p1[1]='<li>¿Cuántas porciones se venden en total? R. <input type="number" class="caja" id="a0"></li>';
    p1[2]='<li>¿Cuánto cobran por el total de la venta? R. $<input type="number" class="caja" id="a1"></li>';
    p1[3]='<li>Si realizan dos pasteles más, ¿cuál será el nuevo total de la venta?R. $<input type="number" class="caja" id="a2"></li>';

    $("#contenidop1").append(p1[a[0]]);
    $("#contenidop1").append(p1[a[1]]);
    $("#contenidop1").append(p1[a[2]]);
    
    //Pregunta 2

    for(i=1;i<=5;i++){
        x=0;
        p2[i]='<li><label>'+num[i]+'</label> <sup>2</sup> = <input type="number" class="cajaa" id="b'+i+'"> X <input type="number" class="cajaa" id="c'+i+'"> = <input type="number" class="cajaa" id="d'+i+'"></li>';
        $("#contenidop2a").append(p2[i]);
        x=Math.pow(num[i],2);
        rb.push(x);
        rbb.push(num[i]);

    }

    for(i=1;i<=5;i++){
        p2[i]='<li><label>'+num[i]+'</label> <sup>3</sup> = <input type="number" class="cajaa" id="x'+i+'"> X <input type="number" class="cajaa" id="y'+i+'"> X <input type="number" class="cajaa" id="z'+i+'"> = <input type="number" class="cajaa" id="w'+i+'"></li>';
        $("#contenidop2b").append(p2[i]);
        y=Math.pow(num[i],3);
        rw.push(y);
        ryy.push(num[i]);
    }

    //Pregunta 3
    
p3[1]='<div class="row">'+
    '<div class="col col-md-8">'+
        '<li><p>Para la fiesta de 15 años de María José, su mamá hizo un pedido'+
                'de 5 cajas con 5 arreglos florales en cada caja, y cada'+
                'arreglo tiene 5 rosas rosadas.</p></li>'+
        '<p>¿Cuántas rosas rosadas habrá en la fiesta de María José?</p>'+
        '<p>R. En la fiesta de María José habrá <input type="number" class="caja" id="e0"> rosas rosadas.</p>'+
    '</div>'+
    '<div class="col col-md-4">'+
        '<img src="img/i2_p130_act104.png" class="img-responsive">'+
    '</div>'+
'</div>';

p3[2]='<div class="row">'+
    '<div class="col col-md-8">'+
        '<li><p>Mireya empaca melcochas en paquetes de una docena. Si'+
                'tiene 12 cajas con 12 paquetes, ¿cuántas melcochas empacó?</p></li>'+
        '<p>R. Mireya empacó <input type="number" class="caja" id="e1"> melcochas</p>'+
    '</div>'+
    '<div class="col col-md-4">'+
        '<img src="img/i3_p130_act104.png" class="img-responsive">'+
    '</div>'+
'</div>';

p3[3]='<div class="row">'+
    '<div class="col col-md-8">'+
        '<li><p>Milton compró 16 cajas con 16 baldosas en cada caja. Si las'+
                'baldosas son cuadradas y miden 16 centímetros de lado,'+
                '¿qué superficie se puede cubrir? <p>Expresa</p> la respuesta en'+
                'metros cuadrados, con aproximación a centésimas.</p></li>'+
        '<p>R. Milton puede cubrir <input type="number" class="caja" id="e2">metros cuadrados</p>'+
    '</div>'+
    '<div class="col col-md-4">'+
        '<img src="img/i4_p130_act104.png" class="img-responsive">'+
    '</div>'+
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
    ra=[46,96,160];
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
        calificar(vrb[i],rbb[i],nombre+i);
    }

    nombre="c";
    vrc=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=1;i<6;i++){
        calificar(vrc[i],rbb[i],nombre+i);
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
        calificar(vrz[i],ryy[i],nombre+i);
    }

    nombre="y";
    vry=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vry);
    }
    for(i=1;i<6;i++){
        calificar(vry[i],ryy[i],nombre+i);
    }

    nombre="z";
    vrz=[0];
    for(i=1;i<6;i++){
        cojerdatos(nombre+i,vrz);
    }
    for(i=1;i<6;i++){
        calificar(vrz[i],ryy[i],nombre+i);
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
    re=[125,1728,655];
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<3;i++){
        calificar(vre[i],re[i],nombre+i);
    }

    

    nombre="f";
    vrf=[];
    rf=[1069,1331,1494,1896,6787,2515.4,1069,1331,1494,1896,6787];
    for(i=0;i<11;i++){
        cojerdatos(nombre+i,vrf);
    }
    for(i=0;i<11;i++){
        calificar(vrf[i],rf[i],nombre+i);
    }

   



    

    

    

    var notaFinal = (nota*10)/52;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal );
    $('#Calificar').attr('disabled', true);
    
    });
});



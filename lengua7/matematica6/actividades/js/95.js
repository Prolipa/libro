var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    p1=[];
    p2=[];
    x=[];y=[];
    rnd=[];rnnd=[];

    NumerosAleatorios(2,rnd,2);
    NumerosAleatorios(3,rnnd,3);

    x[1]='<li><label class="caja1 bg-danger">Regla: Dividir para 5 (÷ 5) </label></li> '+
    '<p><div style="background-image: url(img/i2_p107_act95.png); width: 160px; height: 60px; display: inline-block; "><input type="number" class="caja" id="a0" disabled></div><span id="contenidop1a"></span></p>';
    x[2]='<li><label class="caja1 bg-info">Regla: Multiplicar por 3 (× 3) </label></li> '+
    '<p><div style="background-image: url(img/i3_p107_act95.png); width: 163px; height: 60px; display: inline-block; "><input type="number" class="caja" id="b0" disabled></div><span id="contenidop1b"></span></p>';
    $("#contenidoxa").append(x[rnd[1]]);
    $("#contenidoxb").append(x[rnd[0]]);

    y[1]='<p><div style="background-image: url(img/i4_p107_act95.png); width: 105px; height: 60px; display: inline-block; "><input type="number" class="cajap" id="c0" disabled></div><span id="contenidop2a"></span> <label for="">Patrón numérico:</label> ÷ <input type="number" class="cajai" id="c5"></p>';
    y[2]='<p><div style="background-image: url(img/i5_p107_act95.png); width: 90px; height: 55px; display: inline-block; "><input type="number" class="cajat" id="d0" disabled></div><span id="contenidop2b"></span><label for="">Patrón numérico:</label> X <input type="number" class="cajai" id="d6"></p>';
    y[3]='<p><div style="background-image: url(img/i6_p107_act95.png); width: 100px; height: 63px; display: inline-block; "><input type="number" class="cajap" id="e0" disabled></div><span id="contenidop2c"></span><label for="">Patrón numérico:</label> X <input type="number" class="cajai" id="e5"></p>';
    $("#contenidoya").append(y[rnnd[1]]);
    $("#contenidoyb").append(y[rnnd[0]]);
    $("#contenidoyc").append(y[rnnd[2]]);





    for(i=1;i<=4;i++){
        p1[i]='<img src="img/i1_p107_act95.png"><div style="background-image: url(img/i2_p107_act95.png); width: 160px; height: 60px; display: inline-block; "><input type="number" class="caja" id="a'+i+'"></div>';
        $("#contenidop1a").append(p1[i]);
    }

    for(i=1;i<=4;i++){
        p2[i]='<img src="img/i1_p107_act95.png"><div style="background-image: url(img/i3_p107_act95.png); width: 160px; height: 60px; display: inline-block; "><input type="number" class="caja" id="b'+i+'"></div>';
        $("#contenidop1b").append(p2[i]);
    }

    for(i=1;i<=4;i++){
        p2[i]='<img src="img/i1_p107_act95.png"><div style="background-image: url(img/i4_p107_act95.png); width: 105px; height: 60px; display: inline-block; "><input type="number" class="cajap" id="c'+i+'"></div>';
        $("#contenidop2a").append(p2[i]);
    }

    for(i=1;i<=5;i++){
        p2[i]='<img src="img/i1_p107_act95.png"><div style="background-image: url(img/i5_p107_act95.png); width: 90px; height: 55px; display: inline-block; "><input type="number" class="cajat" id="d'+i+'"></div>';
        $("#contenidop2b").append(p2[i]);
    }

    for(i=1;i<=4;i++){
        p2[i]='<img src="img/i1_p107_act95.png"><div style="background-image: url(img/i6_p107_act95.png); width: 100px; height: 63px; display: inline-block; "><input type="number" class="cajap" id="e'+i+'"></div>';
        $("#contenidop2c").append(p2[i]);
    }

    $("#a0").val(45000);
    $("#b0").val(32);
    $("#c0").val(128);
    $("#c1").val(64);
    $("#d0").val(5);
    $("#d1").val(15);
    $("#e0").val(40);
    $("#e1").val(80);
    $("#c1").attr("disabled","disabled");
    $("#d1").attr("disabled","disabled");
    $("#e1").attr("disabled","disabled");

    



   
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
    vra=[0];
    ra=[0,9000,1800,360,72];
    for(i=1;i<=4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=1;i<=4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[0];
    rb=[0,96,288,864,2592];
    for(i=1;i<=4;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=1;i<=4;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[0,0];
    rc=[0,0,32,16,8,2];
    for(i=2;i<=6;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=2;i<=6;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[0,0];
    rd=[0,0,45,135,405,1215,3];
    for(i=2;i<=7;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=2;i<=7;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }

    nombre="e";
    vre=[0,0];
    rc=[0,0,160,320,640,2,5];
    for(i=2;i<=6;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=2;i<=6;i++){
        calificar(vre[i],rc[i],nombre+i);
    }


    var notaFinal = (nota*10)/21;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
   rnd = []; 
   rna = []; 
   rndd = []; 
   rnddd = [];
   pu = [];
   pd = [];
   a=[];
   r=[];
   c=[];
   d=[];
   b=[];
   p1=[];
   p2a=[];
   p2b=[];
   p4=[];
   p5=[];
   p6=[];
   p7=[];
   y=[];
   nump=[180,210,294,252,270,450,1225];
   NumerosAleatorios(3,rndd,3);

   div=[2,3,4,5,6,9,10];

   $("#nota1").val(0.0);
   
   NumerosAleatorios(7,rnd,7);

    for(i=0;i<7;i++){
        p4[i]='<tr class="text-center"><td><input id="x'+i+'" value="'+nump[i]+'" disabled></td><td id="aa'+i+'" ><label class="btn bg-info active"><input type="checkbox" id="a'+i+'" value="2"></label></td><td><label class="btn bg-info active"><input type="checkbox" id="b'+i+'" value="3"></label></td><td><label class="btn bg-info active"><input type="checkbox" id="c'+i+'" value="4"></label></td><td><label class="btn bg-info active"><input type="checkbox" id="d'+i+'" value="5"></label></td><td><label class="btn bg-info active"><input type="checkbox" id="e'+i+'" value="6"></label></td><td><label class="btn bg-info active"><input type="checkbox" id="f'+i+'" value="9"></label></td><td><label class="btn bg-info active"><input type="checkbox" id="g'+i+'" value="10"></label></td></tr>';
        $('.contenidop4a').append(p4[i]);
    }

    //Pregunta 1

pu[1]='<table>'+
    '<tr>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="n0"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="n1"></td>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="n2"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="n3"></td>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="n4"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="n5"></td>'+
        '<td><img src="img/i4_p99_act87.png" class="center-block"></td>'+
    '</tr>'+
    '<tr>'+
    '<td><input type="number" class="cajaa" value="47" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" value="72" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" value="97" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="m0"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="m1"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="m2"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="m3"></td>'+
'</tr>'+
'</table>';

pu[2]='<table>'+
    '<tr>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="p0"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="p1"></td>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="p2"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="p3"></td>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="p4"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="p5"></td>'+
        '<td><img src="img/i4_p99_act87.png" class="center-block"></td>'+
    '</tr>'+
    '<tr>'+
    '<td><input type="number" class="cajaa"  value="3" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa"  value="5" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa"  value="9" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa"  value="15" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa"  value="23" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa"  value="33" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa"  value="45" disabled></td>'+
'</tr>'+
'</table>';

pu[3]='<table>'+
    '<tr>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="r0"></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" id="r1"></td>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" value="14" disabled></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" value="-10" disabled></td>'+
        '<td><img src="img/i2_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" value="14" disabled></td>'+
        '<td><img src="img/i3_p99_act87.png" class="center-block"></td>'+
        '<td><input type="number" class="cajaa" value="-10" disabled></td>'+
        '<td><img src="img/i4_p99_act87.png" class="center-block"></td>'+
    '</tr>'+
    '<tr>'+
    '<td><input type="number" class="cajaa" value="38" disabled></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="s0"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="s1"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="s2"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="s3"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="s4"></td>'+
    '<td></td>'+
    '<td><input type="number" class="cajaa" id="s5"></td>'+
'</tr>'+
'</table>';

    $('#contenidoa').append(pu[rndd[0]]);
    $('#contenidob').append(pu[rndd[1]]);
    $('#contenidoc').append(pu[rndd[2]]);

pd[1]='<div class="text-center"><input type="text" class="caja1" id="o0"></div>'+
'<div class="text-center"><input type="text" class="caja1" id="o1"><input type="text" class="caja1" id="o2"></div>'+
'<div class="text-center"><input type="text" class="caja1" value="27" disabled><input type="text" class="caja1" id="o3"><input type="text" class="caja1" value="3" disabled></div>'+
'<div class="text-center"><input type="text" class="caja1" id="o4"><input type="text" class="caja1" value="8" disabled><input type="text" class="caja1" value="4" disabled><input type="text" class="caja1" value="1" disabled></div>';

pd[2]='<div class="text-center"><input type="text" class="caja1" disabled value="65"></div>'+
'<div class="text-center"><input type="text" class="caja1" disabled value="97"><input type="text" class="caja1" disabled value="32"></div>'+
'<div class="text-center"><input type="text" class="caja1" id="w0"><input type="text" class="caja1" id="w1"><input type="text" class="caja1" disabled value="63"></div>'+
'<div class="text-center"><input type="text" class="caja1" disabled value="932"><input type="text" class="caja1" disabled value="740"><input type="text" class="caja1" id="w2"><input type="text" class="caja1" disabled value="582"></div>';

pd[3]='<div class="text-center"><input type="text" class="caja1" disabled value="12288"></div>'+
'<div class="text-center"><input type="text" class="caja1" id="l0"><input type="text" class="caja1" disabled value="128"></div>'+
'<div class="text-center"><input type="text" class="caja1" id="l1"><input type="text" class="caja1" disabled value="16"><input type="text" class="caja1" disabled value="8"></div>'+
'<div class="text-center"><input type="text" class="caja1" disabled value="3"><input type="text" class="caja1" id="l2"><input type="text" class="caja1" id="l3"><input type="text" class="caja1" id="l4"></div>';

$('#contenidoda').append(pd[rndd[0]]);
$('#contenidodb').append(pd[rndd[1]]);
$('#contenidodc').append(pd[rndd[2]]);


//pregunta 3 
y[1]='<div class="col col-md-8">'+
    '<p>En una noche se pescaron 65 800 sardinas. Si fueron empacadas'+
            'en cantidades iguales para entregarlas en 400 locales, ¿cuántas'+
            'sardinas sobraron? </p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i7_p98_act87.png" class="center-block">'+
'</div>'+
'<label>R.</label>Sobraron <input type="number" id="z0">sardinas.' ;

y[2]='<div class="col col-md-8">'+
    '<p>Los vecinos de una comunidad compraron juegos infantiles para'+
            'ubicarlos en varios parques por un costo total de $ 55 320. La empresa'+
            'acepta que el pago se haga en 12 cuotas iguales. ¿Cuál es la'+
            'cuota mensual que se debe pagar? </p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i8_p98_act87.png" class="center-block">'+
'</div>'+
'<label>R.</label> Cada mes se deben pagar <input type="number" id="z1">';

y[3]='<div class="col col-md-8">'+
    '<p>Una fábrica construye 125 450 subibajas para entregarlos a'+
            '386 clientes a nivel nacional. ¿Cuántos subibajas le corresponden'+
            'a cada cliente? </p>'+
'</div>'+
'<div class="col col-md-4">'+
    '<img src="img/i9_p98_act87.png" class="center-block">'+
'</div>'+
'<label>R.</label>A cada cliente le corresponden <input type="number" id="z2">subibajas';
$('#contenidoya').append(y[rndd[0]]);
$('#contenidoyb').append(y[rndd[1]]);
$('#contenidoyc').append(y[rndd[2]]);


     
    
    


   
   

   


   
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

function calificar(num,a,nombre){
    debugger;
    
    sim="#";
    nom=sim+nombre;
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
        $(nom).css("background-color", "red");
     }
    
};

function Divisor(rand1,vct,conte,cont,nombre) {
    for(j=1;j<=rand1;j++){
        if(rand1%j==0){
        nom=nombre+cont;
        vct.push(j);    
        var i = document.createElement("INPUT");
        i.setAttribute("type","number");
        i.setAttribute("id",nom);
        i.setAttribute("class","caja");
        $(conte).append(i);
        cont=cont+1;
        }
    }
    return cont;
};

function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseInt(auxm)); 
};



 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
     nota=0;
     
    resa=[];resb=[];resc=[];resd=[];rese=[];resf=[];resg=[];
    rpa=["#a0", "#a1", "#a2", "#a3", "#a4", "#a5"];
    rpb=["#b0", "#b1", "#b2", "#b3", "#b4", "#b5"];
    rpc=["#c0", "#c3"];
    rpd=["#d0", "#d1", "#d4", "#d5", "#d6"];
    rpe=["#e0", "#e1", "#e2", "#e3", "#e4", "#e5"];
    rpf=["#f0", "#f1", "#f3", "#f4", "#f5"];
    rpg=["#g0", "#g1", "#g4", "#g5"];
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="a";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            resa.push(nom)
        }else{
            resa.push(0);
        }
    }
    
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="b";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            resb.push(nom)
        }
        else{
            resb.push(0);
        }
    }
    
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="c";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            resc.push(nom)
        }
        else{
            resc.push(0);
        }
    }
    
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="d";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            resd.push(nom)
        }
        else{
            resd.push(0);
        }
    }
    
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="e";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            rese.push(nom)
        }
        else{
            rese.push(0);
        }
    }
    
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="f";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            resf.push(nom)
        }
        else{
            resf.push(0);
        }
    }
    
    for(i=0;i<7;i++){
        
        sim="#";
        nombre="g";
        nom=sim+nombre+i;
        if( $(nom).prop('checked') ) {
            resg.push(nom)
        }
        else{
            resg.push(0);
        }
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpa[i],resa[i],nombre+i);
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpb[i],resb[i],nombre+i);
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpc[i],resc[i],nombre+i);
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpd[i],resd[i],nombre+i);
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpe[i],rese[i],nombre+i);
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpf[i],resf[i],nombre+i);
    }
    for(i=0;i<7;i++){
        nombre="x"
    calificar(rpg[i],resg[i],nombre+i);
    }


    //Califiacar p1
    nombre="n";
    vrn=[];
    rn=[25, 25, 25, 25, 25, 25];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrn);
    }
    for(i=0;i<6;i++){
        calificar(vrn[i],rn[i],nombre+i);
    }

    nombre="m";
    vrm=[];
    rm=[122, 147, 172, 197];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrm);
    }
    for(i=0;i<7;i++){
        calificar(vrm[i],rm[i],nombre+i);
    }

    nombre="p";
    vrp=[];
    rp=[2, 4, 6, 8, 10, 12];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrp);
    }
    for(i=0;i<6;i++){
        calificar(vrp[i],rp[i],nombre+i);
    }


    nombre="r";
    vrr=[];
    rr=[14, -10, 14, -10, 14, -10];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrr);
    }
    for(i=0;i<6;i++){
        calificar(vrr[i],rr[i],nombre+i);
    }

    nombre="s";
    vrs=[];
    rs=[52, 42, 56, 46, 60, 50];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrs);
    }
    for(i=0;i<7;i++){
        calificar(vrs[i],rs[i],nombre+i);
    }

    //pregunta2

    nombre="o";
    vro=[];
    ro=[22, 23, 1, 4, 35];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vro);
    }
    for(i=0;i<10;i++){
        calificar(vro[i],ro[i],nombre+i);
    }

    nombre="l";
    vrl=[];
    rl=[96, 6, 2, 8, 1];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrl);
    }
    for(i=0;i<10;i++){
        calificar(vrl[i],rl[i],nombre+i);
    }

    nombre="w";
    vrw=[];
    rw=[192, 95, 645];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrw);
    }
    for(i=0;i<10;i++){
        calificar(vrw[i],rw[i],nombre+i);
    }

    //pregunta 3

    nombre="z";
    vrz=[];
    rz=[200, 4610, 325, 360];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrz);
    }
    for(i=0;i<4;i++){
        calificar(vrz[i],rz[i],nombre+i);
    }

    nota1=$("#nota1").val();
    nota1=parseFloat(nota1);
         

    var notaFinal = ((nota*8)/75)+nota1;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});
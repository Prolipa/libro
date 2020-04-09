var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
   rnd = []; 
   rna = []; 
   rndd = []; 
   rnddd = [];
   vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
   cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
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

   $("#nota1").val(0.0);
   $("#nota2").val(0.0);
   NumerosAleatorios(5,rnd,5);
   NumerosAleatorios(3,rndd,3);
   NumerosAleatorios(6,rnddd,6)
   NumerosAleatorios(4,rna,4)

    p1[1]='<td><input type="number" class="caja1" id="x0">;<input type="number" class="caja1" value="400" disabled>;<input type="number" class="caja1" value="401" disabled></td>';
    p1[2]='<td><input type="number" class="caja1" value="876" disabled>;<input type="number" class="caja1" value="877" disabled>;<input type="number" class="caja1" id="x1"></td>';
    p1[3]='<td><input type="number" class="caja1" value="499" disabled>;<input type="number" class="caja1" value="500" disabled>;<input type="number" class="caja1" id="x2"></td>';
    p1[4]='<td><input type="number" class="caja1" id="x3">;<input type="number" class="caja1" value="503" disabled>;<input type="number" class="caja1" value="504" disabled></td>';
    p1[5]='<td><input type="number" class="caja1" value="1056" disabled>;<input type="number" class="caja1" value="1057" disabled>;<input type="number" class="caja1" id="x4"></td>';

    $('#contenidop1a').append(p1[rnd[0]]);  
    $('#contenidop1b').append(p1[rnd[1]]);  
    $('#contenidop1c').append(p1[rnd[2]]);  
    $('#contenidop1d').append(p1[rnd[3]]);  
    $('#contenidop1e').append(p1[rnd[4]]);  

    p2a[1]='<div class="col col-md-4">'+
        '<input type="number"class="caja" value="50" disabled><input type="number" class="caja" id="a0">'+
        '<input type="number"class="caja" id="a1"><input type="number" class="caja" id="a2">'+
        '<input type="number"class="caja" id="a3"><input type="number" class="caja" id="a4">'+
        '<input type="number"class="caja" id="a5">'+
        '<p>Factores primos: <input type="number" class="caja1" id="a6"> X <input type="number" class="caja1" id="a7"> X <input type="number" class="caja1" id="a8"></p>'+
    '</div>';
    p2a[2]='<div class="col col-md-4">'+
        '<input type="number"class="caja" value="150" disabled><input type="number" class="caja" id="b0" >'+
        '<input type="number"class="caja" id="b1"><input type="number" class="caja" id="b2" >'+
        '<input type="number"class="caja" id="b3"><input type="number" class="caja" id="b4" >'+
        '<input type="number"class="caja" id="b5"><input type="number" class="caja" id="b6" >'+
        '<input type="number"class="caja" id="b7">'+
        '<p>Factores primos: <input type="number" class="caja1" id="b8"> X <input type="number" class="caja1" id="b9"> X <input type="number" class="caja1" id="b10"> X <input type="number" class="caja1" id="b11"></p> '+
    '</div>';
    p2a[3]='<div class="col col-md-4">'+
        '<input type="number"class="caja" value="280" disabled><input type="number" class="caja" id="c0">'+
        '<input type="number"class="caja" id="c1"><input type="number" class="caja" id="c2">'+
        '<input type="number"class="caja" id="c3"><input type="number" class="caja" id="c4">'+
        '<input type="number"class="caja" id="c5"><input type="number" class="caja" id="c6">'+
        '<input type="number"class="caja" id="c7"><input type="number" class="caja" id="c8">'+
        '<input type="number"class="caja" id="c9">'+
        '<p>Factores primos: <input type="number" class="caja1" id="c10"> X <input type="number" class="caja1" id="c11"> X <input type="number" class="caja1" id="c12"> X <input type="number" class="caja1" id="c13"> X <input type="number" class="caja1" id="c14"></p>'+
    '</div>';

    p2b[1]='<div class="col col-md-4">'+
        '<input type="number"class="caja" value="120" disabled><input type="number" class="caja" id="d0">'+
        '<input type="number"class="caja" id="d1"><input type="number" class="caja" id="d2">'+
        '<input type="number"class="caja" id="d3"><input type="number" class="caja" id="d4">'+
        '<input type="number"class="caja" id="d5"><input type="number" class="caja" id="d6">'+
        '<input type="number"class="caja" id="d7"><input type="number" class="caja" id="d8">'+
        '<input type="number"class="caja" id="d9">'+
        '<p>Factores primos: <input type="number" class="caja1" id="d10"> X <input type="number" class="caja1" id="d11"> X <input type="number" class="caja1" id="d12"> X <input type="number" class="caja1" id="d13"> X <input type="number" class="caja1" id="d14"></p>'+
    '</div>';
    p2b[2]='<div class="col col-md-4">'+
        '<input type="number"class="caja" value="36" disabled><input type="number" class="caja" id="e0" >'+
        '<input type="number"class="caja" id="e1"><input type="number" class="caja" id="e2" >'+
        '<input type="number"class="caja" id="e3"><input type="number" class="caja" id="e4" >'+
        '<input type="number"class="caja" id="e5"><input type="number" class="caja" id="e6" >'+
        '<input type="number"class="caja" id="e7">'+
        '<p>Factores primos: <input type="number" class="caja1" id="e8"> X <input type="number" class="caja1" id="e9"> X <input type="number" class="caja1" id="e10"> X <input type="number" class="caja1" id="e11"></p> '+
    '</div>';
    p2b[3]='<div class="col col-md-4">'+
        '<input type="number"class="caja" value="495" disabled><input type="number" class="caja" id="f0">'+
        '<input type="number"class="caja" id="f1"><input type="number" class="caja" id="f2">'+
        '<input type="number"class="caja" id="f3"><input type="number" class="caja" id="f4">'+
        '<input type="number"class="caja" id="f5"><input type="number" class="caja" id="f6">'+
        '<input type="number"class="caja" id="f7">'+
        '<p><input type="number" class="caja1" id="f8"> X <input type="number" class="caja1" id="f9"> X <input type="number" class="caja1" id="f10"> X <input type="number" class="caja1" id="f11"></p>'+
    '</div>';

    $('#contenido2a1').append(p2a[rndd[0]]);  
    $('#contenido2a2').append(p2a[rndd[1]]);  
    $('#contenido2a3').append(p2a[rndd[2]]);  
    $('#contenido2b1').append(p2b[rndd[0]]);  
    $('#contenido2b2').append(p2b[rndd[1]]); 
    $('#contenido2b3').append(p2b[rndd[2]]); 

        p4[1]='<li><label for="">2 × 3 × 5 </label> <input type="number" class="caja1" id="g0"></li>';
        p4[2]='<li><label for="">2 × 2 × 2 × 3 × 7</label> <input type="number" class="caja1" id="g1"></li>';
        p4[3]='<li><label for="">2 × 2 × 5 × 5</label> <input type="number" class="caja1" id="g2"></li>';
        p4[4]='<li><label for="">2 × 5 × 7 × 7</label> <input type="number" class="caja1" id="g3"></li>';
        p4[5]='<li><label for="">3 × 5 × 5 × 7 </label> <input type="number" class="caja1" id="g4"></li>';
        p4[6]='<li><label for="">5 × 5 × 5 × 7</label> <input type="number" class="caja1" id="g5"></li>';

    $('#contenido4a1').append(p4[rnddd[0]]);  
    $('#contenido4a2').append(p4[rnddd[1]]);  
    $('#contenido4a3').append(p4[rnddd[2]]);  
    $('#contenido4a4').append(p4[rnddd[3]]);  
    $('#contenido4a5').append(p4[rnddd[4]]); 
    $('#contenido4a6').append(p4[rnddd[5]]); 

        p5[1]='<li>El cuadrado es la figura geométrica que tiene cuatro <input type="text"> iguales.</li>';
        p5[2]='<li>Los rectángulos son las figuras geométricas que tienen <input type="text"> pares de lados <input type="text"></li>';
        p5[3]='<li>Los triángulos se clasifican en <input type="text"> según sus lados.</li>';
        p5[4]='<li>Los trapecios tienen dos lados opuestos <input type="text"> desiguales.</li>';


    $('#contenido5a1').append(p5[rna[0]]);  
    $('#contenido5a2').append(p5[rna[1]]);  
    $('#contenido5a3').append(p5[rna[2]]);  
    $('#contenido5a4').append(p5[rna[3]]);
    
     p6[1]='<li>El número A es mayor que 1 y menor que 3. <input type="number" class="caja1" id="h0"></li>';
     p6[2]='<li>El número B se encuentra entre el 10 y el 12. <input type="number" class="caja1" id="h1"></li>';
     p6[3]='<li>El número C es antecesor de 7 <input type="number" class="caja1" id="h2"></li>';
     p6[4]='<li>El número D es sucesor de 14. <input type="number" class="caja1" id="h3"></li>';

    $('#contenido6a1').append(p6[rna[0]]);  
    $('#contenido6a2').append(p6[rna[1]]);  
    $('#contenido6a3').append(p6[rna[2]]);  
    $('#contenido6a4').append(p6[rna[3]]);

p7[1]='<td><img src="img/i2_p57_act87.png" class="center-block"></td>'+
'<td><p>La medida de cada lado del cuadrado es <input type="number"></p><p>El perímetro es <input type="number"></p></td>';

p7[2]='<td><img src="img/i3_p57_act87.png" class="center-block"></td>'+
'<td><p>La medida del largo es <input type="number"> y el ancho</p><p>es de <input type="number"></p><p>El perímetro es <input type="number"></p></td>';

p7[3]='<td><img src="img/i4_p57_act87.png" class="center-block"></td>'+
'<td><p>El lado de la base mide <input type="number"> y los dos lados'+
'</p><p>miden <input type="number" name="" id=""></p> <p>El perímetro es <input type="number"></p></td>';

p7[4]='<td><img src="img/i5_p57_act87.png" class="center-block"></td>'+
'<td><p>La medida de cada lado es de <input type="number"></p> <p>El perímetro es <input type="number"></p></td>';

    $('#contenido7a1').append(p7[rna[0]]);  
    $('#contenido7a2').append(p7[rna[1]]);  
    $('#contenido7a3').append(p7[rna[2]]);  
    $('#contenido7a4').append(p7[rna[3]]);



   
   

   


   
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
    notaa=0;
    p1=0.0;
    p2=0.0;
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[2,25,5,5,5,1,2,5,5];
    rb=[2,75,3,25,5,5,5,1,2,3,5,5];
    rc=[2,140,2,70,2,35,5,7,7,1,2,2,2,5,7];
    rd=[2,60,2,30,2,15,3,5,5,1,2,2,2,3,5];
    re=[2,18,2,9,3,3,3,1,2,2,3,3];
    rf=[3,165,3,55,5,11,11,1,3,3,5,11];
    rg=[30,168,100,490,525,875];
    rh=[2,11,6,15];
    rx=[399,878,501,502,1058];



    nombre="x";
    vrx=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrx);
    }
    for(i=0;i<5;i++){
        nota1=calificar(vrx[i],rx[i],nombre+i);
    }

    nombre="a";
    vra=[];
    for(i=0;i<9;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<9;i++){
        nota1=calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<12;i++){
        nota2=calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    for(i=0;i<15;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<15 ;i++){
        nota3=calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[];
    for(i=0;i<15;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<15;i++){
        nota4=calificar(vrd[i],rd[i],nombre+i);
    }

    nombre="e";
    vre=[];
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<12;i++){
        nota5=calificar(vre[i],re[i],nombre+i);
    }

    nombre="f";
    vrf=[];
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vrf);
    }
    for(i=0;i<12;i++){
        nota6=calificar(vrf[i],rf[i],nombre+i);
    }

    nombre="g";
    vrg=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrg);
    }
    for(i=0;i<6;i++){
        nota7=calificar(vrg[i],rg[i],nombre+i);
    }

    nombre="h";
    vrh=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrh);
    }
    for(i=0;i<4;i++){
        nota8=calificar(vrh[i],rh[i],nombre+i);
    }

    nota1=$("#nota1").val();
    nota1=parseFloat(nota1);
    nota2=$("#nota2").val();
    nota2=parseFloat(nota2);
    notaa=nota1+nota2;


    


    

    var notaFinal = ((nota*8)/90)+notaa;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});
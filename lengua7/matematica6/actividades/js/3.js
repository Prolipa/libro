var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
   rnd = []; 
   rndd = []; 
   vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
   cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
   a=[];
   b=[];
   c=[];
   d=[];

   NumerosAleatorios(4,rnd,4);
   NumerosAleatorios(8,rndd,8);

    a[1]='<p><label for="">D <sub>9</sub></label> =  <span id="contenido1"></span></p>'
    a[2]='<p><label for="">D <sub>12</sub></label> = <span id="contenido2"></span></p>'
    a[3]='<p><label for="">D <sub>72</sub></label> = <span id="contenido3"></span></p>'
    a[4]='<p><label for="">D <sub>90</sub></label> = <span id="contenido4"></span></p>'
    a[5]='<p><label for="">D <sub>28</sub></label> = <span id="contenido5"></span></p>'
    a[6]='<p><label for="">D <sub>50</sub></label> = <span id="contenido6"></span></p>'
    a[7]='<p><label for="">D <sub>20</sub></label> = <span id="contenido7"></span></p>'
    a[8]='<p><label for="">D <sub>30</sub></label> = <span id="contenido8"></span></p>'

    $('#contenidoa').append(a[rndd[0]],a[rndd[1]],a[rndd[2]],a[rndd[3]]);
    $('#contenidob').append(a[rndd[4]],a[rndd[5]],a[rndd[6]],a[rndd[7]]);
    
    contenido="#contenido1"; 
    cont1=Divisor(9,vct1,contenido,cont1,"a");

    contenido="#contenido2"; 
    cont2=Divisor(12,vct2,contenido,cont2,"b");

    contenido="#contenido3"; 
    cont3=Divisor(72,vct3,contenido,cont3,"c");

    contenido="#contenido4"; 
    cont4=Divisor(90,vct4,contenido,cont4,"d");

    contenido="#contenido5"; 
    cont5=Divisor(28,vct5,contenido,cont5,"e");

    contenido="#contenido6"; 
    cont6=Divisor(50,vct6,contenido,cont6,"f");

    contenido="#contenido7"; 
    cont7=Divisor(20,vct7,contenido,cont7,"g");

    contenido="#contenido8"; 
    cont8=Divisor(30,vct8,contenido,cont8,"h");

    c[1]='<p>Divisores comunes de 9 y 12: <input type="number" class="caja" id="i0">;<input type="number" class="caja" id="i1"> </p>'
    c[2]='<p>Divisores comunes de 72 y 90: <input type="number" class="caja" id="j0">;<input type="number" class="caja" id="j1">;<input type="number" class="caja" id="j2">;<input type="number" class="caja" id="j3">;<input type="number" class="caja" id="j4">;<input type="number" class="caja" id="j5"> </p>'
    c[3]='<p>Divisores comunes de 28 y 50: <input type="number" class="caja" id="k0">;<input type="number" class="caja" id="k1"></p>'
    c[4]='<p>Divisores comunes de 20 y 30: <input type="number" class="caja" id="l0">;<input type="number" class="caja" id="l1">;<input type="number" class="caja" id="l2">;<input type="number" class="caja" id="l3"></p>'
    $('#contenidoc').append(c[rnd[0]],c[rnd[1]],c[rnd[2]],c[rnd[3]]);

    d[1]='<p>MCD de 9 y 12 = <input type="number" class="caja" id="m0"></p>'
    d[2]='<p>MCD de 72 y 90 = <input type="number" class="caja" id="m1"></p>'
    d[3]='<p>MCD de 28 y 50 = <input type="number" class="caja" id="m2"></p>'
    d[4]='<p>MCD de 20 y 30 = <input type="number" class="caja" id="m3"></p>'

    $('#contenidod').append(d[rnd[0]],d[rnd[1]],d[rnd[2]],d[rnd[3]]);






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
    nota = 0;
    vr1=[];vr2=[];vr3=[];vr4=[];vr5=[];vr6=[];vr7=[];vr8=[];vr9=[];vr10=[];vr11=[];vr12=[];vr13=[];

        nombre="a";
        for(i=0;i<cont1;i++){
            cojerdatos(nombre+i,vr1);
        }
        for(i=0;i<cont1;i++){
            calificar(vct1[i],vr1[i],nombre+i);
        }
        nombre="b";
        for(i=0;i<cont2;i++){
            cojerdatos(nombre+i,vr2);
        }
        for(i=0;i<cont2;i++){
            calificar(vct2[i],vr2[i],nombre+i);
        }
        nombre="c";
        for(i=0;i<cont3;i++){
            cojerdatos(nombre+i,vr3);
        }
        for(i=0;i<cont3;i++){
            calificar(vct3[i],vr3[i],nombre+i);
        }
        nombre="d";
        for(i=0;i<cont4;i++){
            cojerdatos(nombre+i,vr4);
        }
        for(i=0;i<cont4;i++){
            calificar(vct4[i],vr4[i],nombre+i);
        }
        nombre="e";
        for(i=0;i<cont5;i++){
            cojerdatos(nombre+i,vr5);
        }
        for(i=0;i<cont5;i++){
            calificar(vct5[i],vr5[i],nombre+i);
        }
        nombre="f";
        for(i=0;i<cont6;i++){
            cojerdatos(nombre+i,vr6);
        }
        for(i=0;i<cont6;i++){
            calificar(vct6[i],vr6[i],nombre+i);
        }
        nombre="g";
        for(i=0;i<cont7;i++){
            cojerdatos(nombre+i,vr7);
        }
        for(i=0;i<cont7;i++){
            calificar(vct7[i],vr7[i],nombre+i);
        }
        nombre="h";
        for(i=0;i<cont8;i++){
            cojerdatos(nombre+i,vr8);
        }
        for(i=0;i<cont8;i++){
            calificar(vct8[i],vr8[i],nombre+i);
        }

        nombre="i";
        vct9=[1,3];
        for(i=0;i<2;i++){
            cojerdatos(nombre+i,vr9);
        }
        for(i=0;i<2;i++){
            calificar(vct9[i],vr9[i],nombre+i);
        }

        nombre="j";
        vct10=[1,2,3,6,9,18];
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vr10);
        }
        for(i=0;i<6;i++){
            calificar(vct10[i],vr10[i],nombre+i);
        }

        nombre="k";
        vct11=[1,2];
        for(i=0;i<2;i++){
            cojerdatos(nombre+i,vr11);
        }
        for(i=0;i<2;i++){
            calificar(vct11[i],vr11[i],nombre+i);
        }

        nombre="l";
        vct12=[1,2,5,10];
        for(i=0;i<4;i++){
            cojerdatos(nombre+i,vr12);
        }
        for(i=0;i<4;i++){
            calificar(vct12[i],vr12[i],nombre+i);
        }

        nombre="m";
        vct13=[3,18,2,10];
        for(i=0;i<4;i++){
            cojerdatos(nombre+i,vr13);
        }
        for(i=0;i<4;i++){
            calificar(vct13[i],vr13[i],nombre+i);
        }





    var notaFinal = (nota*10)/77;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
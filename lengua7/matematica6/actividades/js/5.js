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
 
     a[1]='<p><label for="">D <sub>3</sub></label> =  <span id="contenido1"></span></p>'
     a[2]='<p><label for="">D <sub>4</sub></label> = <span id="contenido2"></span></p>'
     a[3]='<p><label for="">D <sub>5</sub></label> = <span id="contenido3"></span></p>'
     a[4]='<p><label for="">D <sub>6</sub></label> = <span id="contenido4"></span></p>'

     a[5]='<p><label for="">D <sub>7</sub></label> = <span id="contenido5"></span></p>'
     a[6]='<p><label for="">D <sub>8</sub></label> = <span id="contenido6"></span></p>'
     a[7]='<p><label for="">D <sub>9</sub></label> = <span id="contenido7"></span></p>'
     a[8]='<p><label for="">D <sub>10</sub></label> = <span id="contenido8"></span></p>'
     
    $('#contenidoa').append(a[rndd[0]],a[rndd[1]],a[rndd[2]],a[rndd[3]]);
    $('#contenidob').append(a[rndd[4]],a[rndd[5]],a[rndd[6]],a[rndd[7]]);
    contenido="#contenido1"; 
    cont1=Multiplos(3,vct1,contenido,cont1,"a");

    contenido="#contenido2"; 
    cont2=Multiplos(4,vct2,contenido,cont2,"b");

    contenido="#contenido3"; 
    cont3=Multiplos(5,vct2,contenido,cont3,"c");

    contenido="#contenido4"; 
    cont4=Multiplos(6,vct4,contenido,cont4,"d");

    contenido="#contenido5"; 
    cont5=Multiplos(7,vct5,contenido,cont5,"e");
    
    contenido="#contenido6"; 
    cont6=Multiplos(8,vct6,contenido,cont6,"f");
    
    contenido="#contenido7"; 
    cont7=Multiplos(9,vct7,contenido,cont7,"g");

    contenido="#contenido8"; 
    cont8=Multiplos(10,vct8,contenido,cont8,"h");

    b[1]='<p><label for="">M <sub>3y4</sub></label> = {<input type="number" class="caja1" id="i0"><input type="number" class="caja1" id="i1">}</p>';
    b[2]='<p><label for="">M <sub>5y6</sub></label> = {<input type="number" class="caja1" id="i2">}</p>';
    b[3]='<p><label for="">M <sub>6y8</sub></label> = {<input type="number" class="caja1" id="i3">}</p>';
    b[4]='<p><label for="">M <sub>4y9</sub></label> = {<input type="number" class="caja1" id="i4">}</p>';
    $('#contenidoc').append(b[rnd[0]],b[rnd[1]]);
    $('#contenidod').append(b[rnd[2]],b[rnd[3]]);


    c[1]='<p>MCM de 3 y 4 = <input type="number" id="j0"></p>';
    c[2]='<p>MCM de 5 y 6 = <input type="number" id="j1"></p>';
    c[3]='<p>MCM de 6 y 8 = <input type="number" id="j2"></p>';
    c[4]='<p>MCM de 4,9 y 6 = <input type="number" id="j3"></p>';
    $('#contenidoe').append(c[rnd[0]],c[rnd[1]],c[rnd[2]],c[rnd[3]]);



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

function Multiplos(rand1,vct,conte,cont,nombre) {
    num=rand1;
    for(j=1;j<=9;j++){
        aux=rand1;
        num=num+aux;
        nom=nombre+cont;
        vct.push(num);    
        var i = document.createElement("INPUT");
        i.setAttribute("type","number");
        i.setAttribute("id",nom);
        i.setAttribute("class","caja");
        $(conte).append(i);
        cont=cont+1;
    }
    return cont;
};

function cojerdatos(nombre,vct){
    sim="#";
    auxm=0;
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
        vct9=[12,24,30,36,24];
        for(i=0;i<5;i++){
            cojerdatos(nombre+i,vr9);
        }
        for(i=0;i<5;i++){
            calificar(vct9[i],vr9[i],nombre+i);
        }

        nombre="j";
        vct10=[12,30,24,36];
        for(i=0;i<4;i++){
            cojerdatos(nombre+i,vr10);
        }
        for(i=0;i<4;i++){
            calificar(vct10[i],vr10[i],nombre+i);
        }




    var notaFinal = (nota*10)/81;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
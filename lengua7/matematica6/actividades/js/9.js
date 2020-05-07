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

   a[1]='<input type="text" class="caja" value="563" disabled><div class="bg-info" style="background-image: url(img/i1_p68_act9.png); width: 50px; height: 50px; text-align: right; display:inline-block;"><input type="number" class="" style="width:80%; margin-top: 10px;" id="a0"></div>'+
   '<p><input type="number"  class="caja" id="a1">    <input type="number" class="caja" id="a2"></p>';
   
   a[2]='<input type="text" class="caja" value="700" disabled><div class="bg-info" style="background-image: url(img/i1_p68_act9.png); width: 50px; height: 50px; text-align: right; display:inline-block;"><input type="number" class="" style="width:80%; margin-top: 10px;" id="a3"></div>'+
   '<p><input type="number"  class="caja" id="a4">    <input type="number" class="caja" id="a5"></p>',

   a[3]='<input type="text" class="caja" value="124" disabled><div class="bg-info" style="background-image: url(img/i1_p68_act9.png); width: 50px; height: 50px; text-align: right; display:inline-block;"><input type="number" class="" style="width:80%; margin-top: 10px;" id="a6"></div>'+
   '<p><input type="number"  class="caja" id="a7">    <input type="number" class="caja" id="a8"></p>';

   a[4]='<input type="text" class="caja" value="376" disabled><div class="bg-info" style="background-image: url(img/i1_p68_act9.png); width: 50px; height: 50px; text-align: right; display:inline-block;"><input type="number" class="" style="width:80%; margin-top: 10px;" id="a9"></div>'+
   '<p><input type="number"  class="caja" id="a10">    <input type="number" class="caja" id="a11"></p>';


    
    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);
    $('#contenidod').append(a[rnd[3]]);

    b[1]='<li><p>563 ÷ 30 → Cociente: <input type="number" class="caja1" id="b0">; Residuo: <input type="number" class="caja1" id="b1"> <select name="" id="b2"><option value="0">Seleccione:</option> <option value="1">no es exacta </option> <option value="2">sí es exacta</option> </select></p></li>';
    b[2]='<li><p>124 ÷ 12 → Cociente: <input type="number" class="caja1" id="b3">; Residuo: <input type="number" class="caja1" id="b4"> <select name="" id="b5"><option value="0">Seleccione:</option> <option value="1">no es exacta </option> <option value="2">sí es exacta</option> </select></p></li>                        ';
    b[3]='<li><p>700 ÷ 28 → Cociente: <input type="number" class="caja1" id="b6">; Residuo: <input type="number" class="caja1" id="b7"> <select name="" id="b8"><option value="0">Seleccione:</option> <option value="1">no es exacta </option> <option value="2">sí es exacta</option> </select></p></li>                        ';
    b[4]='<li><p>376 ÷ 15 → Cociente: <input type="number" class="caja1" id="b9">; Residuo: <input type="number" class="caja1" id="b10"> <select name="" id="b11"><option value="0">Seleccione:</option> <option value="1">no es exacta </option> <option value="2">sí es exacta</option> </select></p></li> ';
    
    $('#contenidoe').append(b[rnd[0]]);
    $('#contenidof').append(b[rnd[1]]);
    $('#contenidog').append(b[rnd[2]]);
    $('#contenidoh').append(b[rnd[3]]);






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
        vct1=[30,23,18,12,4,10,28,0,25,15,1,25];
        for(i=0;i<12;i++){
            cojerdatos(nombre+i,vr1);
        }
        for(i=0;i<12;i++){
            calificar(vct1[i],vr1[i],nombre+i);
        }

        nombre="b";
        vct2=[18,23,1,10,4,1,25,0,2,18,1,1];
        for(i=0;i<12;i++){
            cojerdatos(nombre+i,vr2);
        }
        for(i=0;i<12;i++){
            calificar(vct2[i],vr2[i],nombre+i);
        }



    var notaFinal = (nota*10)/24;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
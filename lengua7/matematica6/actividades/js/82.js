var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
   rnd = []; 
   rndd = []; 
   vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
   cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
   a=[];
   r=[];
   c=[];
   d=[];
   b=[];

   NumerosAleatorios(4,rnd,4);

a[1]='<p>En un parque de forma rectangular se traza'+
   'una diagonal para dividir los sectores de los'+
   'juegos infantiles y de los juegos acuáticos.'+
   'Si el parque mide 200 metros de largo por'+
   '100 metros de ancho, ¿cuál es el área de los'+
   'juegos acuáticos?</p>'+
'<label >R. </label><input type="number" class="caja" id="a0"> metros cuadrados.';
a[2]='<p>Para entregar pedazos de pizza, Julio recorta'+
   'pedazos de cartón de forma triangular con'+
   'base 20 centímetros y altura 30 centímetros.'+
   'Si tiene un pedido de 50 pizzas, ¿cuál es el área'+
   'de cartón que Julio necesita?</p>'+
'<label >R. </label><input type="number" class="caja" id="a1"> centímetros cuadrados.';
a[3]='<p>María construye mesas de vidrio triangulares'+
   'que miden 4 metros de base por 2 metros de altura,'+
   'ella debe entregar 15 mesas, ¿qué cantidad'+
   'de vidrio necesita María?</p>'+
'<label >R. </label><input type="number" class="caja" id="a2"> metros cuadrados.';
a[4]='<p>Se colocan baldosas en forma de triángulos'+
   'rectángulos que miden 50 centímetros de base'+
   'por 40 centímetros de altura. Si se cubre un piso'+
   'con 80 baldosas, ¿qué área del piso se cubrió?</p>'+
'<label >R. </label><input type="number" class="caja" id="a3"> centímetros cuadrados.';

    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);
    $('#contenidod').append(a[rnd[3]]);

   
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
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[10000,15000,60,80000];
    nombre="a";
    vra=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
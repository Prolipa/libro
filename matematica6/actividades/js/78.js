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

a[1]='<p class="bg-info">Un lote de terreno con forma de romboide'+
   'mide 32 metros de largo y 15 metros del frente'+
   'a la calle. Si se va a realizar el cerramiento,'+
   '¿cuál es el borde de terreno que se cierra?</p>'+
'<label for="">R.</label><input type="number" class="caja" id="a0"> metros';
a[2]='<p class="bg-danger">Se cerca un corral de forma cuadrada con'+
   'madera para un gallinero. Si el lado del corral'+
   'mide 3 metros, y se pinta el borde superior'+
   'del corral en línea recta, ¿qué distancia'+
   'tiene el borde pintado?</p>'+
'<label for="">R.</label><input type="number" class="caja" id="a1"> metros';
a[3]='<p class="bg-warning">Se construye una cometa con forma de rombo.'+
   'Para formarla, el hilo de chilla mide 20 centímetros'+
   'de un extremo al otro entre los carrizos. Si el'+
   'hilo da dos vueltas, ¿cuánto hilo necesita?</p>'+
'<label for="">R.</label><input type="number" class="caja" id="a2"> metros';
a[4]='<p class="bg-success">. En una urbanización existe una manzana en forma'+
   'de trapecio rectangular cuyas medidas son:'+
   '100, 60, 70 y 95 metros. Si se pinta el borde de las'+
   'veredas de color amarillo, ¿qué longitud se pintó?</p>'+
'<label for="">R.</label><input type="number" class="caja" id="a3"> metros';
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
    ra=[94,12,160,325];
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
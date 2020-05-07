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

   NumerosAleatorios(3,rnd,3);
   $("#nota1").val(0.0);


a[1]='<p style="text-align:justify">Tiene dos bases circulares paralelas congruentes y superficie'+
   'lateral curva.'+
   'Se desplaza sobre las bases planas circulares y rueda sobre la'+
   'superficie curva</p>';
a[2]='<p style="text-align:justify">Los puntos tienen la misma distancia de un punto central.'+
   'Los contornos y secciones son círculos.'+
   'Solo rueda porque no tiene superficies planas.</p>';
a[3]='<p style="text-align:justify">Tiene una sola base circular, una superficie lateral curva, un'+
   'vértice o cúspide.'+
   'Se desplaza sobre la base circular plana y rueda sobre la'+
   'superficie curva.</p>';

    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);
    NumerosAleatorios(4,rndd,4);

b[1]='<p>Un jardín tiene un camino a su alrededor. Si se'+
    'coloca un cerramiento de malla a los dos lados'+
    'del camino, ¿cuántos metros de malla se usaron?</p>'+
'<label>R.</label> <input type="number" class="caja1" id="a0"> metros.'+
'<img src="img/i2_p91_act83.png" alt="">';

b[2]='<p>Calcula el área de cada espacio del mismo color,'+
    'compuesto por triángulos equiláteros sabiendo'+
    'que un triángulo tiene 55 centímetros'+
    'cuadrados de área.</p>'+
'<div class="col col-md-4">'+
'<img src="img/i3_p91_act83.png" alt="">'+
'</div>'+
'<div class="col col-md-1"></div>'+
'<div class="col col-md-7">'+
'<p>Verde:<input type="number" class="caja1" id="a1"> cm <sup>2</sup> </p>'+
'<p>Rojo:<input type="number" class="caja1" id="a2"> cm <sup>2</sup> </p>'+
'<p>Lila:<input type="number" class="caja1" id="a3"> cm <sup>2</sup> </p>'+
'<p>Azul:<input type="number" class="caja1" id="a4"> cm <sup>2</sup> </p>'+
'<p>Celeste:<input type="number" class="caja1" id="a5"> cm <sup>2</sup> </p>'+
'<p>Amarillo:<input type="number" class="caja1" id="a6"> cm <sup>2</sup> </p>'+
'</div>';

b[3]='<p>Una caja de vidrio mide 24 centímetros de largo,'+
    '10 centímetros de ancho y 10 centímetros'+
    'de alto y se necesita colocar un borde en los'+
    'filos. Si se tiene 45 cajas, ¿qué cantidad de filo'+
    'se necesita?</p>'+
'<label>R.</label> <input type="number" class="caja1" id="a7"> metros.'+
'<img src="img/i4_p91_act83.png" alt="">';

b[4]='<p>Los triángulos miden 20 centímetros de base y'+
    '15 centímetros de altura, y los cuadrados tienen'+
    '12 centímetros de lado. ¿Cuál es el área de 21'+
    'triángulos y de 15 cuadrados?</p>'+
'<div class="col col-md-4">'+
'<img src="img/i5_p91_act83.png" alt="">'+
'</div>'+
'<div class="col col-md-1"></div>'+
'<div class="col col-md-7">'+
'<p>Triángulos: </p>'+
'<input type="number" class="caja1" id="a8"> cm <sup>2</sup>'+
'<p>Cuadrados:</p>'+
'<input type="number" class="caja1" id="a9"> cm <sup>2</sup>'+
'</div>';

    $('#contenido1').append(b[rndd[0]]);
    $('#contenido2').append(b[rndd[1]]);
    $('#contenido3').append(b[rndd[2]]);
    $('#contenido4').append(b[rndd[3]]);



   
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
    nota = 0.0;
    p2 = 0.0;
    p1 = 0.0;
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[122,495,275,385,272,330,220,7920,3150,2160];
    nombre="a";
    vra=[];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<10;i++){
        calificar(vra[i],ra[i],nombre+i);
    }
    p2=nota/2;
    p2=parseFloat(p2)
    p1=$("#nota1").val();
    p1=parseFloat(p1);

    var notaFinal = p2+p1;
    notaFinal = notaFinal.toFixed(2);
    $("#txtNota").text(+notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});
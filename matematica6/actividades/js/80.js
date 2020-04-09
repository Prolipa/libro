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

a[1]='<p>Por el borde de una piscina triangular se va a'+
   'colocar cerámica, las medidas son de 3 metros,'+
   '5 metros y 7 metros, si se colocan dos filas de'+
   'cerámica, ¿cuál es la longitud cubierta con cerámica'+
   'en la piscina? </p>'+
'<label for="">R.</label> <input type="number" class="caja1" id="a0"> metros.';
a[2]='<p>Un carpintero vende mesas triangulares con'+
   'dos lados iguales, la atracción es que en el'+
   'borde se colocaron espejos, las medidas son:'+
   '3 metros en los lados iguales y otro lado que'+
   'mide 2 metros, si tiene a la venta 5 mesas,'+
   '¿qué longitud decoró en todas las mesas con'+
   'los espejos?</p>'+
   '<img src="img/i1_p85_act80.png" alt="">'+
'<label for="">R.</label> <input type="number" class="caja1" id="a1"> metros.';
a[3]='<p>Fanny decora el borde de cajas triangulares'+
   'con cinta. Si sus tres lados son iguales y miden'+
   '12 centímetros, ¿cuánta cinta necesita para decorar'+
   '30 cajas? </p>'+
'<label for="">R.</label> <input type="number" class="caja1" id="a2"> metros.';
a[4]='<p>Un sastre confecciona pañuelos triangulares'+
   'con lados iguales para la presentación de un'+
   'baile típico de la Costa. Los pañuelos miden 15'+
   'centímetros por lado y tienen un filo de cinta'+
   'blanca. Si confecciona 50 pañuelos, ¿cuál es la'+
   'longitud de cinta blanca que utilizó en todos los'+
   'pañuelos?</p>'+
   '<img src="img/i2_p85_act80.png" alt="">'+
'<label for="">R.</label> <input type="number" class="caja1" id="a3"> metros.';

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
    ra=[30,40,1080,2250];
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
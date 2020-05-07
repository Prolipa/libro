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

   NumerosAleatorios(5,rnd,5);
   NumerosAleatorios(8,rndd,8);

    a[1]='<li><input type="number" class="nota-abierta"  id="nota1" min="0" max="2"></li>'+
    '<p>Dos barcos salen y regresan al mismo puerto, uno sale cada 12 días y el otro cada 18 días. Si la primera vez salen juntos, ¿después de cuántos días volverán a salir juntos?</p>'+
    '<div class="col col-md-4">'+
        '<img src="img/i1_p67_act8.png" alt="">'+
    '</div>'+
        '<div class="col col-md-8">'+
        '<p><input type="number" class="caja1" value="12" disabled><input type="number" class="caja1" value="18" disabled>||<input type="number" class="caja1" id="a0"></p>'+
        '<p><input type="number" class="caja1" id="a1"><input type="number" class="caja1" id="a2">||<input type="number" class="caja1" id="a3"></p>'+
        '<p><input type="number" class="caja1" id="a4"><input type="number" class="caja1" id="a5">||<input type="number" class="caja1" id="a6"></p>'+
        '<p><input type="number" class="caja1" id="a7"><input type="number" class="caja1" id="a8">||<input type="number" class="caja1" id="a9"></p>'+
        '<p><input type="number" class="caja1" id="a10"></p>'+
        '<p><label for="">MCM =</label>  <input type="number" class="caja1" id="e0"></p>'+
    '</div>';

    a[2]='<li><input type="number" class="nota-abierta"  id="nota2" min="0" max="2"></li>'+
    '<p>Miranda y Rigoberta están emocionadas porque existe un nuevo almacén de ropa, el primer día van juntas. Miranda va al almacén cada 7 días y gasta $ 9; y Rigoberta va cada 9 días y gasta $ 7.</p>'+
    '<ol type="a">'+
        '<li><p>¿Cuándo se encontrarán nuevamente en el almacén?</p></li>'+
        '<li><p>¿Cuánto dinero gastó cada una hasta ese día?</p></li>'+
        '<p><label for="">M</label><sub>7</sub> = <input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"></p>'+
        '<p><label for="">M</label><sub>9</sub> = <input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"><input type="text" class="caja"></p>'+
        '<p><label for="">Gasto de Miranda:</label><input type="text"></p>'+
        '<p><label for="">Gasto de Rigoberta:</label><input type="text"></p>'+
        '<p><label for="">R.</label><input type="text" class="form-control"></p>'+
    '</ol>';

    a[3]='<li><input type="number" class="nota-abierta"  id="nota3" min="0" max="2"></li>'+
    '<p>Las dos luces de un árbol de navidad están parpadeando. En un tiempo determinado, ambas luces parpadean juntas, una lo hace cada 12 segundos, y la otra cada 15 segundos. ¿Qué tiempo transcurre hasta que ambas luces parpadean juntas?</p>'+
    '<p><label for="">M <sub>12</sub></label>={ <input type="text"><input type="text"><input type="text"><input type="text"> }</p>'+
    '<p><label for="">M <sub>15</sub></label>={ <input type="text"><input type="text"><input type="text"><input type="text"> }</p>'+
    '<p><label for="">MCD</label>=<input type="text"></p>'+
    '<p><label for="">R.</label><input type="text" class="form-control"></p>';

    a[4]='<li><input type="number" class="nota-abierta"  id="nota4" min="0" max="2"></li>'+
    '<p>Fernanda, Ana y Carlos viajan a la ciudad de Ambato, por trabajo. Fernanda viaja cada 5 días, Ana cada 3 días y Carlos cada 12 días. Si hoy viajaron juntos, ¿cuándo viajarán nuevamente los tres? </p>'+
    '<p><input type="text" class="form-control"></p>';

    
    a[5]='<li><input type="number" class="nota-abierta"  id="nota5" min="0" max="2"></li>'+
    '<p>En una excursión estudiantil, los líderes de dos grupos colocan banderines de colores cada cierta distancia, Juana lo hace cada 180 metros y Paco cada 140 metros. Si colocaron un banderín en el campamento, ¿a qué distancia colocarán los banderines juntos nuevamente? </p>'+
    '<p><input type="text" class="form-control"></p>';
   

    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);
    $('#contenidod').append(a[rnd[3]]);
    $('#contenidoe').append(a[rnd[4]]);
    
  






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
  


    var notaFinal = (nota*10)/77;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
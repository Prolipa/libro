var titulos = "aplico";
function Inicio() {

    
} 


function Cargar(){
    p1a=[];
    p1b=[];
    p3a=[];
    rndd=[];
    nump=[];
    
    NumerosAleatorios(3,rndd,3);
    NumerosP3(5,nump,900);

    p1a[1]='<p><input type="number" class="caja1" value="32"> X <input type="number" class="caja1" value="100"> = <input type="number" class="caja1" value="320"> X <input type="number" class="caja1" id="a0"> </p>';
    p1a[2]='<p><input type="number" class="caja1" value="80"> X <input type="number" class="caja1" value="90"> = <input type="number" class="caja1" id="a1"> X <input type="number" class="caja1" value="10"> </p>';
    p1a[3]='<p><input type="number" class="caja1" value="28000"> = <input type="number" class="caja1" value="70"> X <input type="number" class="caja1" id="a2"> X <input type="number" class="caja1" id="a3"> </p>';
    
    $('.contenidop1a').append(p1a[rndd[0]]);
    $('.contenidop1a').append(p1a[rndd[1]]);
    $('.contenidop1a').append(p1a[rndd[2]]);

    p1b[1]='<p><input type="number" class="caja1" value="10"> X <input type="number" class="caja1" value="1000"> = <input type="number" class="caja1" value="100"> X <input type="number" class="caja1" id="a4"> </p>';
    p1b[2]='<p><input type="number" class="caja1" value="300"> X <input type="number" class="caja1" id="a5"> = <input type="number" class="caja1" value="60"> X <input type="number" class="caja1" value="100"> </p>';
    p1b[3]='<p><input type="number" class="caja1" value="8100"> = <input type="number" class="caja1" value="90"> X <input type="number" class="caja1" id="a6"> X <input type="number" class="caja1" id="a7"> </p>';

    $('.contenidop1b').append(p1b[rndd[0]]);
    $('.contenidop1b').append(p1b[rndd[1]]);
    $('.contenidop1b').append(p1b[rndd[2]]);


    for(i=0;i<5;i++){
        p3a[i]='<tr><td class="bg-success"><label >'+nump[i]+'</label></td><td><input type="number" class="caja" id="a'+i+'"></td><td><input type="number" class="caja" id="b'+i+'"></td><td><input type="number" class="caja" id="c'+i+'"></td></tr>';
        $('.contenidop3a').append(p3a[i]);
    }






   
 };

 function NumerosAleatorios(cantidadNumeros,myArray,num){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*num);
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

function NumerosP3(cantidadNumeros,myArray,num){
    
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*num);
    var existe = false;
        for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
            existe = true;
            break;
            }
        }
        if(!existe){
            myArray[myArray.length] = numeroAleatorio+"000";
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
    nombre="a";
    vra=[];
    al=[10, 720, 4, 100, 100, 20, 9, 10];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<8;i++){
        calificar(vra[i],al[i],nombre+i);
    }

   

    

    var notaFinal = (nota*10)/8;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
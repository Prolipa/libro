var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    
    rnd=[];
    p=[];
    $("#nota1").val(0);
    $("#nota2").val(0);
    $("#nota3").val(0);


    NumerosAleatorios(4,rnd,4);
    
    p[1]='<p><li>10 × (8 + 3) = <input type="text" class="form-control respuestas" id="a0"></li></p>'+
    '<p><input type="text" class="form-control respuestas" id="a1"> = <input type="text" class="form-control respuestas" id="a2"></p>'+
    '<p><input type="text" class="form-control respuestas" id="a3"> = <input type="text" class="form-control respuestas" id="a4"></p>';

    p[2]='<p></p><li>3 × (50 + 13) = <input type="text" class="form-control respuestas" id="b0"></li></p>'+
    '<p><input type="text" class="form-control respuestas" id="b1"> = <input type="text" class="form-control respuestas" id="b2"></p>'+
    '<p><input type="text" class="form-control respuestas" id="b3"> = <input type="text" class="form-control respuestas" id="b4"></p>';

    p[3]='<p></p><li>4 × 25 – 4 × 10 = <input type="text" class="form-control respuestas" id="c0"></li></p>'+
    '<p><input type="text" class="form-control respuestas" id="c1"> = <input type="text" class="form-control respuestas" id="c2"></p>'+
    '<p><input type="text" class="form-control respuestas" id="c3"> = <input type="text" class="form-control respuestas" id="c4"></p>';

    p[4]='<p></p><li>180 × 3 – 180 × 1 = <input type="text" class="form-control respuestas" id="d0"></li></p>'+
    '<p><input type="text" class="form-control respuestas" id="d1"> = <input type="text" class="form-control respuestas" id="d2"></p>'+
    '<p><input type="text" class="form-control respuestas" id="d3"> = <input type="text" class="form-control respuestas" id="d4"></p>';

    $("#contenidoa").append(p[rnd[0]]);
    $("#contenidob").append(p[rnd[1]]);
    $("#contenidoc").append(p[rnd[2]]);
    $("#contenidod").append(p[rnd[3]]);

    


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

function NumerosP4(cantidadNumeros,myArray,num){
    
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
            myArray[myArray.length] = numeroAleatorio+"0";
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
    debugger
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
    vct.push(parseFloat(auxm)); 
};



 $(document).ready(function(){
 Cargar();



    

 $("#Calificar").click(function(){
    var nota = 0;
    nota1=$("#nota1").val();
    nota2=$("#nota2").val(); 
    nota3=$("#nota3").val(); 
    nota1=parseFloat(nota1);
    nota2=parseFloat(nota2);
    nota3=parseFloat(nota3);

    nota=nota1+nota2+nota3;
    nota=parseFloat(nota);
    
    

   


    var notaFinal = (nota);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    
    });
});



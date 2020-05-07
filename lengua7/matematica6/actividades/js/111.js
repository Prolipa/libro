var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    


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
    nota = 0;

    ra=[7, 8, 3, 4, 2, 3];
    nombre="a";
    vra=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<6;i++){
        calificar(vra[i],ra[i],nombre+i);
    }


    var notaFinal = (nota*10)/3;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    
    });
});



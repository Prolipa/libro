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
    nota=0;

    $("#Calificar").click(function(){
        vra=[];
        ra=[1, 3, 2, 7, 2, 5, 35, 30, 42, 105, 107, 105, 1, 2, 105, 105, 11, 15, 14, 27, 99, 56, 108, 43, 108, 105, 3, 4, 7, 9, 3, 4, 27, 28, 27, 36, 82, 36, 2, 5, 18, 36, 9, 16, 5, 12, 27, 20, 48, 7, 48, 48, 1, 8, 1, 8];
        nombre="a";
        for(i=0;i<56;i++){
            cojerdatos(nombre+i,vra);
        }
        for(i=0;i<56;i++){
            calificar(ra[i],vra[i],nombre+i);
        }


    var notaFinal = (nota*10)/56;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    
    });
});



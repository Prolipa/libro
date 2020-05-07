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
    vct.push(parseFloat(auxm)); 
};



 $(document).ready(function(){
    nota=0;

    $("#Calificar").click(function(){
        vra=[];
        ra=[0.148, 0.3, 0.43, 2.23, 76, 13, 25, 100, 19, 100, 15, 1000, 8, 10, 4, 100, 1, 10, 6, 10, 3, 100, 7, 1000, 0.1, 0.6, 0.03, 0.007, 5, 10, 25, 100, 12, 10, 6, 100, 0.5, 0.25, 0.225, 0.06];
        nombre="a";
        for(i=0;i<40;i++){
            cojerdatos(nombre+i,vra);
        }
        for(i=0;i<40;i++){
            calificar(ra[i],vra[i],nombre+i);
        }


    var notaFinal = (nota*10)/40;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    
    });
});
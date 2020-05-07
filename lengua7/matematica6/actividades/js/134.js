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
    vct.push(auxm); 
};

 $(document).ready(function(){
 
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;

    ra=["1", "8", "9,", "8", "7", "5", "1", "3", "9", "6", "5", "5", "5", "8", "6", "6", "9", "8,", "2", "5", "1", "8", "4", "5", "6", "3", "6", "9", "1", "2", "3", "8", "7,", "5", "7", "6", "1", "4", "8", "2", "2", "8", "5", "9", "2", "9", "1", "2", "3", "7", "0", "5", "7", "0", "4", "3,", "1", "3", "4", "3", "4", "8", "90,72", "8,4", "10,8", "108,29", "9,1", "11,9", "337,44", "33,744", "3,3744 ", "1949,9", "194,99 ", "19,499"];
    nombre="a";
    vra=[];
    for(i=0;i<74;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<74;i++){
        calificar(vra[i],ra[i],nombre+i);
    }
    
    var notaFinal = ((nota*10)/74);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    });
});
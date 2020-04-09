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
            myArray[myArray.length] = numeroAleatorio+10;
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
    vct.push(auxm.toLowerCase()); 
};

 $(document).ready(function(){
 
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    ra=[];
    nombre="a";
    vra=["97,5", "633,75 ", "3178,98", "42593,47", "94,2", "1919,70", "heptágono", "1254"];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<8;i++){
        calificar(vra[i],ra[i],nombre+i);
    }


    var notaFinal = ((nota*10)/8);
    notaFinal = notaFinal.toFixed(2);
    $("#txtNota").text(notaFinal);
    $('#Calificar').attr('disabled', true);
    });
});
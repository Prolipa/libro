var titulos = "aplico";
function Inicio() {

    
} 


function Cargar(){
    
   
 };

 function NumerosAleatorios(cantidadNumeros,myArray){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*3);
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
    al=[8670, 493, 94000, 7];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],al[i],nombre+i);
    }

   

    

    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
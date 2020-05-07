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
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    nombre="a";
    vra=[];
    ra=[7,7,7,2,49];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<5;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    rb=[5,5,5,2,25];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<5;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    rc=[6,6,6,2,36];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<5;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[];
    rd=[8,8,8,2,64];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<5;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }

    

    var notaFinal = (nota*10)/20;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
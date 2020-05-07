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
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    nombre="a";
    vra=[];
    ra=[2,2,3,2];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    rb=[4,25,64,100];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<6;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    rc=[2,5,4,10];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<6;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[];
    rd=[4,25,64,100];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<4;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }

    nombre="x";
    vrx=[];
   
    for(i=0;i<9;i++){
        cojerdatos(nombre+i,vrx);
    }
    for(i=0;i<9;i++){
        calificar(vrx[i],rp[i],nombre+i);
    }


    var notaFinal = (nota*10)/22;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});



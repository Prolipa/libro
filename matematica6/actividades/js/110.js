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

    ra=[1, 5, 3, 5, 4, 5, 2, 5];
    nombre="a";
    vra=[];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<8;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    rb=[1, 7, 2, 7, 3, 7, 4, 7, 5, 7, 6, 7];
    nombre="b";
    vrb=[];
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<12;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    rc=[1, 10, 3, 10, 4, 10, 5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 2, 10];
    nombre="c";
    vrc=[];
    for(i=0;i<18;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<18;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    rd=[3,1,4];
    nombre="d";
    vrd=[];
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<3;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }
 

    


  

    

    var notaFinal = (nota*10)/3;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    
    });
});



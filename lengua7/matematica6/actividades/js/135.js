var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    c=[];
    b=[];
    NumerosP4(6,b,99);
    NumerosAleatorios(6,c,10);
    for(i=0;i<6;i++){
        $("#b"+i).append(b[i]);
        $("#c"+i).append(c[i]);
    }
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
    vct.push(auxm); 
};

 $(document).ready(function(){
 
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    res=[];
    cres=[];
    nombre="r";
    for(i=0;i<6;i++){
        r=0;
        b=parseFloat($("#b"+i).text());
        c=parseFloat($("#c"+i).text());
        r=parseFloat(b/c).toFixed(1);
        res.push(r);
    }
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,cres);
    }
    for(i=0;i<6;i++){
        calificar(res[i],cres[i],nombre+i);
    }
    ra=["61.40", "8.77", "61.4", "7", "8.77", "30.20", "8", "0.35", "28"];
    nombre="a";
    vra=[];
    for(i=0;i<9;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<9;i++){
        calificar(vra[i],ra[i],nombre+i);
    }
    
    var notaFinal = ((nota*10)/15);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    });
});
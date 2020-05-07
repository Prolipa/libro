function Inicio() {
    
} 

function Cargar(){
    rnd1=[];
    rnd2=[];
    nums=[];
    $("#notaa1").val(0.00)
    $("#notaa2").val(0.00)
    $("#notaa3").val(0.00)
    p1=[];
    p2=[];
    $("#nota1").val(0);
    $("#nota2").val(0);
    $("#nota3").val(0);
    NumerosAleatorios(3,rnd1,3);
    NumerosAleatorios(4,rnd2,4);

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
        debugger
        if(a == ""){
            $(nom).addClass('correcto');
        }else
        {
            nota=nota+1;
            $(nom).addClass('correcto');
        }

     }else{
         $(nom).addClass('incorrecto');
     }
};

function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(auxm); 
};
 var nota = 0;

 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    vra=[];
    ra=["3,3", "3,8", "4,7", "6,4", "0,2", "0,7", "921,57", "17,56", "395,62", "50,7", "182,2", "36,04", "17,56", "36,04", "50,7", "182,2", "395,62", "921,57", "9", "3", "5", "59,81", "708", "9", "7", "20", "23", "10", "15", "12", "42", "66"];
    for(i=0;i<32;i++){
        cojerdatos("a"+i,vra);
    }
    for(i=0;i<32;i++){
        calificar(vra[i],ra[i],"a"+i);
    }

    notaa1 = parseFloat($("#notaa1").val());
    notaa2 = parseFloat($("#notaa2").val());
    notaa3 = parseFloat($("#notaa3").val());

    notaf = (nota*7)/31;

    var notaFinal = (notaf+notaa1+notaa2+notaa3);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(parseFloat(notaFinal));
    $('#Calificar').attr('disabled', true);
    
    });
});



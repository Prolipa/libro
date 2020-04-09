var titulos = "refuerzo";
var myArray = [];
var $n1=0;
var $n2=0;
var $n3=0;
var $n4=0;
var $num=0;
var $p=0;
var $aux=0;
var $aux1=0;
var $aux2=0;
var rp1 = new Array();
var rp2 = new Array();
var rp3 = new Array();
var rp4 = new Array();
var $calificara = [];
var $calificarb = [];
var $calificarc = [];
var $calificard = [];
var nombrea = "a";
var nombreb = "b";
var nombrec = "c";
var nombred = "d";
var calificar = "#";
var $sumara = 0;
var $sumarb = 0;
var $sumarc = 0;
var $sumard = 0;



function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Refrescar(){
    location.reload(true);
}

function Cargar() {
    Inicio();
    var $cantidad=4;
    var contenido1="#contenido1";
    var contenido2="#contenido2";
    var contenido3="#contenido3";
    var contenido4="#contenido4";

    NumerosAleatorios($cantidad);
        document.datos.num1.value = myArray[0];
        document.datos.num2.value = myArray[1];
        document.datos.num3.value = myArray[2];
        document.datos.num4.value = myArray[3];

       $n1=digitos(myArray[0]);
       $n2=digitos(myArray[1]);
       $n3=digitos(myArray[2]);
       $n4=digitos(myArray[3]);

       descompocicion(myArray[0],$n1,rp1,contenido1,nombrea);
       descompocicion(myArray[1],$n2,rp2,contenido2,nombreb);
       descompocicion(myArray[2],$n3,rp3,contenido3,nombrec);
       descompocicion(myArray[3],$n4,rp4,contenido4,nombred);

};

function descompocicion(numero,$n1,vct,conte,nombre){
    
    for(var $i=1;$i<=$n1;$i++){
        var auxnombre=nombre+$i;
        var i = document.createElement("INPUT");
        i.setAttribute("type","number");
        i.setAttribute("id",auxnombre);
        i.setAttribute("class","li3");
        $(conte).append(i);
    }


    while(numero>1){
        $n1=digitos(numero);
        $p=$n1-1;
        $num=Math.pow(10,$p);
        $aux=numero/$num;
        $aux1=Math.trunc($aux);
        $aux2=$aux1*$num;
        vct.push($aux2);
        numero=numero-$aux2;
       } 
}

function digitos(numero){
    var cont=0;
    while(numero>=1){
        numero=numero/10;
        cont++;
    }
    return cont;
};

function NumerosAleatorios(cantidadNumeros){
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*999999999);
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



$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        
        for(var $i=1;$i<=$n1;$i++){
        var auxiliarcal=calificar+nombrea+$i;        
        $calificara[$i]=parseInt($(auxiliarcal).val());
        $sumara = $sumara+$calificara[$i];
        }

        for(var $i=1;$i<=$n2;$i++){
        var auxiliarcal=calificar+nombreb+$i;        
        $calificarb[$i]=parseInt($(auxiliarcal).val());
        $sumarb = $sumarb+$calificarb[$i];
        }

        for(var $i=1;$i<=$n1;$i++){
        var auxiliarcal=calificar+nombrec+$i;        
        $calificarc[$i]=parseInt($(auxiliarcal).val());
        $sumarc = $sumarc+$calificarc[$i];
        }

        for(var $i=1;$i<=$n1;$i++){
        var auxiliarcal=calificar+nombred+$i;        
        $calificard[$i]=parseInt($(auxiliarcal).val());
        $sumard = $sumard+$calificard[$i];
        }

        var sumata=$("#sumaa").val();
        var sumatb=$("#sumab").val();
        var sumatc=$("#sumac").val();
        var sumatd=$("#sumad").val();

        if($sumara == sumata){
            nota = nota+1;
            $("#sumaa").css("background-color", "green");
        }else{
            $("#sumaa").css("background-color", "red");
        }

        if($sumarb == sumatb){
            nota = nota+1;
            $("#sumab").css("background-color", "green");
        }else{
            $("#sumab").css("background-color", "red");
        }

        if($sumarc == sumatc){
            nota = nota+1;
            $("#sumac").css("background-color", "green");
        }else{
            $("#sumac").css("background-color", "red");
        }

        if($sumard == sumatd){
            nota = nota+1;
            $("#sumad").css("background-color", "green");
        }else{
            $("#sumad").css("background-color", "red");
        }
        
        

    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);

    
    });

});
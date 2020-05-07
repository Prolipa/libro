var titulos = "aplico";
var vct1 = new Array();
var vct2 = new Array();
var vct3 = new Array();
var vct4 = new Array();
var vct5 = new Array();
var vtcra = new Array();
var vtcrb = new Array();
var vtcrc = new Array();
var vtcrd = new Array();
var vtcre = new Array();
vctd=new Array();
vcte=new Array();
vctf=new Array();

var myArray = [];
var $cont1=0;
var $cont2=0;
var $cont3=0;
var $cont4=0;
var $cont5=0;
var $id1="a";
var $id2="b";
var $id3="c";
var $id4="d";
var $id5="e";
var num1=0;
var numd=0;


function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Cargar() {
    Inicio();
    var contenido="#contenido";
    var contenido1="#contenido1";
    var contenido2="#contenido2";
    var $cantidad=13;
    NumerosAleatorios($cantidad);

        document.datos.num.value = myArray[0];
        document.datos.num2.value = myArray[1];
        document.datos.num4.value = myArray[2];
       
        
        $cont1=Divisor(myArray[0],vct1,contenido,$cont1,$id1);
        $cont2=Divisor(myArray[1],vct2,contenido1,$cont2,$id2);
        $cont3=Divisor(myArray[2],vct3,contenido2,$cont3,$id3);
       

};

function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    aux=$(nom).val();
    vct.push(parseInt(aux)); 
    
}


function Divisor($rand1,vct,conte,$cont,$id) {
    for(var $i=1;$i<=$rand1;$i++){
        if($rand1%$i==0){
        var $cont=$cont+1;
        var nom=$id+$cont;
        vct.push($i); 
        var i = document.createElement("INPUT");
        i.setAttribute("type","text");
        i.setAttribute("id",nom);
        i.setAttribute("class","li3");
        $(conte).append(i);
        }
    }
    return $cont;
};

function NumerosAleatorios(cantidadNumeros){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*99);
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

function calificarf($cont,vtc,$id){

    for(var i=1;i<=$cont;i++){
            var sim="#";
            var nomb=sim+$id+i;
            var resp=$(nomb).val();
            var respin=parseInt(resp);
            vtc.push(respin); 
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

}

function pintarbien($cont,$id){
    for(var i=1;i<=$cont;i++){
            var sim="#";
            var nomb=sim+$id+i;
            $(nomb).css("background-color", "green");
        }

};
function pintarmal($cont,$id){
    for(var i=1;i<=$cont;i++){
            var sim="#";
            var nomb=sim+$id+i;
            $(nomb).css("background-color", "red");
        }
};

$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;

        calificarf($cont1,vtcra,$id1);
        calificarf($cont2,vtcrb,$id2);
        calificarf($cont3,vtcrc,$id3);


        var encuentra = false;
        for(var i =1; i <= $cont1;i++){
        encuentra = false;
        for(var j =1; j <= $cont1;j++){
            if(vct1[i] == vtcra[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal($cont1,$id1);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien($cont1,$id1);
        }


        var encuentra = false;
        for(var i =1; i <= $cont2;i++){
        encuentra = false;
        for(var j =1; j <= $cont2;j++){
            if(vct2[i] == vtcrb[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal($cont2,$id2);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien($cont2,$id2);
        }


        var encuentra = false;
        for(var i =1; i <= $cont3;i++){
        encuentra = false;
        for(var j =1; j <= $cont3;j++){
            if(vct3[i] == vtcrc[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal($cont3,$id3);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien($cont3,$id3);
        }


        var encuentra = false;
        for(var i =1; i <= $cont4;i++){
        encuentra = false;
        for(var j =1; j <= $cont4;j++){
            if(vct4[i] == vtcrd[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal($cont4,$id4);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien($cont4,$id4);
        }



        var encuentra = false;
        for(var i =1; i <= $cont5;i++){
        encuentra = false;
        for(var j =1; j <= $cont5;j++){
            if(vct5[i] == vtcre[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal($cont5,$id5);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien($cont5,$id5);
        }

        nombre="d";
        for(i=0;i<=3;i++){
            cojerdatos(nombre+i,vctd);
        }

        nombre="e";
        for(i=0;i<=5;i++){
            cojerdatos(nombre+i,vcte);
        }

        nombre="f";
        for(i=0;i<=5;i++){
            cojerdatos(nombre+i,vctf);
        }
        vrd=[15,5,3,1];
        vre=[18,9,6,3,2,1];
        vrf=[20,10,5,4,2,1];

        nombre="d";
        for(i=0;i<=3;i++){
            calificar(vctd[i],vrd[i],nombre+i)
        }

        nombre="e";
        for(i=0;i<=5;i++){
            calificar(vcte[i],vre[i],nombre+i)
        }

        nombre="f";
        for(i=0;i<=5;i++){
            calificar(vctf[i],vrf[i],nombre+i)
        }

        var notaFinal = (nota*10)/19;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    });
    
});
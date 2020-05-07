var titulos = "aplico";
var vct1 = new Array();
var vct2 = new Array();
var vct3 = new Array();
var vra = new Array();
var vrb = new Array();
var vrc = new Array();
var vrd = new Array();
var id = new Array();
var vrid = new Array();
var vr = new Array();
var myArray = [];
var $cont1=0;
var $cont2=0;
var $cont3=0;
var contr1=0;
var contr2=0;
var contr3=0;
var $resp="";
var $resp1="";
var $resp2="";

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
        document.datos.num1.value = myArray[0];
        document.datos.num2.value = myArray[1];
        document.datos.num3.value = myArray[1];
        document.datos.num4.value = myArray[2];
        document.datos.num5.value = myArray[2];
       
        document.datos.nu0.value = myArray[3];
        document.datos.nu1.value = myArray[4];
        document.datos.nu2.value = myArray[5];
        document.datos.nu3.value = myArray[6];
        document.datos.nu4.value = myArray[7];
        document.datos.nu5.value = myArray[8];
        document.datos.nu6.value = myArray[9];
        document.datos.nu7.value = myArray[10];
        document.datos.nu8.value = myArray[11];
        document.datos.nu9.value = myArray[12];
        
        nombre="a";
        contr1=Divisor(myArray[0],vct1,contenido,$cont1,nombre);
        nombre="b";
        contr2=Divisor(myArray[1],vct2,contenido1,$cont2,nombre);
        nombre="c";
        contr3=Divisor(myArray[2],vct3,contenido2,$cont3,nombre);
        
    

    if(contr1<3){
        $resp="primo"
    }else{
        $resp="compuesto";
    }

    if(contr2<3){
        $resp1="primo"
    }else{
        $resp1="compuesto";
    }

    if(contr3<3){
        $resp2="primo"
    }else{
        $resp2="compuesto";
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
function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseInt(auxm)); 
}

function Divisor($rand1,vct,conte,$cont,nombre) {
    for(var $i=1;$i<=$rand1;$i++){
        
        if($rand1%$i==0){
        
        nom=nombre+$cont;
        vct.push($i);    
        var i = document.createElement("INPUT");
        i.setAttribute("type","number");
        i.setAttribute("id",nom);
        i.setAttribute("class","li3");
        $(conte).append(i);
        $cont=$cont+1;
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



$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        nombre="a";
        for(i=0;i<contr1;i++){
            cojerdatos(nombre+i,vra);
        }
        for(i=0;i<contr1;i++){
            calificar(vct1[i],vra[i],nombre+i);
        }

        nombre="b";
        for(i=0;i<contr2;i++){
            cojerdatos(nombre+i,vrb);
        }
        for(i=0;i<contr2;i++){
            calificar(vct2[i],vrb[i],nombre+i);
        }

        nombre="c";
        for(i=0;i<contr3;i++){
            cojerdatos(nombre+i,vrc);
        }
        for(i=0;i<contr3;i++){
            calificar(vct3[i],vrc[i],nombre+i);
        }

        res=$("#resp1").val();

        if(res.toLowerCase() == $resp.toLowerCase()){
            $("#resp1").css("background-color", "green");
        }else{
            $("#resp1").css("background-color", "red");
        } 

        res1=$("#resp2").val();

        if(res1.toLowerCase() == $resp1.toLowerCase()){
            $("#resp2").css("background-color", "green");
        }else{
            $("#resp2").css("background-color", "red");
        } 

        res2=$("#resp3").val();

        if(res2.toLowerCase() == $resp2.toLowerCase()){
            $("#resp3").css("background-color", "green");
        }else{
            $("#resp3").css("background-color", "red");
        }
        
        vct4=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
        nombre="d";
        for(i=0;i<15;i++){
            cojerdatos(nombre+i,vrd);
        }
        for(i=0;i<15;i++){
            calificar(vct4[i],vrd[i],nombre+i);
        }

        $(':radio:checked').each(function(i){
            aux= $(this).val();
            auxn=parseInt(aux);
            id.push(auxn);
           });
        
        nombre="nu";
        for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrid);
        }

        for(i=0;i<10;i++){
            cont=0;
            for(j=1;j<=vrid[i];j++){
                if(vrid[i]%j==0){
                   cont=cont+1;
                }
            }

            if(cont>=3){
                vr.push(1);
            }else{
                vr.push(0);
            }


        }
        
        nombre="radio";
        for(i=0;i<10;i++){
            calificar(id[i],vr[i],nombre+i);
        }

        div=contr1+contr2+contr3+10+18;










        var notaFinal = (nota*10)/div;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    
    });
    

});
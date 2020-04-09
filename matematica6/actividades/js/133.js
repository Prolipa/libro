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
    sim=".";
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
    sim=".";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(auxm); 
};

 $(document).ready(function(){
 
    $(".item1").click(function(){
        $(".item1").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })

    $(".item2").click(function(){
        $(".item2").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })

    $(".item3").click(function(){
        $(".item3").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })

    $(".item4").click(function(){
        $(".item4").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })

    $(".item5").click(function(){
        $(".item5").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })

    $(".item6").click(function(){
        $(".item6").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })

    $(".item7").click(function(){
        $(".item7").removeClass("seleccionar");
        $(this).addClass("seleccionar");
    })
 
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;

    ra=["6", "3", "7", ",", "8", "5", "5", "4", "8", "3", ",", "1", "2", "9", "6", "6", "1", ",", "3", "4", "2", "8", "1", "8", ",", "2", "3", "4", "0.10", "3.45", "1.55"];
    nombre="a";
    vra=[];
    for(i=0;i<31;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<31;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    for(i=1;i<=7;i++){
        console.log($(".item"+i).hasClass("a seleccionar"))
        if($(".item"+i).hasClass("a seleccionar")==true){
            nota++;
        }else{
            $(".item"+i).removeClass("seleccionar");
            $(".item"+i).addClass("error");
        }
    }

    var notaFinal = ((nota*10)/38);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    });
});
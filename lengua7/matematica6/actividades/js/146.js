function Inicio() {
    
} 

function Cargar(){
    rnd1=[];
    rnd2=[];
    nums=[];
    $("#notaa").val(0.00)
    p1=[];
    p2=[];
    $("#nota1").val(0);
    $("#nota2").val(0);
    $("#nota3").val(0);
    NumerosAleatorios(3,rnd1,3);
    NumerosAleatorios(4,rnd2,4);

    for(i=0;i<7;i++){
        for(j=0;j<10;j++){
            caja = '<input type="text" class="form-control col col-md1" style="width:10%; display: inline-table">'
            $(".cajares").append(caja);
        }
        $(".cajares").append("<p></p>");
    }



    p1[1]=
    '<img src="img/i1_p208_act145.png" width="100%" class="img-responsive" alt="">'+
    '<div class="row">'+
        '<div class="col col-md-4 " width="25%"></div>'+
        '<div class="col col-md-4 text-center" width="25%">'+
            '<input type="text" class="form-control respuestas p1_a0">'+
        '</div>'+
        '<div class="col col-md-4 bg text-center" width="25%">'+
            '<input type="text" class="form-control respuestas p1_a1">'+
        '</div>'+
    '</div>';

    $("#p1_a").append(p1[rnd1[0]]);
    $("#p1_a").append(p1[rnd1[1]]);
    $("#p1_c").append(p1[rnd1[2]]);


    for(i=0;i<54;i++){
        num = aleatorio = Math.round(Math.random()*9);
        if(i == 32){
            $(".p2_n32").append("9");    
        }else{
            if(i == 38){
                $(".p2_n38").append("4");    
            }else{
                if(i == 44){
                    $(".p2_n44").append("9");    
                }else{
                    if(i == 49){
                        $(".p2_n49").append("6");    
                    }else{
                        $(".p2_n"+i).append(num);
                    }
                }

            }
        }
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
        if(a == ""){
            $(nom).css("background-color", "red");
        }else
        {
            nota=nota+1;
            $(nom).css("background-color", "green");
        }

     }else{
         $(nom).css("background-color", "red");
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
    notaa = 0;
    notaf = 0;

    vra=[];
    ra=["497 717,451 ", "367,55 ", "65,40", " 32,38", "", "X", "X", "", "", "X", "126", "144", "1", "5", "3", "4", "2", "7", "6", "219,8", "55", "113,04", "106", "194,68", "62", "94,2", "127"];
    for(i=0;i<27;i++){
        cojerdatos("a"+i,vra);
    }
    for(i=0;i<27;i++){
        calificar(vra[i],ra[i],"a"+i);
    }

    vrw=[];
    rw=["20,5", "21,3", "22,1", "23,9", "24,6", "25,4", "26,8", "26,8 ", "25,2", "24,6", "23,9", "22,1", "21,3", "20,5"];
    for(i=0;i<14;i++){
        cojerdatos("w"+i,vrw);
    }
    for(i=0;i<14;i++){
        calificar(vrw[i],rw[i],"w"+i);
    }

    notaa = parseFloat($("#notaa").val());
    notaf = (nota*9)/38;

    var notaFinal = (notaa+notaf);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(parseFloat(notaFinal));
    $('#Calificar').attr('disabled', true);
    
    });
});



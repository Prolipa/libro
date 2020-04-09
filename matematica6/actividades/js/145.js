function Inicio() {
} 

function Cargar(){
    rnd1=[];
    rnd2=[];
    nums=[];

    p1=[];
    p2=[];
    $("#notaa1").val(0);
    $("#notaa2").val(0);
    $("#notaa3").val(0);
    $("#notaa4").val(0);
    $("#notaa5").val(0);

    NumerosAleatorios(3,rnd1,3);
    NumerosAleatorios(4,rnd2,4);

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

    p1[2]=
    '<img src="img/i2_p208_act145.png" class="img-responsive" alt="">'+
        '<div class="row">'+
            '<div class="col col-md-4 text-center" width="25%">'+
                '<input type="text" class="form-control respuestas p1_a2">'+
            '</div>'+
            '<div class="col col-md-4 text-center" width="25%">'+
                '<input type="text" class="form-control respuestas p1_a3">'+
            '</div>'+
            '<div class="col col-md-4" width="25%">'+
                '<input type="text" class="form-control respuestas p1_a4">'+
            '</div>'+
        '</div>';
    
    p1[3]=
    '<img src="img/i3_p208_act145.png" class="img-responsive" alt="">'+
        '<div class="row">'+
            '<div class="col col-md-4 text-center" width="25%">'+
                '<input type="text" class="form-control respuestas p1_a5">'+
            '</div>'+
            '<div class="col col-md-4 text-center" width="25%">'+
                '<input type="text" class="form-control respuestas p1_a6">'+
            '</div>'+
            '<div class="col col-md-4 text-center" width="25%">'+
                '<input type="text" class="form-control respuestas p1_a7">'+
            '</div>'+
        '</div>';
    
    $("#p1_a").append(p1[rnd1[0]]);
    $("#p1_a").append(p1[rnd1[1]]);
    $("#p1_c").append(p1[rnd1[2]]);

    p2[1]='<table class="table table-bordered">'+
        '<tr>'+
            '<td></td>'+
            '<td><label type="text" class="form-control p2_n0"></label></td>'+
            '<td><label type="text" class="form-control p2_n1"></label></td>'+
            '<td><label type="text" class="form-control p2_n2"></label></td>'+
            '<td><label type="text" class="form-control p2_n3"></label></td>'+
            '<td><label type="text" class="form-control p2_n4"></label></td>'+
            '<td><label type="text" class="form-control p2_n5"></label></td>'+
        '</tr>'+
        '<tr><td></td>'+
            '<td><label type="text" class="form-control p2_n6"></label></td>'+
            '<td><label type="text" class="form-control p2_n7"></label></td>'+
            '<td><label type="text" class="form-control p2_n8"></label></td>'+
            '<td><label type="text" class="form-control p2_n9"></label></td>'+
            '<td><label type="text" class="form-control p2_n10"></label></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr><td>+</td>'+
            '<td><label type="text" class="form-control p2_n11"></label></td>'+
            '<td><label type="text" class="form-control p2_n12"></label></td>'+
            '<td><label type="text" class="form-control p2_n13"></label></td>'+
            '<td><label type="text" class="form-control p2_n14"></label></td>'+
            '<td><label type="text" class="form-control p2_n15"></label></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr class="bg bg-success">'+
            '<td><input type="text" class="form-control p2_s1s0"></td>'+
            '<td><input type="text" class="form-control p2_s1s1"></td>'+
            '<td><input type="text" class="form-control p2_s1s2"></td>'+
            '<td><input type="text" class="form-control p2_s1s3"></td>'+
            '<td><input type="text" class="form-control p2_s1s4"></td>'+
            '<td><input type="text" class="form-control p2_s1s5"></td>'+
            '<td><input type="text" class="form-control p2_s1s6"></td>'+
        '</tr>'+
    '</table>';

    p2[2]='<table class="table table-bordered">'+
        '<tr>'+
            '<td></td>'+
            '<td></td>'+
            '<td><label type="text" class="form-control p2_n16"></label></td>'+
            '<td><label type="text" class="form-control p2_n17"></label></td>'+
            '<td><label type="text" class="form-control p2_n18"></label></td>'+
            '<td><label type="text" class="form-control p2_n19"></label></td>'+
            '<td><label type="text" class="form-control p2_n20"></label></td>'+
            '<td><label type="text" class="form-control p2_n21"></label></td>'+
        '</tr>'+
        '<tr><td></td>'+
            '<td></td>'+
            '<td><label type="text" class="form-control p2_n22"></label></td>'+
            '<td><label type="text" class="form-control p2_n23"></label></td>'+
            '<td><label type="text" class="form-control p2_n24"></label></td>'+
            '<td><label type="text" class="form-control p2_n25"></label></td>'+
            '<td><label type="text" class="form-control p2_n26"></label></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr><td>+</td>'+
            '<td></td>'+
            '<td><label type="text" class="form-control p2_n27"></label></td>'+
            '<td><label type="text" class="form-control p2_n28"></label></td>'+
            '<td><label type="text" class="form-control p2_n29"></label></td>'+
            '<td><label type="text" class="form-control p2_n30"></label></td>'+
            '<td><label type="text" class="form-control p2_n31"></label></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr class="bg bg-success"><td></td>'+
            '<td><input type="text" class="form-control p2_s2s0"></td>'+
            '<td><input type="text" class="form-control p2_s2s1"></td>'+
            '<td><input type="text" class="form-control p2_s2s2"></td>'+
            '<td><input type="text" class="form-control p2_s2s3"></td>'+
            '<td><input type="text" class="form-control p2_s2s4"></td>'+
            '<td><input type="text" class="form-control p2_s2s5"></td>'+
            '<td><input type="text" class="form-control p2_s2s6"></td>'+
        '</tr>'+
    '</table>';

    p2[3]='<table class="table table-bordered">'+
        '<tr>'+
            '<td></td>'+
            '<td><label type="text" class="form-control p2_n32"></label></td>'+
            '<td><label type="text" class="form-control p2_n33"></label></td>'+
            '<td><label type="text" class="form-control p2_n34"></label></td>'+
            '<td><label type="text" class="form-control p2_n35"></label></td>'+
            '<td><label type="text" class="form-control p2_n36"></label></td>'+
            '<td><label type="text" class="form-control p2_n37"></label></td>'+
        '</tr>'+
        '<tr><td>-</td>'+
            '<td><label type="text" class="form-control p2_n38"></label></td>'+
            '<td><label type="text" class="form-control p2_n39"></label></td>'+
            '<td><label type="text" class="form-control p2_n40"></label></td>'+
            '<td><label type="text" class="form-control p2_n41"></label></td>'+
            '<td><label type="text" class="form-control p2_n42"></label></td>'+
            '<td><label type="text" class="form-control p2_n43"></label></td>'+
        '</tr>'+
        '<tr class="bg bg-success"><td></td>'+
            '<td><input type="text" class="form-control p2_r1r1"></td>'+
            '<td><input type="text" class="form-control p2_r1r2"></td>'+
            '<td><input type="text" class="form-control p2_r1r3"></td>'+
            '<td><input type="text" class="form-control p2_r1r4"></td>'+
            '<td><input type="text" class="form-control p2_r1r5"></td>'+
            '<td><input type="text" class="form-control p2_r1r6"></td>'+
        '</tr>'+
    '</table>';

    p2[4]='<table class="table table-bordered">'+
        '<tr>'+
            '<td></td>'+
            '<td><label type="text" class="form-control p2_n44"></label></td>'+
            '<td><label type="text" class="form-control p2_n45"></label></td>'+
            '<td><label type="text" class="form-control p2_n46"></label></td>'+
            '<td><label type="text" class="form-control p2_n47"></label></td>'+
            '<td><label type="text" class="form-control p2_n48"></label></td>'+
        '</tr>'+
        '<tr><td>-</td>'+
            '<td><label type="text" class="form-control p2_n49"></label></td>'+
            '<td><label type="text" class="form-control p2_n50"></label></td>'+
            '<td><label type="text" class="form-control p2_n51"></label></td>'+
            '<td><label type="text" class="form-control p2_n52"></label></td>'+
            '<td><label type="text" class="form-control p2_n53"></label></td>'+
        '</tr>'+
        '<tr class="bg bg-success"><td></td>'+
            '<td><input type="text" class="form-control p2_r2r1"></td>'+
            '<td><input type="text" class="form-control p2_r2r2"></td>'+
            '<td><input type="text" class="form-control p2_r2r3"></td>'+
            '<td><input type="text" class="form-control p2_r2r4"></td>'+
            '<td><input type="text" class="form-control p2_r2r5"></td>'+
        '</tr>'+
    '</table>';

    $("#p2_a").append(p2[rnd2[0]]);
    $("#p2_b").append(p2[rnd2[1]]);
    $("#p2_c").append(p2[rnd2[2]]);
    $("#p2_d").append(p2[rnd2[3]]);

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
    
    sim=".";
    nom=sim+nombre;
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
         $(nom).css("background-color", "red");
     }
};

function cojerdatos(nombre,vct){
    
    sim=".";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseFloat(auxm)); 
};
 var nota = 0;

 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
    vra=[];
    ra=[1.6,2.7,0.4,1.75,2.2,0.85,1.4,2.75];
    for(i=0;i<10;i++){
        cojerdatos("p1_a"+i,vra);
    }
    for(i=0;i<10;i++){
        calificar(vra[i],ra[i],"p1_a"+i);
    }

    s1f1 = $(".p2_n16").text()+$(".p2_n17").text()+$(".p2_n18").text()+$(".p2_n19").text()+$(".p2_n20").text()+$(".p2_n21").text()
    s1f2 = $(".p2_n22").text()+$(".p2_n23").text()+$(".p2_n24").text()+$(".p2_n25").text()+$(".p2_n26").text()+0
    s1f3 = $(".p2_n27").text()+$(".p2_n28").text()+$(".p2_n29").text()+$(".p2_n30").text()+$(".p2_n31").text()+0
    s1=parseInt(s1f1)+parseInt(s1f2)+parseInt(s1f3)

    s2f1 = $(".p2_n0").text()+$(".p2_n1").text()+$(".p2_n2").text()+$(".p2_n3").text()+$(".p2_n4").text()+$(".p2_n5").text()
    s2f2 = $(".p2_n6").text()+$(".p2_n7").text()+$(".p2_n8").text()+$(".p2_n9").text()+$(".p2_n10").text()+0
    s2f3 = $(".p2_n11").text()+$(".p2_n12").text()+$(".p2_n13").text()+$(".p2_n14").text()+$(".p2_n15").text()+0
    s2=parseInt(s2f1)+parseInt(s2f2)+parseInt(s2f3)

    r1f1 = $(".p2_n32").text()+$(".p2_n33").text()+$(".p2_n34").text()+$(".p2_n35").text()+$(".p2_n36").text()+$(".p2_n37").text()
    r1f2 = $(".p2_n38").text()+$(".p2_n39").text()+$(".p2_n40").text()+$(".p2_n41").text()+$(".p2_n42").text()+$(".p2_n43").text()
    r1=parseInt(r1f1)-parseInt(r1f2)

    r2f1 = $(".p2_n44").text()+$(".p2_n45").text()+$(".p2_n46").text()+$(".p2_n47").text()+$(".p2_n48").text()
    r2f2 = $(".p2_n49").text()+$(".p2_n50").text()+$(".p2_n51").text()+$(".p2_n52").text()+$(".p2_n53").text()
    r2=parseInt(r2f1)-parseInt(r2f2)

    s2a = $(".p2_s1s0").val()+$(".p2_s1s1").val()+$(".p2_s1s2").val()+$(".p2_s1s3").val()+$(".p2_s1s4").val()+$(".p2_s1s5").val()+$(".p2_s1s6").val()
    s1a = $(".p2_s2s0").val()+$(".p2_s2s1").val()+$(".p2_s2s2").val()+$(".p2_s2s3").val()+$(".p2_s2s4").val()+$(".p2_s2s5").val()+$(".p2_s2s6").val()

    r1a = $(".p2_r1r1").val()+$(".p2_r1r2").val()+$(".p2_r1r3").val()+$(".p2_r1r4").val()+$(".p2_r1r5").val()+$(".p2_r1r6").val()
    r2a = $(".p2_r2r1").val()+$(".p2_r2r2").val()+$(".p2_r2r3").val()+$(".p2_r2r4").val()+$(".p2_r2r5").val()
    console.log(s1)
    console.log(s1a)

    console.log(s2)
    console.log(s2a)
    if(parseInt(s1) == s1a){
        nota=nota+1;
    }
    if(parseInt(s2) == s2a){
        nota=nota+1;        
    }
    if(parseInt(r1) == r1a){
        nota=nota+1;        
    }
    if(parseInt(r2) == r2a){
        nota=nota+1;        
    }

    nota1=parseFloat($("#notaa1").val());
    nota2=parseFloat($("#notaa2").val());
    nota3=parseFloat($("#notaa3").val());
    nota4=parseFloat($("#notaa4").val());
    nota5=parseFloat($("#notaa5").val());
    notaf=parseFloat((nota*3.5)/10);
    var notaFinal = (nota1+nota2+nota3+nota4+nota5+notaf);
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});



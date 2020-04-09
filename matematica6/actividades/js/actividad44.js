var titulos = "refuerzo";
var ch1=0;
var ch2=0;
var ch3=0;
var ch4=0;
var ch5=0;
var vtcra = new Array();
var vtcrb = new Array();
var ra=[2,14,4,2,4,7,14,28];
var rb=[1,63,3,21,7,9,1,3,7,9,21,63];
var box1=0;
var box2=0;
var num1=0;






function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Cargar() {
    Inicio();
    

   

};


  
function datoselect(nom){
    var select = document.getElementById(nom);
    return select.value;
  }

function calificarf($cont,vtc,$id){

    for(var i=1;i<=$cont;i++){
            var sim="#";
            var nomb=sim+$id+i;
            var resp=$(nomb).val();
            var respin=parseInt(resp);
            vtc.push(respin); 
        }

};

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
    var nom1="ch1";
    var nom2="ch2";
    var nom3="ch3";
    var nom4="ch4";
    var nom5="ch5";
    $("#Calificar").click(function() {
        nota = 0;
        ch1=datoselect(nom1);
        ch2=datoselect(nom2);
        ch3=datoselect(nom3);
        ch4=datoselect(nom4);
        ch5=datoselect(nom5);

        if(ch1==0){
            nota = nota+1;
            $("#a").css("background-color", "green");
        }else{
            $("#a").css("background-color", "red");
        }
        if(ch2==1){
            nota = nota+1;
            $("#b").css("background-color", "green");
        }else{
            $("#b").css("background-color", "red");
        }
        if(ch3==1){
            nota = nota+1;
            $("#c").css("background-color", "green");
        }else{
            $("#c").css("background-color", "red");
        }
        if(ch4==0){
            nota = nota+1;
            $("#d").css("background-color", "green");
        }else{
            $("#d").css("background-color", "red");
        }
        if(ch5==1){
            nota = nota+1;
            $("#e").css("background-color", "green");
        }else{
            $("#e").css("background-color", "red");
        }
        
    var noma="a";
    var conta=8;
    var nomb="b"
    var contb=12;
    
        calificarf(conta,vtcra,noma);

        var encuentra = false;
        for(var i =1; i <= conta;i++){
        encuentra = false;
        for(var j =1; j <= conta;j++){
            if(vtcra[i] == ra[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal(conta,noma);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien(conta,noma);
        }
        
        calificarf(contb,vtcrb,nomb);
        
        var encuentra = false;
        for(var i =1; i <= contb;i++){
        encuentra = false;
        for(var j =1; j <= contb;j++){
            if(vtcrb[i] == rb[j]){
                encuentra = true;
                break;
            }
        }
        if(!encuentra){
        pintarmal(contb,nomb);
        break;
        }
        }
        if(encuentra){
            nota = nota+1;
            pintarbien(contb,nomb);
        }

        
        box1=$("#op1:checked").val();
        box2=$("#op2:checked").val();
        var res1=6300%box1;
        var res2=6300%box2;
        
        if(res1==0 && res2==0){
            nota = nota+1;
            $("#rbox1").css("background-color", "green");
        }else{
            $("#rbox1").css("background-color", "red");
        }

        box3=$("#op3:checked").val();
        var res3=704%box3;
                  
        if(res3==0){
            if(box4=$("#op4:checked").val()==null){
                nota = nota+1;
            $("#rbox2").css("background-color", "green");
            }
            else{
                $("#rbox2").css("background-color", "red");
            }
        }else{
            $("#rbox2").css("background-color", "red");
        }

        box6=$("#op6:checked").val();
        var res4=395%box6;
        if(res4==0){
            if(box5=$("#op5:checked").val()==null){
                nota = nota+1;
            $("#rbox3").css("background-color", "green");
            }
            else{
                $("#rbox3").css("background-color", "red");
            }
        }else{
            $("#rbox3").css("background-color", "red");
        }

        box7=$("#op7:checked").val();
        box8=$("#op8:checked").val();
        var res5=420%box7;
        var res6=420%box8;
        
        if(res5==0 && res6==0){
            nota = nota+1;
            $("#rbox4").css("background-color", "green");
        }else{
            $("#rbox4").css("background-color", "red");
        }

        box9=$("#op9:checked").val();
        var res7=528%box9;
        if(res7==0){
            if(box10=$("#op10:checked").val()==null){
                nota = nota+1;
            $("#rbox5").css("background-color", "green");
            }
            else{
                $("#rbox5").css("background-color", "red");
            }
        }else{
            $("#rbox5").css("background-color", "red");
        }





        num1=$("#num1").val();
        var num2=$("#num2").val();
        var num3=$("#num3").val();
        var num4=$("#num4").val();
        var num5=$("#num5").val();
        var num6=$("#num6").val();
        var num7=$("#num7").val();
        var num8=$("#num8").val();
        
        
        if(num1>0){
            div1=num1%4;
        if(div1==0){
            nota = nota+1;
            $("#num1").css("background-color", "green");
        }
        }
        else{
            $("#num1").css("background-color", "red");
        }



        if(num2>0){
        div2=num2%4;
        if(div2==0){
            nota = nota+1;
            $("#num2").css("background-color", "green");
        }
    }
        else{
            $("#num2").css("background-color", "red");
        }


        if(num3>0){
        div3=num3%4;
        if(div3==0){
            nota = nota+1;
            $("#num3").css("background-color", "green");
        }
    }
        else{
            $("#num3").css("background-color", "red");
        }



        if(num4>0){
        div4=num4%4;
        if(div4==0){
            nota = nota+1;
            $("#num4").css("background-color", "green");
        }
    }
        else{
            $("#num4").css("background-color", "red");
        }


        if(num5>0){
        div5=num5%5;
        if(div5==0){
            nota = nota+1;
            $("#num5").css("background-color", "green");
        }
    }
        else{
            $("#num5").css("background-color", "red");
        }

        if(num6>0){
        div6=num6%5;
        if(div6==0){
            nota = nota+1;
            $("#num6").css("background-color", "green");
        }
    }
        else{
            $("#num6").css("background-color", "red");
        }


        if(num7>0){
        div=num7%5;
        if(div==0){
            nota = nota+1;
            $("#num7").css("background-color", "green");
        }
    }
        else{
            $("#num7").css("background-color", "red");
        }


        if(num8>0){
        div=num8%5;
        if(div==0){
            nota = nota+1;
            $("#num8").css("background-color", "green");
        }
    }
        else{
            $("#num8").css("background-color", "red");
        }




        





        



       




       
        var notaFinal = (nota*10)/38;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    });
    
});
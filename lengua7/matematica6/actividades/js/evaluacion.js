var vct1 = new Array();
var vct2 = new Array();
var vct3 = new Array();
var vct4 = new Array();
var vct5 = new Array();
var vtcrb = new Array();
var vtcrc = new Array();
var vtcrd = new Array();
var vtcre = new Array();
p1=0;
p2=0;
p3=0;
p4=0;
p5=0;
p6=0;
p7=0;
p8=0;
p9=0;
p10=0;
var $cont1=0;
var $cont2=0;
var $cont3=0;
var $cont4=0;
var $cont5=0;
var $id1="a";
var $id2="b";
var $id3="c";
var num1=0;
var numd=0;


function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Cargar() {
    Inicio();
    myArray = [];
    p4=[];
    pn4=[];
    pg4=[];
    var $cantidad=13;
    NumerosAleatorios($cantidad,myArray,999);
    NumerosAleatorios(10,p4,99);
    NumerosAleatorios(3,pn4,9);
    NumerosAleatorios(12,pg4,99);


        document.datos.num.value = myArray[0];
        document.datos.num2.value = myArray[1];
        document.datos.num4.value = myArray[2];
       
        
        $cont1=Divisor(myArray[0],vct1,pr0,$cont1,$id1);
        $cont2=Divisor(myArray[1],vct2,pr1,$cont2,$id2);
        $cont3=Divisor(myArray[2],vct3,pr2,$cont3,$id3);

        $("#pn4").val(pn4[0]);

        nom="#p";
        for(i=0;i<11;i++){
            $(nom+i).val(pg4[i]);
        }




       

};

function cojerdatos(nombre,vct){
    debugger;
    aux=$(nombre).val();
    vct.push(parseInt(aux)); 
    
};


function Divisor($rand1,vct,conte,$cont,$id) {
    for(var $i=0;$i<$rand1;$i++){
        if($rand1%$i==0){
        var nom=$id+$cont;
        vct.push($i); 
        var i = document.createElement("INPUT");
        i.setAttribute("type","text");
        i.setAttribute("id",nom);
        i.setAttribute("class","caja4");
        $(conte).append(i);
        var $cont=$cont+1;
        }
    }
    return $cont;
};

function NumerosAleatorios(cantidadNumeros,myArray,cant){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*cant);
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

function calificar(num,a,nombre){
    
    
    if(a==num){
        nota=nota+1;
        $(nombre).css("background-color", "green");
     }else{
         $(nombre).css("background-color", "red");
     }
    
    return nota;

}


$(document).ready(function() {
    Cargar();

    $("#p0").click(function() {
        if(p0==1){
            $("#p0").css("background-color", "white");
            p0=0;
            r0=0;
        }
        else{
            $("#p0").css("background-color", "green");
            p0=1;
            r0=$("#p0").val();
        }
    });

    $("#p1").click(function() {
        if(p1==1){
            $("#p1").css("background-color", "white");
            p1=0;
            r1=0;
        }
        else{
            $("#p1").css("background-color", "green");
            p1=1;
            r1=$("#p1").val();
        }
    });

    $("#p2").click(function() {
        if(p2==1){
            $("#p2").css("background-color", "white");
            p2=0;
            r2=0;
        }
        else{
            $("#p2").css("background-color", "green");
            p2=1;
            r2=$("#p2").val();
        }
    });


    $("#p3").click(function() {
        if(p3==1){
            $("#p3").css("background-color", "white");
            p3=0;
            r3=0;
        }
        else{
            $("#p3").css("background-color", "green");
            p3=1;
            r3=$("#p3").val();
        }
    });

    $("#p4").click(function() {
        if(p4==1){
            $("#p4").css("background-color", "white");
            p4=0;
            r4=0;
        }
        else{
            $("#p4").css("background-color", "green");
            p4=1;
            r4=$("#p4").val();
        }
    });

    $("#p5").click(function() {
        if(p5==1){
            $("#p5").css("background-color", "white");
            p5=0;
            r5=0;
        }
        else{
            $("#p5").css("background-color", "green");
            p5=1;
            r5=$("#p5").val();
        }
    });

    $("#p6").click(function() {
        if(p6==1){
            $("#p6").css("background-color", "white");
            p6=0;
            r6=0;
        }
        else{
            $("#p6").css("background-color", "green");
            p6=1;
            r6=$("#p6").val();
        }
    });

    $("#p7").click(function() {
        if(p7==1){
            $("#p7").css("background-color", "white");
            p7=0;
            r7=0;
        }
        else{
            $("#p7").css("background-color", "green");
            p7=1;
            r7=$("#p7").val();
        }
    });

    $("#p8").click(function() {
        if(p8==1){
            $("#p8").css("background-color", "white");
            p8=0;
            r8=0;
        }
        else{
            $("#p8").css("background-color", "green");
            p8=1;
            r8=$("#p8").val();
        }
    });

    $("#p9").click(function() {
        if(p9==1){
            $("#p9").css("background-color", "white");
            p9=0;
            r9=0;
        }
        else{
            $("#p9").css("background-color", "green");
            p9=1;
            r9=$("#p9").val();
        }
    });

    $("#p10").click(function() {
        if(p10==1){
            $("#p10").css("background-color", "white");
            p10=0;
            r10=0;
        }
        else{
            $("#p10").css("background-color", "green");
            p10=1;
            r10=$("#p10").val();
        }
    });











    $("#Calificar").click(function() {
        nota = 0;
        noma="#a";
        nomb="#b";
        nomc="#c";
        vra = new Array();
        vrb = new Array();
        vrc = new Array();

        for(i=0;i<=$cont1;i++){
            cojerdatos(noma+i,vra);
        }
        for(i=0;i<=$cont2;i++){
            cojerdatos(nomb+i,vrb);
        }
        for(i=0;i<=$cont3;i++){
            cojerdatos(nomc+i,vrc);
        }
        
        for(i=0;i<=$cont1;i++){
            calificar(vct1[i],vra[i],noma+i);
        }
        for(i=0;i<=$cont2;i++){
            calificar(vct2[i],vrb[i],nomb+i);
        }
        for(i=0;i<=$cont3;i++){
            calificar(vct3[i],vrc[i],nomc+i);
        }

        vnr=[120,40,90,1,2,3];
        vrn=new Array();
        nomn="#n";
        for(i=0;i<6;i++){
            cojerdatos(nomn+i,vrn);
        }
        for(i=0;i<6;i++){
            calificar(vnr[i],vrn[i],nomn+i);
        }


        vdr=[4,6,8,12,2,3,4,4,6,2,18,20,36,54,2,18,20,36,54,2,18,19,19,36,2];
        vrd=new Array();
        nomd="#d";
        for(i=0;i<15;i++){
            cojerdatos(nomd+i,vrd);
        }
        for(i=0;i<15;i++){
            calificar(vdr[i],vrd[i],nomd+i);
        }
       
        
        if(nota1>0){
            $("#nota1").css("background-color", "green");
        }else{
            nota1=0;
            $("#nota1").css("background-color", "red");
        }


        rf0=r0%pn4[0];
        if(rf0==0){
            $("#nota1").css("background-color", "green");
        }else

        


       



        

      

       
        var notaFinal = (nota*10)/19;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(notaFinal);
        $('#Calificar').attr('disabled', true);

    });
    
});
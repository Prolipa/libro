var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
    p5=[];
    num=[];
    
    numero=NumerosAleatorios(1,num,8);
    $("#nota1").val("0");
    $("#nota2").val("0");
    $("#nota3").val("0");
    $("#nota4").val("0");
    $("#nota5").val("0");
    $("#nota6").val("0");
    $("#nota7").val("0");


   
   
   
    
    numerador=numero;
    denominador=9-numerador;
    if(numerador>denominador){
        auxd=denominador;
        auxn=numerador;
    }
    auxn=numerador;
    auxd=denominador;

    for(i=0;i<auxn;i++){
        p5[0]='<img src="img/i4_p136_act108.png" class="img-responsive">'; 
        $("#"+i).append(p5[0]);     
    }
    for(i=0;i<auxd;i++){
        p5[1]='<img src="img/i5_p136_act108.png" class="img-responsive">'; 
        $("#"+i).append(p5[1]);     
    }

    for(i=13;i<33;i++){
        p10='<input type="number" id="b'+i+'" class="form-control" style="width:55px;  display: inline-table;">';
        $("#respuestas").append(p10);
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
    return numeroAleatorio
};

function calificar(num,a,nombre){
    debugger;
    
    sim="#";
    nom=sim+nombre;
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
        $(nom).css("background-color", "red");
     }
    
};

function Divisor(rand1,vct,conte,cont,nombre) {
    for(j=1;j<=rand1;j++){
        if(rand1%j==0){
        nom=nombre+cont;
        vct.push(j);    
        var i = document.createElement("INPUT");
        i.setAttribute("type","number");
        i.setAttribute("id",nom);
        i.setAttribute("class","caja");
        $(conte).append(i);
        cont=cont+1;
        }
    }
    return cont;
};

function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseFloat(auxm)); 
};



 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){


    
    nota=0;

        vrb=[];
        rb=[2, 5, 3, 4, 4, 9, 6, 8, 4, 7, 5.3, 5.5, 6, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 9];
        nombre="b";
        for(i=0;i<33;i++){
            cojerdatos(nombre+i,vrb);
        }
        for(i=0;i<33;i++){
            calificar(rb[i],vrb[i],nombre+i);
        }



    nota1=$("#nota1").val();
    nota2=$("#nota2").val();
    nota3=$("#nota3").val();
    nota4=$("#nota4").val();
    nota5=$("#nota5").val();
    nota6=$("#nota6").val();
    nota7=$("#nota7").val();


    nota1=parseFloat(nota1);
    nota2=parseFloat(nota2);
    nota3=parseFloat(nota3);
    nota4=parseFloat(nota4);
    nota5=parseFloat(nota5);
    nota6=parseFloat(nota6);
    nota7=parseFloat(nota7);



    sumat=nota1+nota2+nota3+nota4+nota5+nota6+nota7;

         

    var notaFinal = ((nota*3)/33)+sumat;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});
var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
   rnd = []; 
   rndd = []; 
   vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
   cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
   a=[];
   r=[];
   c=[];
   d=[];
   b=[];

   NumerosAleatorios(4,rnd,4);

    b[1]='<div class="row">'+
    '<li></li>'+
    '<img src="img/i1_p81_act76.png" class="img-responsive">'+
    '<label for="">P = </label><input type="number" class="caja" id="a0">cm'+
    '</div>';
    b[2]='<div class="row">'+
    '<li></li>'+
    '<img src="img/i3_p81_act76.png" class="img-responsive">'+
    '<label for="">P = </label><input type="number" class="caja" id="a1">cm'+
    '</div>';
    b[3]='<div class="row">'+
    '<li></li>'+
    '<img src="img/i2_p81_act76.png" class="img-responsive">'+
    '<label for="">P = </label><input type="number" class="caja" id="a2">cm'+
    '</div>';
    b[4]='<div class="row">'+
    '<li></li>'+
    '<img src="img/i4_p81_act76.png" class="img-responsive">'+
    '<label for="">P = </label><input type="number" class="caja" id="a3">cm'+
    '</div>';

    $('#contenidoa').append(b[rnd[0]]);
    $('#contenidob').append(b[rnd[1]]);
    $('#contenidoc').append(b[rnd[2]]);
    $('#contenidod').append(b[rnd[3]]);


    
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
    vct.push(parseInt(auxm)); 
};

 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[32,97,34,151];
    nombre="a";
    vra=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    

   
    

    var notaFinal = (nota*10)/15;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
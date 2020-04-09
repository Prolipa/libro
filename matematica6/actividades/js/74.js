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

   NumerosAleatorios(3,rnd,3);

   b[1] = '<img src="img/i1_p79_act74.png" alt="">'+
    '<p><label for="">P=</label><input type="number" id="a0" class="caja"> <label for="">cm</label></p>';
    
   b[2] ='<img src="img/i2_p79_act74.png" alt="">'+
    '<p><label for="">P=</label><input type="number" id="a1" class="caja"> <label for="">cm</label></p>';

   b[3]='<img src="img/i3_p79_act74.png" alt="">'+
    '<p><label for="">P=</label><input type="number" id="a2" class="caja"> <label for="">cm</label></p>';

    $('#contenidoa').append(b[rnd[0]]);
    $('#contenidob').append(b[rnd[1]]);
    $('#contenidoc').append(b[rnd[2]]);

    
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
    ra=[660,240,110,86];
    rb=[88,4,22,22,2,11,11,4,44,11,44];
    
  

    nombre="a";
    vra=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    for(i=0;i<11;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<11;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

   
    

    var notaFinal = (nota*10)/15;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
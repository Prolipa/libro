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

   for(i=0;i<25;i++){
       b[i]='<input type="number" class="caja1" id="b'+i+'"> + '
       $('#contenidob').append(b[i]);
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
    ra=[65,40,65,40,210,25,210,5250];
    rc=[5250,5250];
    rb=[];
    nombre="a";
    vra=[];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<8;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    for(i=0;i<25;i++){
        rb[i]=210;
    }

    nombre="b";
    vrb=[];
    for(i=0;i<25;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<25;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    for(i=0;i<2;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<2;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    

   
    

    var notaFinal = (nota*10)/35;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
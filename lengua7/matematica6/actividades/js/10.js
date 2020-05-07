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
   div=[];
   num=[];

   NumerosAleatorios(4,rnd,4);
   NumerosAleatorios(8,rndd,8);
   NumerosAleatorios(10,num,5000);
   NumerosAleatorios(10,div,100);

    for(i=0;i<10;i++){
        a[i]='<p><input type="number" class="caja" value="'+num[i]+'" id="num'+i+'" disabled> ÷ <input type="number" class="caja" value="'+div[i]+'" id="div'+i+'" disabled></p>';
        c[i]='<p><label for="">Cociente:</label><input type="number" class="caja" id="c'+i+'"></p>';
        r[i]='<p><label for="">Residuo:</label><input type="number" class="caja" id="r'+i+'"></p>';
        $('#contenido'+i).append(a[i]);
        $('#contenidoc'+i).append(c[i]);
        $('#contenidor'+i).append(r[i]);

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
    rc=[];
    rr=[];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrnum);
        cojerdatos(nombre1+i,vrdiv);
    }
    for(i=0;i<10;i++){
        c=vrnum[i]/vrdiv[i];
        aux=Math.trunc(c);
        r=vrnum[i]%vrdiv[i];
        rc.push(aux);
        rr.push(r);
    }

    nombre="c";
    vrc=[];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<10;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="r";
    vrr=[];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrr);
    }
    for(i=0;i<10;i++){
        calificar(vrr[i],rr[i],nombre+i);
    }

    

    var notaFinal = (nota*10)/20;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
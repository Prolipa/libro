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
   $("#nota1").val(0.0);
   $("#nota2").val(0.0);

   NumerosAleatorios(3,rnd,3);
   NumerosAleatorios(4,rndd,4);


   a[1]='MCM (12 y 30) = <input type="number" class="caja" id="a0">';
   a[2]='MCM (6 y 6) = <input type="number" class="caja" id="a1">';
   a[3]='MCM (4,8 y 40) = <input type="number" class="caja" id="a2">';
   b[1]='MCD (78 y 52) = <input type="number" class="caja" id="a3">';
   b[2]='MCD (56 y 49) = <input type="number" class="caja" id="a4">';
   b[3]='MCD (15 y 45) = <input type="number" class="caja" id="a5">';
   b[4]='MCD (56 y 96) = <input type="number" class="caja" id="a6">';

    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);

    $('#contenido1').append(b[rndd[0]]);
    $('#contenido2').append(b[rndd[1]]);
    $('#contenido3').append(b[rndd[2]]);
    $('#contenido4').append(b[rndd[3]]);

   
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

function calificar(num,a,nombre,nota){
    
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
     nota1=0;nota2=0;nota3=0;nota4=0;nota5=0;nota6=0;nota7=0;
    p1=0.0;
    p2=0.0;
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[60,24,40,26,7,15,8];
    rb=[501,501,10,124,10,124];
    rc=[385,770,20,149,20,149];
    rd=[248,248,18,2058,1984,74,18,74];
    re=[240,245,265,250,-15,20];
    rf=[2000,2250,2500,2750,250];
    rg=[25,30,40,95,95];

    nombre="a";
    vra=[];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<7;i++){
        nota1=calificar(vra[i],ra[i],nombre+i,nota1);
    }

    nombre="b";
    vrb=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<6;i++){
        nota2=calificar(vrb[i],rb[i],nombre+i,nota2);
    }

    nombre="c";
    vrc=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<6;i++){
        nota3=calificar(vrc[i],rc[i],nombre+i,nota3);
    }

    nombre="d";
    vrd=[];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<8;i++){
        nota4=calificar(vrd[i],rd[i],nombre+i,nota4);
    }

    nombre="e";
    vre=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<6;i++){
        nota5=calificar(vre[i],re[i],nombre+i,nota5);
    }

    nombre="f";
    vrf=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrf);
    }
    for(i=0;i<5;i++){
        nota6=calificar(vrf[i],rf[i],nombre+i,nota6);
    }

    nombre="g";
    vrg=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrg);
    }
    for(i=0;i<5;i++){
        nota7=calificar(vrg[i],rg[i],nombre+i,nota7);
    }


    p1=$("#nota1").val();
    p1=parseFloat(p1);
    p2=nota1/3.5;
    p2=parseFloat(p2);
    p3=(nota2+nota3+nota4)/10;
    p3=parseFloat(p3);
    p4=(nota5+nota6)/11;
    p4=parseFloat(p4);
    p5=$("#nota2").val();
    p5=parseFloat(p5);
    p6=nota7/2.5;
    p6=parseFloat(p6);

    var notaFinal = p1+p2+p3+p4+p5+p6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});
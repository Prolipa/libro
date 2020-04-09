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
   p1=[];
   pa=[];
   pb=[];
   $("#nota1").val(0.0);
   $("#nota2").val(0.0);
   NumerosAleatorios(3,rnd,3);
   NumerosAleatorios(2,rndd,2);

   for(i=0;i<6;i++){
       p1[i]='<input type="number" class="caja" id="a'+i+'">';
       $('#contenidoa').append(p1[i]);       
   }
   for(i=0;i<10;i++){
    p1[i]='<input type="number" class="caja" id="b'+i+'">';
    $('#contenidob').append(p1[i]);       
    }

    pa[1]='<li>MCM (4 y 5) = <input type="number" class="caja" id="d0"> </li>';
    pa[2]='<li>MCM (120 y 10) = <input type="number" class="caja" id="d1"></li>';
    pb[1]='<li>MCM (8 y 9) = <input type="number" class="caja" id="d2"> </li>';
    pb[2]='<li>MCM (10, 100 y 20) = <input type="number" class="caja" id="d3"> </li>';
    pb[3]='<li>MCM (2,3 y 6) = <input type="number" class="caja" id="d4"> </li>';
    $('#contenidop2a').append(pa[rndd[0]]);  
    $('#contenidop2b').append(pa[rndd[1]]);  
    $('#contenidop2c').append(pb[rnd[0]]);  
    $('#contenidop2d').append(pb[rnd[1]]);  
    $('#contenidop2e').append(pb[rnd[2]]);  




   
   

   


   
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
     nota1=0;nota2=0;nota3=0;nota4=0;nota5=0;nota6=0;nota7=0;nota8=0;nota9=0;nota10=0;
    p1=0.0;
    p2=0.0;
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[1,2,3,6,43,258];
    rb=[1,2,3,4,5,6,8,10,12,120];
    rc=[6,43,20];
    rd=[20,120,72,100,6];
    re=[1208,1328,1448,1568,120];
    rf=[8930,8430,7930,7430,-500];
    rg=[453,906,20,227,20,227];
    rh=[308,1232,4,5,4,5];
    rk=[2,32];
    rl=[1550,1860,1750,5160];



    nombre="a";
    vra=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<6;i++){
        nota1=calificar(vra[i],ra[i],nombre+i,nota1);
    }

    nombre="b";
    vrb=[];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<10;i++){
        nota2=calificar(vrb[i],rb[i],nombre+i,nota2);
    }

    nombre="c";
    vrc=[];
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<3 ;i++){
        nota3=calificar(vrc[i],rc[i],nombre+i,nota3);
    }

    nombre="d";
    vrd=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<5;i++){
        nota4=calificar(vrd[i],rd[i],nombre+i,nota4);
    }

    nombre="e";
    vre=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<5;i++){
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
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrg);
    }
    for(i=0;i<6;i++){
        nota7=calificar(vrg[i],rg[i],nombre+i,nota7);
    }

    nombre="h";
    vrh=[];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrh);
    }
    for(i=0;i<6;i++){
        nota8=calificar(vrh[i],rh[i],nombre+i,nota8);
    }

    nombre="k";
    vrk=[];
    for(i=0;i<2;i++){
        cojerdatos(nombre+i,vrk);
    }
    for(i=0;i<2;i++){
        nota9=calificar(vrk[i],rk[i],nombre+i,nota9);
    }

    nombre="l";
    vrl=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrl);
    }
    for(i=0;i<4;i++){
        nota10=calificar(vrl[i],rl[i],nombre+i,nota10);
    }


    p1=(nota1+nota2+nota3)/19;
    p1=parseFloat(p1);
    p2=nota4/2.5;
    p2=parseFloat(p2);
    p3=$("#nota1").val();
    p3=parseFloat(p3);
    p4=(nota5+nota6)/10;
    p4=parseFloat(p4);
    p5=(nota7+nota8)/10;
    p5=parseFloat(p3);
    p6=nota9;
    p6=parseFloat(p6);
    p7=nota10/4;
    p7=parseFloat(p7);

    var notaFinal = p1+p2+p3+p4+p5+p6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal);
    $('#Calificar').attr('disabled', true);
    
    });
});
var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    p2=[];
    p5=[];
    p7=[];
    a=[];
    num=[];
    b=[];
    e=[3,2,2,1,2,3,3,2,2,1,2,3];
    c=[0,0,0,0,0,0,5600,104000,3400,5430,752000,450];
    d=[0,0,0,0,0,0,100,1000,100,10,100,10];
    rpa=[];
    rpb=[];
    rpc=[];
    prs=[];
    prsa=[];
    prsb=[];
    
    $("#nota1").val(0);

    y=[];x=[];
    NumerosAleatorios(6,a,99);
    NumerosAleatorios(6,b,99);
    NumerosAleatorios(12,x,12);
    NumerosAleatorios(6,num,99);
    

    for(i=0;i<12;i++){
        if(i<6){
        p2[i]='<li><input type="number" class="cajab"  value="'+a[i]+'" disabled> X <input type="number" class="cajab"  value="'+b[i]+'" disabled> = <input type="number" class="cajab" id="c'+i+'"></li>';
        $("#contenidoa").append(p2[i]);
        rpa[i]=a[i]*b[i];
        }else{
        p2[i]='<li><input type="number" class="cajab"  value="'+c[i]+'" disabled> ÷ <input type="number" class="cajab"  value="'+d[i]+'" disabled> = <input type="number" class="cajab" id="c'+i+'"></li>';
        $("#contenidob").append(p2[i]);
        rpa[i]=c[i]/d[i];
        }
    }

    for(i=0;i<6;i++){
        p5[i]='<li><label>'+x[i]+'</label><sup>'+e[i]+'</sup> = <input type="number" class="cajab" id="e'+i+'"></li>';
        rpc[i]=Math.pow(x[i],e[i]);
        $("#contenidoea").append(p5[i]);
    }
    for(i=6;i<12;i++){
        p5[i]='<li><label>'+x[i]+'</label><sup>'+e[i]+'</sup> = <input type="number" class="cajab" id="e'+i+'"></li>';
        rpc[i]=Math.pow(x[i],e[i]);
        $("#contenidoeb").append(p5[i]);
    }


    for(i=0;i<6;i++){
        p7[i]='<li><span class="radical2"><span class="n-root2"></span>&radic;</span><span class="radicand2">'+num[i]+'</span> = está entre <input type="number" class="cajab" id=x'+i+'> y <input type="number" class="cajab" id=y'+i+'></li>';
        prs[i]=Math.sqrt(num[i]);
        prsa[i]=Math.trunc(prs[i]-1);
        prsb[i]=Math.trunc(prs[i]+1);
        $("#contenidoc").append(p7[i]);
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

function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseFloat(auxm)); 
};

 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;


    nombre="p";
    vrp=[];
    rp=[1400,1400,25];
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vrp);
    }
    for(i=0;i<2;i++){
        calificar(vrp[i],rp[i],nombre+i);
    }



    nombre="c";
    vrc=[];
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<12;i++){
        calificar(vrc[i],rpa[i],nombre+i);
    }

    calificar(vrp[2],rp[2],"p2");
   

    nombre="e";
    vre=[];
   
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<12;i++){
        calificar(vre[i],rpc[i],nombre+i);
    }


    nombre="a";
    vra=[];
    ra=[125,36,27];
   
    for(i=0;i<3;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<3;i++){
        debugger;
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="x";
    vrx=[];
   
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrx);
    }
    for(i=0;i<6;i++){
        calificar(vrx[i], prsa[i],nombre+i);
    }

    nombre="y";
    vry=[];
   
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vry);
    }
    for(i=0;i<6;i++){
        calificar(vry[i], prsb[i],nombre+i);
    }

    
    nota1=$("#nota1").val();
    nota1=parseFloat(nota1);    

    

    var notaFinal = ((nota*9)/42)+nota1;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal );
    $('#Calificar').attr('disabled', true);
    
    });
});
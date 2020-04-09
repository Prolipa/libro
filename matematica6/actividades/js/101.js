var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    a=[];
    b=[];
    p1=[];
    rp=[];
    num=[];
    p2=[];
    var cont=0;
    NumerosAleatorios(4,a,4);
    NumerosAleatorios(99,b,99);
    p1[1]='<li><label>2</label><sup>2</sup> = 2 X 2 = <input type="number" class="cajab" id="d0"> → <span class="radical"><sup class="n-root"><input type="number" class="cajaa" id="a0"></sup>&radic;</span><span class="radicand"><input type="number" class="cajab" id="b0"></span> = <input type="number" class="cajab" id="c0"></li>';
    p1[2]='<li><label>5</label><sup>2</sup> = 5 X 5 = <input type="number" class="cajab" id="d1">→ <span class="radical"><sup class="n-root"><input type="number" class="cajaa" id="a1"></sup>&radic;</span><span class="radicand"><input type="number" class="cajab" id="b1"></span> = <input type="number" class="cajab" id="c1"></li>';
    p1[3]='<li><label>4</label><sup>3</sup> = 4 X 4 X 4 = <input type="number" class="cajab" id="d2">→ <span class="radical"><sup class="n-root"><input type="number" class="cajaa" id="a2"></sup>&radic;</span><span class="radicand"><input type="number" class="cajab" id="b2"></span> = <input type="number" class="cajab" id="c2"></li>';
    p1[4]='<li><label>10</label><sup>2</sup>5</sup> = 10 X 10 = <input type="number" class="cajab" id="d3">→ <span class="radical"><sup class="n-root"><input type="number" class="cajaa" id="a3"></sup>&radic;</span><span class="radicand"><input type="number" class="cajab" id="b3"></span> = <input type="number" class="cajab" id="c3"></li>';

    $("#contenidoa").append(p1[a[0]]);
    $("#contenidoa").append(p1[a[1]]);
    $("#contenidoa").append(p1[a[2]]);
    $("#contenidoa").append(p1[a[3]]);
    var i=0;

    do{
        debugger
        
        x=0;
        x=Math.sqrt(b[i]);
        if(Number.isInteger(x)){
            num.push(b[i]);
            rp.push(x);
            cont++;
        }
        i++

    }while(cont<9)

    for(i=0;i<9;i++){
        p2[i]='<li><span class="radical2"><span class="n-root2"></span>&radic;</span><span class="radicand2">'+num[i]+'</span> = <input type="number" class="cajab" id=x'+i+'></li>';
        $("#contenidob").append(p2[i]);
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
    nombre="a";
    vra=[];
    ra=[2,2,3,2];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    rb=[4,25,64,100];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<6;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    rc=[2,5,4,10];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<6;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[];
    rd=[4,25,64,100];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<4;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }

    nombre="x";
    vrx=[];
   
    for(i=0;i<9;i++){
        cojerdatos(nombre+i,vrx);
    }
    for(i=0;i<9;i++){
        calificar(vrx[i],rp[i],nombre+i);
    }

    

    

    var notaFinal = (nota*10)/22;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
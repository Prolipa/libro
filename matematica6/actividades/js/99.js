var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    a=[];
    b=[];
    c=[];
    d=[];
    e=[1,2,3,2,1,1,3,3,0,2,1,4];

    ra=[];
    rb=[];
    rc=[];
    p2=[];
    rp=[];

    NumerosAleatorios(3,a,9);
    NumerosAleatorios(3,b,9);
    NumerosAleatorios(3,c,9);
    NumerosAleatorios(12,d,15);
    

    for(i=0;i<2;i++){
        $("#a"+i).val(a[0]);
        $("#b"+i).val(a[1]);
        $("#c"+i).val(a[2]);
        
    }
    for(i=0;i<3;i++){
        $("#d"+i).val(b[0]);
        $("#e"+i).val(b[1]);
        $("#f"+i).val(b[2]);
        
    }
    for(i=0;i<4;i++){
        $("#g"+i).val(c[0]);
        $("#h"+i).val(c[1]);
        $("#i"+i).val(c[2]);
        
    }
    for(i=0;i<3;i++){
        ra[i]=a[i]*a[i];
        rb[i]=b[i]*b[i]*b[i];
        rc[i]=c[i]*c[i]*c[i]*c[i];
    }
    //Pregunta 2
    for(i=0;i<12;i++){
        p2[i]='<li><label>'+d[i]+'</label><sup>'+e[i]+'</sup>=<input type="number" class="cajaa" id="w'+i+'"></li>';
        if(i<3){
            $("#contenidoa").append(p2[i]);
        }
        if(i>2 && i<6){
            $("#contenidob").append(p2[i]);
        }
        if(i>5 && i<9){
            $("#contenidoc").append(p2[i]);
        }
        if(i>8 && i<12){
            $("#contenidod").append(p2[i]);
        }
        rp[i]=Math.pow(d[i],e[i]);

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
    nombre="x";
    vra=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<5;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="y";
    vrb=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<5;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="z";
    vrc=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<5;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="w";
    vrw=[];
    for(i=0;i<12;i++){
        cojerdatos(nombre+i,vrw);
    }
    for(i=0;i<12;i++){
        calificar(vrw[i],rp[i],nombre+i);
    }

    

    var notaFinal = (nota*10)/21;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
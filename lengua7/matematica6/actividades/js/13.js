var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   a=[];

   for(i=0;i<7;i++){
       a[i]='<li>(<input type="number" class="caja" id="a'+i+'" >,<input type="number" class="caja" id="b'+i+'" >)</li>'
       $('#contenido0').append(a[i]);
   }
   for(i=0;i<7;i++){
    a[i]='<li>(<input type="number" class="caja" id="c'+i+'" >,<input type="number" class="caja" id="d'+i+'" >)</li>'
    $('#contenido1').append(a[i]);
    }
    for(i=0;i<7;i++){
    a[i]='<li>(<input type="number" class="caja" id="e'+i+'" >,<input type="number" class="caja" id="f'+i+'" >)</li>'
    $('#contenido2').append(a[i]);
    }
    for(i=0;i<5;i++){
    a[i]='<li>(<input type="number" class="caja" id="g'+i+'" >,<input type="number" class="caja" id="h'+i+'" >)</li>'
    $('#contenido3').append(a[i]);
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
    nombre="a";
    vra=[];
    ra=[0,2,4,4,6,14,16];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<7;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    rb=[11,13,13,9,11,11,9];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<7;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    rc=[16,16,18,16,18,14,14];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<7;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[];
    rd=[7,5,3,3,1,1,3];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<7;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }

    nombre="e";
    vre=[];
    re=[10,6,4,2,2,4,4];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=0;i<7;i++){
        calificar(vre[i],re[i],nombre+i);
    }

    nombre="f";
    vrf=[];
    rf=[3,3,1,1,3,3,7];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrf);
    }
    for(i=0;i<7;i++){
        calificar(vrf[i],rf[i],nombre+i);
    }

    nombre="g";
    vrg=[];
    rg=[6,10,14,2,1];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrg);
    }
    for(i=0;i<5;i++){
        calificar(vrg[i],rg[i],nombre+i);
    }

    nombre="h";
    vrh=[];
    rh=[9,7,9,12,10];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrh);
    }
    for(i=0;i<5;i++){
        calificar(vrh[i],rh[i],nombre+i);
    }




   

    var notaFinal = (nota*10)/52;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
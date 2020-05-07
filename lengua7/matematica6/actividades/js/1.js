var titulos = "aplico";
function Inicio() {

    
} 





function Cargar(){
    rnd = [];   
    NumerosAleatorios(4,rnd);
    al = [0,300,600,900,1200];
    p = [300,1000,100,15];
    bl = [0,1500,2500,3500,4500];
    cl = [0,452,552,652,752,852];
    dl = [0,8915,8930,8945,8960,8975]; 
    $('#contenido1').append('<tr><td>a)</td><td>'+al[rnd[0]]+'</td><td>;</td><td>'+al[rnd[1]]+'</td><td>;</td><td>'+al[rnd[2]]+'</td><td>;</td><td>'+al[rnd[3]]+'</td><tr>');
    $('#respuesta1').append('<tr><td></td><td><input type="number" class="caja" id="a0" ></td><td>;</td><td><input type="number" class="caja" id="a1" ></td><td>;</td><td><input type="number" class="caja" id="a2" ></td><td>;</td><td><input type="number" class="caja" id="a3" ></td><tr>');
    $('#pa').append('<tr><td>Patrón:</td><td><input type="number" class="caja" id="p0" ></td></tr>');
    $('#contenido2').append('<tr><td>b)</td><td>'+bl[rnd[0]]+'</td><td>;</td><td>'+bl[rnd[1]]+'</td><td>;</td><td>'+bl[rnd[2]]+'</td><td>;</td><td>'+bl[rnd[3]]+'</td><tr>');
    $('#respuesta2').append('<tr><td></td><td><input type="number" class="caja" id="b0" ></td><td>;</td><td><input type="number" class="caja" id="b1" ></td><td>;</td><td><input type="number" class="caja" id="b2" ></td><td>;</td><td><input type="number" class="caja" id="b3" ></td><tr>');
    $('#pb').append('<tr><td>Patrón:</td><td><input type="number" class="caja" id="p1" ></td></tr>');
    $('#contenido3').append('<tr><td>c)</td><td>'+cl[rnd[0]]+'</td><td>;</td><td>'+cl[rnd[1]]+'</td><td>;</td><td>'+cl[rnd[2]]+'</td><td>;</td><td>'+cl[rnd[3]]+'</td>'+'<td>;</td><td>'+cl[5]+'</td><tr>');
    $('#respuesta3').append('<tr><td></td><td><input type="number" class="caja" id="c0" ></td><td>;</td><td><input type="number" class="caja" id="c1" ></td><td>;</td><td><input type="number" class="caja" id="c2" ></td><td>;</td><td><input type="number" class="caja" id="c3" ></td><td>;</td><td><input type="number" class="caja" id="c4" ></td><tr>');
    $('#pc').append('<tr><td>Patrón:</td><td><input type="number" class="caja" id="p2" ></td></tr>');
    $('#contenido4').append('<tr><td>d)</td><td>'+dl[rnd[0]]+'</td><td>;</td><td>'+dl[rnd[1]]+'</td><td>;</td><td>'+dl[rnd[2]]+'</td><td>;</td><td>'+dl[rnd[3]]+'</td>'+'<td>;</td><td>'+dl[5]+'</td><tr>');
    $('#respuesta4').append('<tr><td></td><td><input type="number" class="caja" id="d0" ></td><td>;</td><td><input type="number" class="caja" id="d1" ></td><td>;</td><td><input type="number" class="caja" id="d2" ></td><td>;</td><td><input type="number" class="caja" id="d3" ></td><td>;</td><td><input type="number" class="caja" id="d4" ></td><tr>');
    $('#pd').append('<tr><td>Patrón:</td><td><input type="number" class="caja" id="p3" ></td></tr>');

 };

 function NumerosAleatorios(cantidadNumeros,myArray){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*4);
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
    vra.push(0);
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i+1],al[i+1],nombre+i);
    }

    nombre="b";
    vrb=[];
    vrb.push(0);
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<5;i++){
        calificar(vrb[i+1],bl[i+1],nombre+i);
    }

    nombre="c";
    vrc=[];
    vrc.push(0);
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<5;i++){
        calificar(vrc[i+1],cl[i+1],nombre+i);
    }

    nombre="d";
    vrd=[];
    vrd.push(0);
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<5;i++){
        calificar(vrd[i+1],dl[i+1],nombre+i);
    }

    nombre="p";
    vrp=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrp);
    }
    for(i=0;i<5;i++){
        calificar(vrp[i],p[i],nombre+i);
    }

    var notaFinal = (nota*10)/22;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
var titulos = "aplico";
function Inicio() {

    
} 


function Cargar(){
    rnd = []; 
    pg=[];  
    pgd=[]; 
    NumerosAleatorios(3,rnd);
    pg[1]='<tr><td style="width=10%"><li></li></td><td><input type="number"  class="caja" value="10" disabled> ; <input type="number"  class="caja" value="15" disabled>  ;  <input type="number"  class="caja" value="18" disabled>  ;  <input type="number" id="a0" class="caja">  ;  <input type="number" id="a1" class="caja">  ;  <input type="number" id="a2" class="caja">  ;  <input type="number" id="a3" class="caja">  ;  <input type="number" id="a4" class="caja"><label for="">Patrón:</label> <input type="number" id="pa0" class="caja">;  <input type="number" id="pa1" class="caja"></td></tr>';
    pg[2]='<tr><td style="width=10%"><li></li></td><td><input type="number"  class="caja" value="26" disabled> ; <input type="number"  class="caja" value="34" disabled>  ;  <input type="number"  class="caja" value="31" disabled>  ;  <input type="number" id="b0" class="caja">  ;  <input type="number" id="b1" class="caja">  ;  <input type="number" id="b2" class="caja">  ;  <input type="number" id="b3" class="caja">  ;  <input type="number" id="b4" class="caja"><label for="">Patrón:</label> <input type="number" id="pb0" class="caja">;  <input type="number" id="pb1" class="caja"></td></tr>';
    pg[3]='<tr><td style="width=10%"><li></li></td><td><input type="number"  class="caja" value="370" disabled> ; <input type="number"  class="caja" value="357" disabled>  ;  <input type="number"  class="caja" value="366" disabled>  ;  <input type="number" id="c0" class="caja">  ;  <input type="number" id="c1" class="caja">  ;  <input type="number" id="c2" class="caja">  ;  <input type="number" id="c3" class="caja">  ;  <input type="number" id="c4" class="caja"><label for="">Patrón:</label> <input type="number" id="pc0" class="caja">;  <input type="number" id="pc1" class="caja"></td></tr>';
    pgd[1]='<p>¿Cuántos cuadrados verdes tienen las figuras de la sucesión?</p> <input type="number"  class="caja" id="cpa0">;<input type="number"  class="caja" id="cpa1">;<input type="number"  class="caja" id="cpa2">;<input type="number"  class="caja" id="cpa3">';
    pgd[2]='<p>¿Cuántos cuadrados blancos hay?</p><input type="number"  class="caja" id="cpb0">;<input type="number"  class="caja" id="cpb1">;<input type="number"  class="caja" id="cpb2">;<input type="number"  class="caja" id="cpb3">';
    pgd[3]='<p>¿Cuántos cuadrados verdes y blancos tendrá la figura que ocupa el lugar 15?</p> <label>Verdes</label><input type="number"  class="caja" id="cpc0">;<label>Blancos</label><input type="number"  class="caja" id="cpc1">';


    $('#contenido').append(pg[rnd[0]],pg[rnd[1]],pg[rnd[2]]);
    $('#pregunta2').append(pgd[rnd[0]],pgd[rnd[1]],pgd[rnd[2]]);
   
 };

 function NumerosAleatorios(cantidadNumeros,myArray){
    
   
    while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*3);
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
    al=[23,26,31,34,39];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<5;i++){
        calificar(vra[i],al[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    bl=[39,36,44,41,49];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<5;i++){
        calificar(vrb[i],bl[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    cl=[353,362,349,358,345];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<5;i++){
        calificar(vrc[i],cl[i],nombre+i);
    }

   
    nombre="pa";
    vrpa=[];
    pa=[5,3];
    for(i=0;i<2;i++){
        cojerdatos(nombre+i,vrpa);
    }
    for(i=0;i<2;i++){
        calificar(vrpa[i],pa[i],nombre+i);
    }

    nombre="pb";
    vrpb=[];
    pb=[8,-3];
    for(i=0;i<2;i++){
        cojerdatos(nombre+i,vrpb);
    }
    for(i=0;i<2;i++){
        calificar(vrpb[i],pb[i],nombre+i);
    }

    nombre="pc";
    vrpc=[];
    pc=[-13,9];
    for(i=0;i<2;i++){
        cojerdatos(nombre+i,vrpc);
    }
    for(i=0;i<2;i++){
        calificar(vrpc[i],pc[i],nombre+i);
    }

    nombre="cpc";
    cpc=[];
    rpc=[16,38];
    for(i=0;i<2;i++){
        cojerdatos(nombre+i,cpc);
    }
    for(i=0;i<2;i++){
        calificar(cpc[i],rpc[i],nombre+i);
    }

    nombre="cpa";
    cpa=[];
    rpa=[2,3,4,5];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,cpa);
    }
    for(i=0;i<4;i++){
        calificar(cpa[i],rpa[i],nombre+i);
    }

    nombre="cpb";
    cpb=[];
    rpb=[10,12,14,16];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,cpb);
    }
    for(i=0;i<4;i++){
        calificar(cpb[i],rpb[i],nombre+i);
    }

    var notaFinal = (nota*10)/31;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
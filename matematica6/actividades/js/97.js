var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    p1=[];
    p2=[0];
    p3=[0];
    p4=[0];

    for(i=1;i<=10;i++){
        p1[i]='<tr><td class="danger"><label>'+i+'</label></td><td><input type="number" class="cajaa" id="a'+i+'"><sup><input type="number" class="cajab" id="b'+i+'"></sup></td><td><input type="number" class="cajaz" id="c'+i+'">X<input type="number" class="cajaz" id="d'+i+'">X<input type="number" class="cajaz" id="z'+i+'"></td><td><input type="number" class="cajac" id="e'+i+'"></td></tr>';
        $("#contenidoa").append(p1[i]); 
        p2.push(i);       
    }
    for(i=11;i<=20;i++){
        p1[i]='<tr><td class="danger"><label>'+i+'</label></td><td><input type="number" class="cajaa" id="a'+i+'"><sup><input type="number" class="cajab" id="b'+i+'"></sup></td><td><input type="number" class="cajaz" id="c'+i+'">X<input type="number" class="cajaz" id="d'+i+'">X<input type="number" class="cajaz" id="z'+i+'"></td><td><input type="number" class="cajac" id="e'+i+'"></td></tr>';
        $("#contenidob").append(p1[i]);      
        p2.push(i);       
    }
    for(i=1;i<=20;i++){
        p3.push(3);
    }
    for(i=1;i<=20;i++){
        p4[i]=p2[i]*p2[i]*p2[i];
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
    vra=[0];
    ra=[0];
    for(i=1;i<=20;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=1;i<=20;i++){
        calificar(vra[i],p2[i],nombre+i);
    }

    nombre="b";
    vrb=[0];
    rb=[];
    for(i=1;i<=20;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=1;i<=20;i++){
        calificar(vrb[i],p3[i],nombre+i);
    }

    nombre="c";
    vrc=[0];
    rc=[];
    for(i=1;i<=20;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=1;i<=20;i++){
        calificar(vrc[i],p2[i],nombre+i);
    }

    nombre="d";
    vrd=[0];
    rd=[];
    for(i=1;i<=20;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=1;i<=20;i++){
        calificar(vrd[i],p2[i],nombre+i);
    }

    nombre="e";
    vre=[0];
    rc=[];
    for(i=1;i<=20;i++){
        cojerdatos(nombre+i,vre);
    }
    for(i=1;i<=20;i++){
        calificar(vre[i],p4[i],nombre+i);
    }

    nombre="z";
    vrz=[0];
    rd=[];
    for(i=1;i<=20;i++){
        cojerdatos(nombre+i,vrz);
    }
    for(i=1;i<=20;i++){
        calificar(vrz[i],p2[i],nombre+i);
    }


    var notaFinal = (nota*10)/120;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
var titulos = "aplico";
function Inicio() {
    
} 

function Cargar(){
    p3=[];
    numa=[];
    dena=[];

    numb=[];
    denb=[];
    resp=[];

    $("#nota1").val(0);

    NumerosAleatorios(10,numa,20);
    NumerosAleatorios(10,dena,20);

    NumerosAleatorios(10,numb,20);
    NumerosAleatorios(10,denb,20);
    

    for(i=0;i<10;i++){

    p3[i]='<div class="fraction">'+
        '<span class="fup">'+numa[i]+'</span>'+
        '<span class="bar">/</span>'+
        '<span class="fdn">'+dena[i]+'</span>'+
    '</div>'+
    '<select name="r" id="r'+i+'" class="form-control" style="width:60px; display: inline-table;">'+
    '<option value="0"></option>'+
    '<option value="1"><</option>'+
    '<option value="2">></option>'+
    '</select>'+
    '<div class="fraction">'+
        '<span class="fup">'+numb[i]+'</span>'+
        '<span class="bar">/</span>'+
        '<span class="fdn">'+denb[i]+'</span>'+
    '</div>';
    auxa=numa[i]/dena[i];
    auxb=numb[i]/denb[i];
    if(auxa<auxb){
        resp[i]=1;
    }else{
        resp[i]=2;
    }
    
    $("#d"+i).append(p3[i]);

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
    debugger
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

    
    nombre="r";
    vrr=[];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrr);
    }
    for(i=0;i<10;i++){
        calificar(vrr[i],resp[i],nombre+i);
    }

    nombre="a";
    vra=[];
    ra=[5, 8, 7, 8, 2, 8, 3, 8, 7, 8, 5, 8, 3, 8, 2, 8, 4, 8, 6, 8, 3, 8, 1, 2, 3, 4, 7, 8];
    for(i=0;i<28;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<28;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nota1=$("#nota1").val();
    nota1=parseFloat(nota1);


    var notaFinal = ((nota*9)/38)+nota1;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal+"/10" );
    $('#Calificar').attr('disabled', true);
    
    });
});



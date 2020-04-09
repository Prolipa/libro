function Inicio() {
} 
id=0;

function Cargar(){

   //Pregunta 1
   
   rnd = []; 
   rndd = []; 
   vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
   cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
   a=[];
   r=[];
   c=[];
   d=[];
   b=[];
   bts=[];
   NumerosAleatorios(4,rnd,4);



   a[1]='<div class="btn selectB id=p1">868</div>';
   a[2]='<div class="btn selectB id=p2">1 068</div>';
   a[3]='<div class="btn selectB id=p3">1 368</div>';
   a[4]='<div class="btn selectB id=p4">1 468</div>';

   $('#contenidoa').append(a[rnd[0]]);
   $('#contenidob').append(a[rnd[1]]);
   $('#contenidoc').append(a[rnd[2]]);
   $('#contenidod').append(a[rnd[3]]);

  

   b[1]='<div class="btn selectB id=p5">868</div>';
   b[2]='<div class="btn selectB id=p6">1 068</div>';
   b[3]='<div class="btn selectB id=p7">1 368</div>';
   b[4]='<div class="btn selectB id=p8">1 468</div>';

   $('#contenidoe').append(b[rnd[0]]);
   $('#contenidof').append(b[rnd[1]]);
   $('#contenidog').append(b[rnd[2]]);
   $('#contenidoh').append(b[rnd[3]]);

 
$(".selectA").bind("click", function() {
    $(".selectA").removeClass("selectClick"); //quitamos la clase select de todos los botones
    $(this).addClass("selectClick");
})
$(".selectB").bind("click", function() {
    $(".selectB").removeClass("selectClick"); //quitamos la clase select de todos los botones
    $(this).addClass("selectClick");
})

//Pregunta 2
NumerosAleatorios(6,rndd,6);

c[1]='<div class="col col-md-4">'+
'<p>25 y 50</p>'+
'</div>'+
'<div class="col col-md-3">'+
'<div class="form-check text-right">'+
'<label class="form-check-label" for="a1">50</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a1">'+
'<p></p>'+
'<label class="form-check-label" for="a2">5</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a2">'+
'<p></p>'+
'<label class="form-check-label" for="a3">25</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a3">'+
'</div>';

c[2]='<div class="col col-md-4">'+
'<p>25 y 50</p>'+
'</div>'+
'<div class="col col-md-3">'+
'<div class="form-check text-right">'+
'<label class="form-check-label" for="a1">50</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a1">'+
'<p></p>'+
'<label class="form-check-label" for="a2">5</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a2">'+
'<p></p>'+
'<label class="form-check-label" for="a3">25</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a3">'+
'</div>';


c[3]='<div class="col col-md-4">'+
'<p>25 y 50</p>'+
'</div>'+
'<div class="col col-md-3">'+
'<div class="form-check text-right">'+
'<label class="form-check-label" for="a1">50</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a1">'+
'<p></p>'+
'<label class="form-check-label" for="a2">5</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a2">'+
'<p></p>'+
'<label class="form-check-label" for="a3">25</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a3">'+
'</div>';


c[4]='<div class="col col-md-4">'+
'<p>25 y 50</p>'+
'</div>'+
'<div class="col col-md-3">'+
'<div class="form-check text-right">'+
'<label class="form-check-label" for="a1">50</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a1">'+
'<p></p>'+
'<label class="form-check-label" for="a2">5</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a2">'+
'<p></p>'+
'<label class="form-check-label" for="a3">25</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a3">'+
'</div>';

c[5]='<div class="col col-md-4">'+
'<p>25 y 50</p>'+
'</div>'+
'<div class="col col-md-3">'+
'<div class="form-check text-right">'+
'<label class="form-check-label" for="a1">50</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a1">'+
'<p></p>'+
'<label class="form-check-label" for="a2">5</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a2">'+
'<p></p>'+
'<label class="form-check-label" for="a3">25</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a3">'+
'</div>';

c[6]='<div class="col col-md-4">'+
'<p>25 y 50</p>'+
'</div>'+
'<div class="col col-md-3">'+
'<div class="form-check text-right">'+
'<label class="form-check-label" for="a1">50</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a1">'+
'<p></p>'+
'<label class="form-check-label" for="a2">5</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a2">'+
'<p></p>'+
'<label class="form-check-label" for="a3">25</label>'+
'<input class="form-check-input" type="checkbox" value="" id="a3">'+
'</div>';


$("#contenidop2a").append(c[rndd[0]]);
$("#contenidop2b").append(c[rndd[1]]);
$("#contenidop2c").append(c[rndd[2]]);
$("#contenidop2d").append(c[rndd[3]]);
$("#contenidop2e").append(c[rndd[4]]);
$("#contenidop2f").append(c[rndd[5]]);

    
   
    
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
$("#p3").click(function(){
    id=1;
});
 $("#Calificar").click(function(){
    nota = 0;
    ra=[1,4,7,3,2,6,8,7,4,2,2,1,6,6];
    nombre="a";
    vra=[];
    for(i=0;i<14;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<14;i++){
        calificar(vra[i],ra[i],nombre+i);
    }
    if(id==1){

        
            nota=nota+1;
            $("p3").css("background-color", "green");
     } else{
             $("p3").css("background-color", "red");
         }

    

    


    var notaFinal = (nota*10)/14;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
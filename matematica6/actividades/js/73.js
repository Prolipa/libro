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
   div=[362,125,281,152];
   num=[4652,2064,1020,912];

   NumerosAleatorios(4,rnd,4);
   NumerosAleatorios(8,rndd,8);

   b[1]='<div class="row">'+
        '<div class="col col-md-4">'+
            '<img src="img/i1_p79_act73.png" alt="">'+
        '</div>'+
        '<div class="col col-md-8">'+
            '<label for="">P = 10 cm +</label><input type="number" class="caja" id="a0"> <label for="">cm</label>+</label><input type="number" class="caja" id="a1"> <label for="">cm</label>+</label><input type="number" class="caja" id="a2"> <label for="">cm</label>'+
            '<p>El perímetro es de <label for="">P = </label> <input type="number" class="caja" id="a3"></p>'+
        '</div>'+
    '</div>';

    b[2]='<div class="row">'+
        '<div class="col col-md-4">'+
            '<img src="img/i2_p79_act73.png" alt="">'+
        '</div>'+
        '<div class="col col-md-8">'+
        '<label for="">P = 8 cm +</label><input type="number" class="caja" id="b0"> <label for="">cm</label>+</label><input type="number" class="caja" id="b1"> <label for="">cm</label>+</label><input type="number" class="caja" id="b2"> <label for="">cm</label>'+
        '<p>El perímetro es de <label for="">P = </label> <input type="number" class="caja" id="b3"></p>'+
        '</div>'+
    '</div>';

    b[3]='<div class="row">'+
        '<div class="col col-md-4">'+
            '<img src="img/i3_p79_act73.png" alt="">'+
        '</div>'+
        '<div class="col col-md-8">'+
            '<label for="">P = </label><input type="number" class="caja" id="c0" ><label for="">cm</label> +<input type="number" class="caja" id="c1" > <label for="">cm</label>+</label><input type="number" class="caja" id="c2" > <label for="">cm</label>+</label><input type="number" class="caja" id="c3" > <label for="">cm</label>'+
            '<p>El perímetro es de <label for="">P = </label> <input type="number" class="caja" id="c4" ></p>'+
        '</div>'+
    '</div>';
    

    b[4]='<div class="row">'+
        '<div class="col col-md-4">'+
            '<img src="img/i4_p79_act73.png" alt="">'+
        '</div>'+
        '<div class="col col-md-8">'+
            '<label for="">P = </label><input type="number" class="caja" id="d0" ><label for="">cm</label> +<input type="number" class="caja" id="d1" > <label for="">cm</label>+</label><input type="number" class="caja" id="d2" > <label for="">cm</label>+</label><input type="number" class="caja" id="d3" > <label for="">cm</label>'+
            '<p>El perímetro es de <label for="">P = </label> <input type="number" class="caja" id="d4" ></p>'+
        '</div>'+
    '</div>';

    $('#contenidoa').append(b[rnd[0]]);
    $('#contenidob').append(b[rnd[1]]);
    $('#contenidoc').append(b[rnd[2]]);
    $('#contenidod').append(b[rnd[3]]);



   


    
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
    nombre="num";
    nombre1="div";
    vrnum=[];
    vrdiv=[];
    ra=[12,10,12,44];
    rc=[4,4,4,4,16];
    rd=[5,5,5,5,20];
    rb=[5,8,5,26];
    
  

    nombre="a";
    vra=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<4;i++){
        calificar(vra[i],ra[i],nombre+i);
    }

    nombre="b";
    vrb=[];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<4;i++){
        calificar(vrb[i],rb[i],nombre+i);
    }

    nombre="c";
    vrc=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<5;i++){
        calificar(vrc[i],rc[i],nombre+i);
    }

    nombre="d";
    vrd=[];
    for(i=0;i<5;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<5;i++){
        calificar(vrd[i],rd[i],nombre+i);
    }

   
    

    var notaFinal = (nota*10)/18;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
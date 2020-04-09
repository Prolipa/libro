var titulos = "aplico";
function Inicio() {

    
} 


function Cargar(){
    a=[];
    rnd=[];
    NumerosAleatorios(3,rnd,3);
    a[1]='<div class="row">'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="56" disabled><input type="number" class="caja" id="a0">'+
            '<input type="number"class="caja" id="a1"><input type="number" class="caja" id="a2">'+
            '<input type="number"class="caja" id="a3"><input type="number" class="caja" id="a4">'+
            '<input type="number"class="caja" id="a5"><input type="number" class="caja" id="a6">'+
            '<input type="number"class="caja" id="a7">'+
        '</div>'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="36" disabled><input type="number" class="caja" id="b0" >'+
            '<input type="number"class="caja" id="b1"><input type="number" class="caja" id="b2" >'+
            '<input type="number"class="caja" id="b3"><input type="number" class="caja" id="b4" >'+
            '<input type="number"class="caja" id="b5"><input type="number" class="caja" id="b6" >'+
            '<input type="number"class="caja" id="b7"> '+
        '</div>'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="24" disabled><input type="number" class="caja" id="c0">'+
            '<input type="number"class="caja" id="c1"><input type="number" class="caja" id="c2">'+
            '<input type="number"class="caja" id="c3"><input type="number" class="caja" id="c4">'+
            '<input type="number"class="caja" id="c5"><input type="number" class="caja" id="c6">'+
            '<input type="number"class="caja" id="c7">'+
        '</div>'+
        '<div class="col col-md-3">'+
            '<p><input type="number"class="caja1" value="56" disabled>=<input type="number" class="caja1" id="d0">X<input type="number" class="caja1" id="d1"></p>'+
            '<p><input type="number"class="caja1" value="36" disabled>=<input type="number" class="caja1" id="d2">X<input type="number" class="caja1" id="d3"></p>'+
            '<p><input type="number"class="caja1" value="24" disabled>=<input type="number" class="caja1" id="d4">X<input type="number" class="caja1" id="d5"></p>'+
            '<p>MCD=<input type="number" class="caja1" id="d6"></p>'+
        '</div>'+
    '</div>';

   a[2]='<div class="row">'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="21" disabled><input type="number" class="caja" id="aa0">'+
            '<input type="number"class="caja" id="aa1"><input type="number" class="caja" id="aa2">'+
            '<input type="number"class="caja" id="aa3"><input type="number" class="caja" id="aa4">'+
            '<input type="number"class="caja" id="aa5"><input type="number" class="caja" id="aa6">'+
            '<input type="number"class="caja" id="aa7">'+
        '</div>'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="42" disabled><input type="number" class="caja" id="bb0" >'+
            '<input type="number"class="caja" id="bb1"><input type="number" class="caja" id="bb2" >'+
            '<input type="number"class="caja" id="bb3"><input type="number" class="caja" id="bb4" >'+
            '<input type="number"class="caja" id="bb5"><input type="number" class="caja" id="bb6" >'+
            '<input type="number"class="caja" id="bb7"> '+
        '</div>'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="77" disabled><input type="number" class="caja" id="cc0">'+
            '<input type="number"class="caja" id="cc1"><input type="number" class="caja" id="cc2">'+
            '<input type="number"class="caja" id="cc3"><input type="number" class="caja" id="cc4">'+
            '<input type="number"class="caja" id="cc5"><input type="number" class="caja" id="cc6">'+
            '<input type="number"class="caja" id="cc7">'+
        '</div>'+
        '<div class="col col-md-3">'+
            '<p><input type="number"class="caja1" value="21" disabled>=<input type="number" class="caja1" id="dd0">X<input type="number" class="caja1" id="dd1"></p>'+
            '<p><input type="number"class="caja1" value="42" disabled>=<input type="number" class="caja1" id="dd2">X<input type="number" class="caja1" id="dd3">X<input type="number" class="caja1" id="dd4"></p>'+
            '<p><input type="number"class="caja1" value="77" disabled>=<input type="number" class="caja1" id="dd5">X<input type="number" class="caja1" id="dd6"></p>'+
            '<p>MCD=<input type="number" class="caja1" id="dd7"></p>'+
        '</div>'+
    '</div>';

    a[3]='<div class="row">'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="24" disabled><input type="number" class="caja" id="aaa0">'+
            '<input type="number"class="caja" id="aaa1"><input type="number" class="caja" id="aaa2">'+
            '<input type="number"class="caja" id="aaa3"><input type="number" class="caja" id="aaa4">'+
            '<input type="number"class="caja" id="aaa5"><input type="number" class="caja" id="aaa6">'+
            '<input type="number"class="caja" id="aaa7">'+
        '</div>'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="180" disabled><input type="number" class="caja" id="bbb0" >'+
            '<input type="number"class="caja" id="bbb1"><input type="number" class="caja" id="bbb2" >'+
            '<input type="number"class="caja" id="bbb3"><input type="number" class="caja" id="bbb4" >'+
            '<input type="number"class="caja" id="bbb5"><input type="number" class="caja" id="bbb6" >'+
            '<input type="number"class="caja" id="bbb7"><input type="number" class="caja" id="bbb8" >'+
            '<input type="number"class="caja" id="bbb9"> '+
        '</div>'+
        '<div class="col col-md-3">'+
            '<input type="number"class="caja" value="36" disabled><input type="number" class="caja" id="ccc0">'+
            '<input type="number"class="caja" id="ccc1"><input type="number" class="caja" id="ccc2">'+
            '<input type="number"class="caja" id="ccc3"><input type="number" class="caja" id="ccc4">'+
            '<input type="number"class="caja" id="ccc5"><input type="number" class="caja" id="ccc6">'+
            '<input type="number"class="caja" id="ccc7">'+
        '</div>'+
        '<div class="col col-md-3">'+
            '<p><input type="number"class="caja1" value="24" disabled>=<input type="number" class="caja1" id="ddd0">X<input type="number" class="caja1" id="ddd1"></p>'+
            '<p><input type="number"class="caja1" value="180" disabled>=<input type="number" class="caja1" id="ddd2">X<input type="number" class="caja1" id="ddd3">X<input type="number" class="caja1" id="ddd4"></p>'+
            '<p><input type="number"class="caja1" value="36" disabled>=<input type="number" class="caja1" id="ddd5">X<input type="number" class="caja1" id="ddd6"></p>'+
            '<p>MCD=<input type="number" class="caja1" id="ddd7"></p>'+
        '</div>'+
    '</div>';

    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);
    
 };

function descompon(num,vctn,vctd,cont){

    for(var j=1;j<=num;j++){
        debugger;
   
        res=num%j;
        if(res==0){

            num=num/j;
            vctn.push(num);
            vctd.push(j);
            j=1;
            cont=cont+1;
          
        }  
      }
      return cont;
}

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
    vra=[];vrb=[];vrc=[];vrd=[];vraa=[];vrbb=[];vrcc=[];vrdd=[];vraaa=[];vrbbb=[];vrccc=[];vrddd=[];
    nombre="a";
    vcta=[2,28,2,14,2,7,7,1];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vra);
    }
    for(i=0;i<8;i++){
        calificar(vcta[i],vra[i],nombre+i);
    }
    nombre="b";
    vctb=[2,18,2,9,3,3,3,1];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vrb);
    }
    for(i=0;i<8;i++){
        calificar(vctb[i],vrb[i],nombre+i);
    }
    nombre="c";
    vctc=[2,12,2,6,2,3,3,1];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vrc);
    }
    for(i=0;i<8;i++){
        calificar(vctc[i],vrc[i],nombre+i);
    }
    nombre="d";
    vctd=[2,7,22,32,23,3,4];
    for(i=0;i<7;i++){
        cojerdatos(nombre+i,vrd);
    }
    for(i=0;i<7;i++){
        calificar(vctd[i],vrd[i],nombre+i);
    }

    /////////////////////////////////////////

    nombre="aa";
    vctaa=[3,7,7,1];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vraa);
    }
    for(i=0;i<4;i++){
        calificar(vctaa[i],vraa[i],nombre+i);
    }
    nombre="bb";
    vctbb=[2,21,3,7,7,1];
    for(i=0;i<6;i++){
        cojerdatos(nombre+i,vrbb);
    }
    for(i=0;i<6;i++){
        calificar(vctbb[i],vrbb[i],nombre+i);
    }
    nombre="cc";
    vctcc=[7,11,11,1];
    for(i=0;i<4;i++){
        cojerdatos(nombre+i,vrcc);
    }
    for(i=0;i<4;i++){
        calificar(vctcc[i],vrcc[i],nombre+i);
    }
    nombre="dd";
    vctdd=[3,7,2,3,7,7,11,7];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vrdd);
    }
    for(i=0;i<8;i++){
        calificar(vctdd[i],vrdd[i],nombre+i);
    }

    //////////////////////////////////////

    nombre="aaa";
    vctaaa=[2,12,2,6,2,3,3,1];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vraaa);
    }
    for(i=0;i<8;i++){
        calificar(vctaaa[i],vraaa[i],nombre+i);
    }
    nombre="bbb";
    vctbbb=[2,90,2,45,3,15,3,5,5,1];
    for(i=0;i<10;i++){
        cojerdatos(nombre+i,vrbbb);
    }
    for(i=0;i<10;i++){
        calificar(vctbbb[i],vrbbb[i],nombre+i);
    }
    nombre="ccc";
    vctccc=[2,18,2,9,3,3,3,1];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vrccc);
    }
    for(i=0;i<8;i++){
        calificar(vctccc[i],vrccc[i],nombre+i);
    }
    nombre="ddd";
    vctddd=[23,3,22,32,5,22,32,12];
    for(i=0;i<8;i++){
        cojerdatos(nombre+i,vrddd);
    }
    for(i=0;i<8;i++){
        calificar(vctddd[i],vrddd[i],nombre+i);
    }



    
    
    var notaFinal = (nota*10)/31;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/87");
    $('#Calificar').attr('disabled', true);
    
    });
});
var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
    rnd = []; 
    rndd = []; 
    vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
    cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
    a=[];
    b=[];
    c=[];
    d=[];
 
    NumerosAleatorios(3,rnd,3);
    NumerosAleatorios(8,rndd,8);
 
     a[1]='<p>MCM de 3 y 8</p>'+
    '<p><input type="number" class="caja1" value="3" disabled><input type="number" class="caja1" value="8" disabled>||<input type="number" class="caja1" id="a0"></p>'+
    '<p><input type="number" class="caja1" id="a1"><input type="number" class="caja1" id="a2">||<input type="number" class="caja1" id="a3"></p>'+
    '<p><input type="number" class="caja1" id="a4"><input type="number" class="caja1" id="a5">||<input type="number" class="caja1" id="a6"></p>'+
    '<p><input type="number" class="caja1" id="a7"><input type="number" class="caja1" id="a8">||<input type="number" class="caja1" id="a9"></p>'+
    '<p><input type="number" class="caja1" id="a10"></p>'+
    '<p><label for="">MCM de 3 y 8 =</label>  <input type="number" class="caja1" id="e0"></p>';

    
    a[2]='<p>MCM de 6 y 8</p>'+
    '<p><input type="number" class="caja1" value="6" disabled><input type="number" class="caja1" value="8" disabled>||<input type="number" class="caja1" id="b0"></p>'+
    '<p><input type="number" class="caja1" id="b1"><input type="number" class="caja1" id="b2">||<input type="number" class="caja1" id="b3"></p>'+
    '<p><input type="number" class="caja1" id="b4"><input type="number" class="caja1" id="b5">||<input type="number" class="caja1" id="b6"></p>'+
    '<p><input type="number" class="caja1" id="b7"><input type="number" class="caja1" id="b8">||<input type="number" class="caja1" id="b9"></p>'+
    '<p><input type="number" class="caja1" id="b10"></p>'+
    '<p><label for="">MCM de 6 y 8 =</label>  <input type="number" class="caja1" id="e1"></p>';


    a[3]='<p>MCM de 4 y 6</p>'+
    '<p><input type="number" class="caja1" value="4" disabled><input type="number" class="caja1" value="6" disabled>||<input type="number" class="caja1" id="c0"></p>'+
    '<p><input type="number" class="caja1" id="c1"><input type="number" class="caja1" id="c2">||<input type="number" class="caja1" id="c3"></p>'+
    '<p><input type="number" class="caja1" id="c4"><input type="number" class="caja1" id="c5">||<input type="number" class="caja1" id="c6"></p>'+
    '<p><input type="number" class="caja1" id="c7" disabled><input type="number" class="caja1" id="c8"></p>'+
    '<p><label for="">MCM de 4 y 6 =</label>  <input type="number" class="caja1" id="e2"></p>'+
    '<p>MCM de 7 y 6</p>'+
    '<p><input type="number" class="caja1" value="7" disabled><input type="number" class="caja1" value="6" disabled>||<input type="number" class="caja1" id="d0"></p>'+
    '<p><input type="number" class="caja1" id="d1"><input type="number" class="caja1" id="d2">||<input type="number" class="caja1" id="d3"></p>'+
    '<p><input type="number" class="caja1" id="d4"><input type="number" class="caja1" id="d5">||<input type="number" class="caja1" id="d6"></p>'+
    '<p><input type="number" class="caja1" id="d7"></p>'+
    '<p><label for="">MCM de 7 y 6 =</label>  <input type="number" class="caja1" id="e3"></p>';

     
     
    $('#contenidoa').append(a[rnd[0]]);
    $('#contenidob').append(a[rnd[1]]);
    $('#contenidoc').append(a[rnd[2]]);

    

    


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

function Multiplos(rand1,vct,conte,cont,nombre) {
    num=rand1;
    for(j=1;j<=9;j++){
        aux=rand1;
        num=num+aux;
        nom=nombre+cont;
        vct.push(num);    
        var i = document.createElement("INPUT");
        i.setAttribute("type","number");
        i.setAttribute("id",nom);
        i.setAttribute("class","caja");
        $(conte).append(i);
        cont=cont+1;
    }
    return cont;
};

function cojerdatos(nombre,vct){
    sim="#";
    auxm=0;
    nom=sim+nombre;
    auxm=$(nom).val();
    vct.push(parseInt(auxm)); 
};

 $(document).ready(function(){
 Cargar();
 $("#Calificar").click(function(){
    nota = 0;

    vr1=[];vr2=[];vr3=[];vr4=[];vr5=[];vr6=[];vr7=[];vr8=[];vr9=[];vr10=[];vr11=[];vr12=[];vr13=[];

        nombre="a";
        vct1=[2,3,4,2,3,2,2,3,1,3,1];
        for(i=0;i<11;i++){
            cojerdatos(nombre+i,vr1);
        }
        for(i=0;i<11;i++){
            calificar(vct1[i],vr1[i],nombre+i);
        }

        nombre="b";
        vct2=[2,3,4,2,3,2,2,3,1,3,1];
        for(i=0;i<11;i++){
            cojerdatos(nombre+i,vr2);
        }
        for(i=0;i<11;i++){
            calificar(vct2[i],vr2[i],nombre+i);
        }

        nombre="c";
        vct3=[2,2,3,2,1,3,3,0,1]
        for(i=0;i<9;i++){
            cojerdatos(nombre+i,vr3);
        }
        for(i=0;i<9;i++){
            calificar(vct3[i],vr3[i],nombre+i);
        }

        nombre="d";
        vct4=[2,7,3,3,7,1,7,1]
        for(i=0;i<8;i++){
            cojerdatos(nombre+i,vr4);
        }
        for(i=0;i<8;i++){
            calificar(vct4[i],vr4[i],nombre+i);
        }

        nombre="e";
        vct5=[24,24,12,42]
        for(i=0;i<4;i++){
            cojerdatos(nombre+i,vr5);
        }
        for(i=0;i<4;i++){
            calificar(vct5[i],vr5[i],nombre+i);
        }
   



    var notaFinal = (nota*10)/43;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
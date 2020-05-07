var titulos = "aplico";
function Inicio() {
} 

function Cargar(){
   
    rnd = []; 
    rndd = []; 
    vct1=[];vct2=[];vct3=[];vct4=[];vct5=[];vct6=[];vct7=[];vct8=[];
    cont1=0;cont2=0;cont3=0;cont4=0;cont5=0;cont6=0;cont7=0;cont8=0;
    cont1=0;
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

 
    $('#contenidoa').append(a[1]);
    a[4]='<p><label for="">D <sub>6</sub></label> = <span id="contenido4"></span></p>'
    a[6]='<p><label for="">D <sub>8</sub></label> = <span id="contenido6"></span></p>'
    
    $('#contenidob').append(a[6],a[4]);
    contenido="#contenido4"; 
    cont4=Multiplos(6,vct4,contenido,cont4,"d");
    contenido="#contenido6"; 
    cont6=Multiplos(8,vct6,contenido,cont6,"f");

    


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

        nombre="d";
        for(i=0;i<cont4;i++){
            cojerdatos(nombre+i,vr4);
        }
        for(i=0;i<cont4;i++){
            calificar(vct4[i],vr4[i],nombre+i);
        }

        nombre="e";
        vct5=[24]
        for(i=0;i<1;i++){
            cojerdatos(nombre+i,vr5);
        }
        for(i=0;i<1;i++){
            calificar(vct5[i],vr5[i],nombre+i);
        }

        nombre="f";
        for(i=0;i<cont6;i++){
            cojerdatos(nombre+i,vr6);
        }
        for(i=0;i<cont6;i++){
            calificar(vct6[i],vr6[i],nombre+i);
        }
        mcd=$("#mcd").val();

        if(mcd==24){
            nota=nota+1;
            $("#mcd").css("background-color", "green");
        }
        else{
            $("#mcd").css("background-color", "red");
         }
   

        



    var notaFinal = (nota*10)/43;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/31");
    $('#Calificar').attr('disabled', true);
    
    });
});
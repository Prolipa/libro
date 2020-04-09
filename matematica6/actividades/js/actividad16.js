var titulos = "aplico";
vct=new Array();
a=new Array();
b=new Array();
c=new Array();
d=new Array();

function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $('#Calificar').attr('disabled', false);
    notaFinal=0;
    $("#txtNota").text(+notaFinal +"/10");
    nombre="a";
    for(i=1;i<=8;i++){
        limpiar(nombre+i);        
    }
    nombre="b";
    for(i=1;i<=15;i++){
        limpiar(nombre+i);        
    }
    nombre="c";
    for(i=1;i<=2;i++){
        limpiar(nombre+i);        
    }
    nombre="d";
    for(i=1;i<=2;i++){
        limpiar(nombre+i);        
    }    
    
   
} 
function Cargar() {
    Inicio();
  
}
function calificar(num,a,nombre){
    
    sim="#";
    nom=sim+nombre;
    vct.push(num);
    if(a==num){
        nota=nota+1;
        $(nom).css("background-color", "green");
     }else{
         $(nom).css("background-color", "red");
     }
    
    return nota;

}

function limpiar(nombre){
    sim="#";
    nom=sim+nombre;
    nota=0;
    
    $(nom).css("background-color", "white");
    

}
$(document).ready(function() {
    Cargar();
    
    
    $("#Calificar").click(function() {
        nota = 0;

        a[1]=$("#a1").val();
        a[2]=$("#a2").val();
        a[3]=$("#a3").val();
        a[4]=$("#a4").val();
        a[5]=$("#a5").val();
        a[6]=$("#a6").val();
        a[7]=$("#a7").val();
        a[8]=$("#a8").val();

        ra=[0,901,179,324,80,438,179438901,48,80048324];
        nombre="a";
         for(i=1;i<=8;i++){
            notaa=calificar(a[i],ra[i],nombre+i)             
         }

         b[1]=$("#b1").val();
         b[2]=$("#b2").val();
         b[3]=$("#b3").val();
         b[4]=$("#b4").val();
         b[5]=$("#b5").val();
         b[6]=$("#b6").val();
         b[7]=$("#b7").val();
         b[8]=$("#b8").val();
         b[9]=$("#b9").val();
         b[10]=$("#b10").val();
         b[11]=$("#b11").val();
         b[12]=$("#b12").val();
         b[13]=$("#b13").val();
         b[14]=$("#b14").val();
         b[15]=$("#b15").val();
         rb=[0,2,5,1,3,1,6,422512316,2000000,500000,10000,2000,300,10,6,422512316]

         
         nombre="b";
         for(i=1;i<=15;i++){
            notab=calificar(b[i],rb[i],nombre+i)             
         }

         c[1]=$("#c1").val();
         c[2]=$("#c2").val();
         rc=[0,694185372,453813677]
         nombre="c";
         for(i=1;i<=2;i++){
            notac=calificar(c[i],rc[i],nombre+i)             
         }

         d[1]=$("#d1").val();
         d[2]=$("#d2").val();
         rd=[0,82482,45134000]
         nombre="d";
         for(i=1;i<=2;i++){
            notad=calificar(d[i],rd[i],nombre+i)             
         }

         nota=notad;

         var notaFinal = (nota*10)/27;
         notaFinal = notaFinal.toFixed(2)
         $("#txtNota").text(+notaFinal +"/10");
         $('#Calificar').attr('disabled', true);

    
    });
     
 
});
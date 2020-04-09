var titulos = "aplico";
var vrb = new Array();
var vrc = new Array();
var vrd = new Array();
var vre = new Array();
var vrf = new Array();
var vrg = new Array();
var vrh = new Array();

  
function Inicio() {
    $('#nota-informativa').slideUp('slow');
}
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

}
function cojerdatos(nombre,vct){
    sim="#";
    nom=sim+nombre;
    aux=$(nom).val();
    vct.push(parseInt(aux)); 
    
}


function Cargar() {
    Inicio();
    
   
  
};

$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;

        vct1=[7,3,4,8,22,0];
        vct2=[6,9,5,7,22,1];
        vct3=[4,6,2,1,13,0];
        vct4=[2,6,8,9,25,0];
        vct5=[2,4,1,1,8,0];
        vct6=[3,0,7,5,15,1];
        vct7=[9,3,1,8,21,1];


        
        nombre="b";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vrb);
        }
        nombre="c";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vrc);
        }
        nombre="d";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vrd);
        }
        nombre="e";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vre);
        }
        nombre="f";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vrf);
        }
        nombre="g";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vrg);
        }
        nombre="h";
        for(i=0;i<6;i++){
            cojerdatos(nombre+i,vrh);
        }


        nombre="b";
        for(i=0;i<6;i++){
            calificar(vct1[i],vrb[i],nombre+i)
        }
        nombre="c";
        for(i=0;i<6;i++){
            calificar(vct2[i],vrc[i],nombre+i)
        }
        nombre="d";
        for(i=0;i<6;i++){
            calificar(vct3[i],vrd[i],nombre+i)
        }
        nombre="e";
        for(i=0;i<6;i++){
            calificar(vct4[i],vre[i],nombre+i)
        }
        nombre="f";
        for(i=0;i<6;i++){
            calificar(vct5[i],vrf[i],nombre+i)
        }
        nombre="g";
        for(i=0;i<6;i++){
            calificar(vct6[i],vrg[i],nombre+i)
        }
        nombre="h";
        for(i=0;i<6;i++){
            calificar(vct7[i],vrh[i],nombre+i)
        }
        


        

        var notaFinal = (nota*10)/42;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    });

});
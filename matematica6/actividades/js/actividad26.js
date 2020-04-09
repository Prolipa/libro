var titulos = "aplico";
var vct1 = new Array();
var vct2 = new Array();
var vra = new Array();
var vrb = new Array();
var vrc = new Array();
var resultado1= new Array();
var $cont1=0;
var $cont2=0;
var $cont3=0;
  
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
    
    var $rand1=Math.floor(Math.random() * 20)+1;
    var $rand2=Math.floor(Math.random() * 20)+1;
    
    
    if($rand1>0){
        document.datos.num.value = $rand1;
        document.datos.num3.value = $rand1;
        for(var $i=0;$i<$rand1;$i++){
            if($rand1%$i==0){
            id="a";
            nom=id+$cont1;
            vct1.push($i);    
            var i = document.createElement("INPUT");
            i.setAttribute("type","text");
            i.setAttribute("id",nom);
            i.setAttribute("class","li4");
            document.body.append(i);
            $("#contenido").append(i);
            $cont1=$cont1+1;
            }
        }
    }
    
    if($rand2>0){
        document.datos.num2.value = $rand2;
        document.datos.num4.value = $rand2;
        for(var $i=0;$i<$rand2;$i++){
            if($rand2%$i==0){
            id="b";    
            nom=id+$cont2;
            vct2.push($i)    
            var i = document.createElement("INPUT");
            i.setAttribute("type","text");
            i.setAttribute("id",nom);
            i.setAttribute("class","li4");
            document.body.append(i);
            $("#contenido2").append(i);
            $cont2=$cont2+1;
            }
        }

    }

    for ( i = 0; i < vct1.length; i++) {
        for ( j = 0; j < vct2.length; j++) {
        if(vct1[i]==vct2[j]){
            id="c";
            nom=id+$cont3;
             resultado1.push(vct1[i]);
             var j = document.createElement("INPUT");
             j.setAttribute("type","text");
             j.setAttribute("id",nom);
             j.setAttribute("class","li4");
             document.body.append(j);
             $("#contenido3").append(j); 
             $cont3=$cont3+1;
        }
    }
    }
  
};

$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        
        nombre="a";
        for(i=0;i<$cont1;i++){
            cojerdatos(nombre+i,vra);
        }

        nombre="b";
        for(i=0;i<$cont2;i++){
            cojerdatos(nombre+i,vrb);
        }

        nombre="a";
        for(i=0;i<$cont1;i++){
            calificar(vct1[i],vra[i],nombre+i)
        }

        nombre="b";
        for(i=0;i<$cont2;i++){
            calificar(vct2[i],vrb[i],nombre+i)
        }

        nombre="c";
        for(i=0;i<$cont3;i++){
            cojerdatos(nombre+i,vrc);
        }



        nombre="c";
        for(i=0;i<$cont3;i++){
            calificar(resultado1[i],vrc[i],nombre+i)
        }





        opciones=$cont1+$cont2+$cont3;

        var notaFinal = (nota*10)/opciones;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

    });

});
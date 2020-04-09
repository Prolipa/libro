var titulos = "refuerzo";
var datos = ["704 529 000","701 529 000","708 529 000", "703 529 000", "710 529 000"];
var vct1a = ["701 529 000", "703 529 000", "704 529 000", "708 529 000", "710 529 000"];
var vct1b = ["701 529 000", "704 529 000", "703 529 000", "708 529 000", "710 529 000"];
var vct1c = ["710 529 000", "708 529 000", "704 529 000", "703 529 000", "701 529 000"];
var vct1d = ["710 529 000", "704 529 000", "703 529 000", "701 529 000", "708 529 000"];
var ddatos = ["638 500 100", "419 300 200", "159 600 700", "837 200 700", "594 199 300"];
var vct2a = ["837 200 700", "638 500 100", "594 199 300", "419 300 200", "159 600 700"];
var vct2b = ["159 600 700", "419 300 200", "594 199 300", "638 500 100", "837 200 700"];
var vct2c = ["837 200 700", "594 199 300", "638 500 100", "419 300 200", "159 600 700"];
var vct2d = ["159 600 700", "594 199 300", "638 500 100", "419 300 200", "837 200 700"];
var id= new Array();
cont=0;


function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 

function Refrescar(){
    location.reload(true);
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

function Cargar() {
    Inicio();
    document.datos.num1.value = datos[0];
    document.datos.num2.value = datos[1];
    document.datos.num3.value = datos[2];
    document.datos.num4.value = datos[3];

    document.datos.numa1.value = vct1a[0];
    document.datos.numa2.value = vct1a[1];
    document.datos.numa3.value = vct1a[2];
    document.datos.numa4.value = vct1a[3];

    document.datos.numb1.value = vct1b[0];
    document.datos.numb2.value = vct1b[1];
    document.datos.numb3.value = vct1b[2];
    document.datos.numb4.value = vct1b[3];

    document.datos.numc1.value = vct1c[0];
    document.datos.numc2.value = vct1c[1];
    document.datos.numc3.value = vct1c[2];
    document.datos.numc4.value = vct1c[3];

    document.datos.numd1.value = vct1d[0];
    document.datos.numd2.value = vct1d[1];
    document.datos.numd3.value = vct1d[2];
    document.datos.numd4.value = vct1d[3];


    document.datos.dnum1.value = ddatos[0];
    document.datos.dnum2.value = ddatos[1];
    document.datos.dnum3.value = ddatos[2];
    document.datos.dnum4.value = ddatos[3];

    document.datos.dnuma1.value = vct2a[0];
    document.datos.dnuma2.value = vct2a[1];
    document.datos.dnuma3.value = vct2a[2];
    document.datos.dnuma4.value = vct2a[3];

    document.datos.dnumb1.value = vct2b[0];
    document.datos.dnumb2.value = vct2b[1];
    document.datos.dnumb3.value = vct2b[2];
    document.datos.dnumb4.value = vct2b[3];

    document.datos.dnumc1.value = vct2c[0];
    document.datos.dnumc2.value = vct2c[1];
    document.datos.dnumc3.value = vct2c[2];
    document.datos.dnumc4.value = vct2c[3];

    document.datos.dnumd1.value = vct2d[0];
    document.datos.dnumd2.value = vct2d[1];
    document.datos.dnumd3.value = vct2d[2];
    document.datos.dnumd4.value = vct2d[3];


   


};


$(document).ready(function() {
    Cargar();
    $("#Calificar").click(function() {
        nota = 0;
        rp3 = 0;
        rpt = 154;
   
        if(rpt == rp3){
            nota = nota+1;
            $("#num").css("background-color", "green");
        }else{
            $("#num").css("background-color", "red");
        }
        

        $(':radio:checked').each(function(i){
            aux= $(this).val();
            auxn=parseInt(aux);
            id.push(auxn);
            cont=cont+1
           });
        
        vr=[3,2];
        
        nombre="nom";

        for(i=0;i<2;i++){
            calificar(id[i],vr[i],nombre+i);
        }


        var notaFinal = (nota*10)/3;
        notaFinal = notaFinal.toFixed(2)
        $("#txtNota").text(+notaFinal +"/10");
        $('#Calificar').attr('disabled', true);

       

    
        
    });
    
});
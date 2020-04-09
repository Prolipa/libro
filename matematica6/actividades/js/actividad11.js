var titulos = "aplico";

function Inicio() {
    $('#nota-informativa').slideUp('slow');
} 


function Cargar(){

    Inicio();
    $('#nota-informativa').slideUp('slow');
     
    $('#Calificar').attr('disabled', false);

    $variable1="Un millón seiscientos noventa y dos mil setecientos catorce";
    $variable2="Quinientos doce millones ochocientos cuarenta y seis mil ciento once";
    $variable3="Siete millones trescientos nueve mil novecientos cincuenta y dos";
    $variable4="Novecientos cuarenta y siete millones veinticinco mil cuatrocientos quince";

    $numa=7309952;
    $numb=947025415;
    $numc=1692714;
    $numd=512846111;

    document.datos.numa.value = $numa;
    document.datos.numb.value = $numb;
    document.datos.numc.value = $numc;
    document.datos.numd.value = $numd;


    document.datos.variable1.value = $variable1;
    document.datos.variable2.value = $variable2;
    document.datos.variable3.value = $variable3;
    document.datos.variable4.value = $variable4;
     

 };
 $(document).ready(function(){
    


 Cargar();
 $("#Calificar").click(function(){
    nota = 0;
    
    
    
   

    
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(+notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    
    });
});
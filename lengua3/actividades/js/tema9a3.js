var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 4)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 3)
});
 function f_iniciar() {
    var pal1=['<span class="drag3 bg_palabra c1">camino</span>',
        '<span class="drag3 bg_palabra c2">zapatos</span>',
        '<span class="drag3 bg_palabra c3">agua</span>',
        '<span class="drag3 bg_palabra c4">manzanas</span>',
        '<span class="drag3 bg_palabra c5">gente</span>',
        '<span class="drag3 bg_palabra c6">cartelera</span>'];
    var pal2=['<div><b>amable</b></div>',
        '<div><b>informativa</b></div>',
        '<div><b>largo</b></div>',
        '<div><b>limpios</b></div>',
        '<div><b>dulces</b></div>',
        '<div><b>fría</b></div>'];
    
    pal1.sort(f_randomico);
    var p2vec1=['1','2','3','4','5','6'];
    var p2aux2=[];
    $(".textos").append(pal1);
    var myArray2 = ['0','1','2','3','4','5'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 6 ; i++) {
            var c1=myArray2[i-1];
            $(".p2cim1"+i).html(pal2[c1]);
            p2aux2.push(p2vec1[c1]);
            
        };
    $(".drag3").draggable({
        revert:"invalid",
        zIndex:5,
        containment: ".actividad17",
        scroll: false,
    });
    
   $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            
        }
   });
}
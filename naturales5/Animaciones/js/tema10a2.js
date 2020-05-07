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
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 4)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});
for (var i =0; i < 53; i++) {
    $('.enc'+(i+1)).click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                
            }

        })    
}
for (var i =0; i < 13; i++) {
    $('.sub'+(i+1)).click(function(){

            if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }

        })    
}
 function f_iniciar() {
    var p2vec1=['palabras','átona','oración','cuento','letra','casa','canción','atención','trabalenguas','tónica','adjetivo','poesía','cualidad'];
    var myArray1 = ['0','1','2','3','4','5','6','7','8','9','10','11','12'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 13 ; i++) {
            var c=myArray1[i-1];
            $("#p2im"+i).html(p2vec1[c]);
            
        };
}
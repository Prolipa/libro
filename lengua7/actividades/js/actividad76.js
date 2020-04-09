var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';

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
    validNumero(0, 6, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 6)
});

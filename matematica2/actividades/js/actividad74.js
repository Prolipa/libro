//var n1=0,sum_total=0,cont=0,ejer=1,itemsT=5,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 10, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 10)
});
function f_iniciar() {
  var numero = parseInt((Math.random() * 20) + 10);
  var numero1 = parseInt((Math.random() * 20) + 10);   	
  var a74cim1=[],a74cim2=[];
    for (var i = 0; i < numero; i++) {
      a74cim1.push('<img src="img/i1_p75_act74.jpg" style="mix-blend-mode: multiply;" alt="">')
    }
    for (var i = 0; i < numero1; i++) {
      a74cim2.push('<img src="img/i2_p75_act74.jpg" style="mix-blend-mode: multiply;" alt="">')
    }
    $('#a74im1').html(a74cim1);
    $('#a74im2').html(a74cim2);
}
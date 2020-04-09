var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
            validNumero(0, 8, 1);
        });
        document.getElementById('nota1_1').addEventListener('keyup', () => {
            validMaxIngreso(document.getElementById('nota1_1'), 8)
        });
 function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a103dcon1=$('#a103dcon1').val().toLowerCase();
        var a103dcon2=$('#a103dcon2').val().toLowerCase();
        if (a103dcon1=='suma' || a103dcon1=='adición') {
          cor++;
          f_ok($('#a103dcon1'));
        }else{
          inc++;
          f_no($('#a103dcon1'));
        }
        if (a103dcon2=='resta' || a103dcon2=='sustracción') {
          cor++;
          f_ok($('#a103dcon2'));
        }else{
          inc++;
          f_no($('#a103dcon2'));
        }

        var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+8;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(8-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
        Calculo_nota();
   }
}
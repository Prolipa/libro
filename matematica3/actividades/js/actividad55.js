var ejer = 1,
    itemsT = (10 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var i = 0,
    resp = [],
    tmp;
var contenidos = [
    ['<li><span>En las líneas abiertas</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="nunca"></span> <span>se juntan sus extremos.</span></li><br>'],
    ['<li><span>En las líneas cerradas</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="siempre"></span> <span>se juntan sus extremos.</span></li><br>'],
    ['<li><span>El número 8 está formado por una línea</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="curva"></span> <span>que es </span><span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="cerrada"></span></li><br>'],
    ['<li><span>La unidad de las medidas de longitud es el</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="metro"></span> </li><br>'],
    ['<li><span>Un metro tiene</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="100"></span> <span> centímetros y </span><span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="1000"></span> milímetros.</li><br>'],
    ['<li><span>El número 1 está formado por una línea</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="recta"></span> <span> que es </span><span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="abierta"></span></li><br>'],
    ['<li><span>Un decímetro tiene</span> <span><input type="text" class="set-width form-control b1"><input type="hidden" class="set-width form-control bb1" value="10"></span> <span>centímetros</span></li><br>'],
]
contenidos.sort(f_randomico);
f_iniciar();

function f_iniciar() {
    $.each(contenidos, function(i, item) {
        $(".lista1").append(item);
    });
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".bb1").each(function() {
            resp.push($(this).val()); //almacenamos las respuestas
        });
        $(".b1").each(function(index) {
            //soluc.push($( this).val()); //almacenamos las respuetas ingresadas
            tmp = $(this);
            if (tmp.val() == resp[index]) { //comparamos las respuestas
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        Calculo_nota();
    });
}
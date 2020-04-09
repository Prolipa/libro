var ejer=1,itemsT=(10 *ejer),cont=0,tmp,cor=0,inc=0,calificacion=10,claseAnimada='animate bounceIn';
var i=0,resp=[],tmp;
var contenidos = [
    ['<li><span>¿Qué forma y color tienen las señales informativas del gráfico?</span> <span><input type="text" class="form-control"></span></li><br>'],
    ['<li><span>¿Qué otras señales de tránsito observas en las carreteras?</span> <span><input type="text" class="form-control"></span></li><br>'],
    ['<li><span>¿A qué distancia de la primera señal informativa se encuentra la segunda señal?</span> <span><input type="text" class="form-control"></span></li><br>'],
    ['<li><span>¿A qué distancia se encuentra la tercera señal con relación a la segunda?</span> <span><input type="text" class="form-control"></span></li><br>'],
]
contenidos.sort(f_randomico);
f_iniciar();
function f_iniciar(){
    $.each( contenidos, function( i, item ) {
        $( ".lista1" ).append( item );
    });
}
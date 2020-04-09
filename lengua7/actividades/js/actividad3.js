var titulos = 'aplico';

var loadTxt = [ 
    'Hace muchos años, antes de la llegada de los españoles, un cacique de los mantas, llamado Shygui, se casó con una mujer humilde, pero muy inteligente, con quien tuvo una hija. La niña era muy bella y tenía unos grandes ojos de color verde intenso. Sus padres le dieron el nombre de Umiña. La mamá de Umiña era curandera y sacerdotisa de Jocay, que era la ciudad más importante de los manteños, identificada con la actual ciudad de Manta.',
    '<br>La madre instruyó a Umiña en todos los secretos de su oficio. Cuando la princesa cumplió veintiún años, murió su mamá y ella quedó sola con su padre. Al año siguiente, los amigos del cacique le aconsejaron que tomara por esposa a otra mujer, una hechicera.<br><br>La nueva esposa tenía muy mal carácter y, pronto, el pueblo empezó a hacerla a un lado. Toda la atención se centró en Umiña, quien se había dedicado a hacer el bien a todo aquel que le solicitase sus servicios médicos y religiosos, continuando así con la obra que su madre le había encomendado.<br><br> La madrastra de Umiña se sintió celosa por la fama de la joven y, en represalia, decidió embrujar al cacique. Dominado por sus hechicerías, Shygui emitió una sentencia ordenando que su hija fuera atada a una balsa, llevada mar afuera durante tres días y luego abandonada sin agua ni alimento. El decreto fue cumplido en parte.<br><br> Por la gratitud que le tenían, los soldados no pudieron dejar atada a Umiña y, a los tres días, la balsa llegó a una tribu vecina. En este lugar encontró amigos que la llevaron de regreso a su casa, sana y salva.<br><br>Aún más enojada por este resultado, la madrastra volvió a hechizar al cacique y le hizo decretar que Umiña fuese llevada a las más altas montañas, atada y abandonada en las nieves, sin abrigo ni alimento. A los tres meses, apareció nuevamente diciendo que un cóndor la había traído. Todo el pueblo de Jocay la recibió con muestras de gran alegría.<br><br> La bruja, enfurecida por la burla que había sufrido, quiso obligar a su esposo a ordenar la muerte de Umiña, pero Shygui, ya sanado de la hechicería y conociendo las acciones malévolas de su nueva esposa, tomó venganza contra ella y, después de castigarla, la expulsó de la casa. Esta lo amenazó con que antes de tres lunas estaría muerto.<br><br> En efecto, el tiempo se cumplió y una madrugada, mientras Shygui dormía tranquilamente, la bruja atacó a su esposo y le dio muerte. Umiña dormía custodiada en otra casa y se percató de inmediato de lo que le ocurría a su padre, por lo que llamó a los soldados para que capturasen a la bruja.<br><br> Cien soldados la persiguieron hasta un poco más allá de un elevado cerro, pero regresaron diciendo que la malvada mujer se había convertido en un lobo. El cacique fue sepultado en su propia casa. Umiña, llorando desconsoladamente, se echó sobre la tumba de su padre, negándose a tomar alimento, y murió a los pocos días, tras ordenar que nadie moviera su cuerpo de ese lugar. <img src="img/i2_p10_act3.jpg" class="img-responsive" alt="">',
    'Los pobladores se retiraron, obedeciendo la orden de la princesa Umiña. Al poco tiempo comenzaron a notar que su corazón no se había descompuesto, sino que se transformaba en una piedra roja del tamaño de un puño. Estaba intacto y en la parte superior tenía dos puntos verdes, como los ojos de Umiña. Con el tiempo, estos puntos fueron creciendo hasta cubrir todo el corazón, que quedó convertido en una bellísima esmeralda, que era tan grande como un huevo de avestruz. <br><br> El nuevo cacique tomó la esmeralda y llamó a un orfebre para que, de la mitad de la esmeralda hacia arriba, tallara el busto de Umiña. Se construyó un hermoso templo para adorar a la esmeralda como a una diosa. <br><br> Desde aquel momento, todo enfermo que tocaba la esmeralda Umiña quedaba inmediatamente sano. La fama de la diosa de la salud llegó a muchas partes del continente; las personas venían de Perú, de México y de América Central trayendo enfermos para que se curasen, y perlas, esmeraldas pequeñas y oro en polvo como ofrendas.  <br><br> Cuando los españoles llegaron, escucharon las historias sobre esta diosa benéfica y quisieron conocerla, pero los sacerdotes, temiendo la codicia de los recién llegados, se llevaron la esmeralda para ocultarla en las montañas y nunca más se la volvió a ver.<h6>S/A (2016). “Leyenda la Diosa Umiña”. ViajandoX. Recuperado de https://goo.gl/gRcafY</h6>',
    ' <h4><b style="color:#009DCC">La diosa Umiña</b></h4><span style="color:#009DCC">Leyenda de Manabí</span><br><span style="color:#009DCC">(Adaptación)</span>'];

document.getElementById('tar1').innerHTML = loadTxt[0];
document.getElementById('tar2').innerHTML = loadTxt[1];
document.getElementById('tar3').innerHTML = loadTxt[2];
document.getElementById('tar4').innerHTML = loadTxt[3];
    
enviarEventosListener("tar1"); 
enviarEventosListener("tar2"); 
enviarEventosListener("tar3"); 
enviarEventosListener("tar4");


function validNum(){
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
  }
}
function separarTexto(cadena,id){
    var separador = " ";
    var splitCadena = [];
    splitCadena = cadena.split(separador);
    addTag(splitCadena,id);
    
}
function addTag(arregloCadena,id){
    for(j=0; j< arregloCadena.length; j++){
        var test = document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML = test + '<span>'+ ' ' +arregloCadena[j]+'</span>';
    } 
    
}
function underlinetext(id) {
    var txt = "";

        if (window.getSelection) {
                txt = window.getSelection();
        }
        else if (document.getSelection) {
            txt = document.getSelection();
        } else if (document.selection) {
            txt = document.selection.createRange().text;
        }
        var str = document.getElementById(id).innerHTML;
        var res = str.replace(txt.toString(),'<span class="underline">'+txt.toString()+'</span>');
        document.getElementById(id).innerHTML = res;
}
function enviarEventosListener(id)
{
    document.getElementById(id).addEventListener('mouseup',function(){
        underlinetext(id);
    });
    

}

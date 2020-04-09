var resp1,resp2,resp3,resp4;
$('.enc').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
    if ($("#R1").hasClass("subrayar")) {
        $("#R2").removeClass("subrayar")
        $("#R3").removeClass("subrayar")
         resp1 = 0;

    } else if ($("#R2").hasClass("subrayar")) {
        $("#R1").removeClass("subrayar")
        $("#R3").removeClass("subrayar")
         resp1 = 0;

    } else if ($("#R3").hasClass("subrayar")) {
        $("#R1").removeClass("subrayar")
        $("#R2").removeClass("subrayar")
        resp1 = 1;
    }
});


$('.enc1').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
    if ($("#S1").hasClass("subrayar")) {
        $("#S2").removeClass("subrayar")
        $("#S3").removeClass("subrayar")
        resp2 = 0;

    } else if ($("#S2").hasClass("subrayar")) {
        $("#S1").removeClass("subrayar")
        $("#S3").removeClass("subrayar")
        resp2 = 1;

    } else if ($("#S3").hasClass("subrayar")) {
        $("#S1").removeClass("subrayar")
        $("#S2").removeClass("subrayar")
        resp2 = 0;
    }
});


$('.enc2').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
    if ($("#T1").hasClass("subrayar")) {
        $("#T2").removeClass("subrayar")
        $("#T3").removeClass("subrayar")
        resp3=1;

    } else if ($("#T2").hasClass("subrayar")) {
        $("#T1").removeClass("subrayar")
        $("#T3").removeClass("subrayar")
        resp3=0;

    } else if ($("#T3").hasClass("subrayar")) {
        $("#T1").removeClass("subrayar")
        $("#T2").removeClass("subrayar")
        resp3=0;
    }
});


$('.enc3').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
    if ($("#U1").hasClass("subrayar")) {
        $("#U2").removeClass("subrayar")
        $("#U3").removeClass("subrayar")
        resp4 =1;

    } else if ($("#U2").hasClass("subrayar")) {
        $("#U1").removeClass("subrayar")
        $("#U3").removeClass("subrayar")
        resp4 =0;

    } else if ($("#U3").hasClass("subrayar")) {
        $("#U1").removeClass("subrayar")
        $("#U2").removeClass("subrayar")
        resp4 =0;
    }
});

$('.enc4').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }
    if ($("#V1").hasClass("encierra")) {
        $("#V2").removeClass("encierra")
        $("#V3").removeClass("encierra")

    } else if ($("#V2").hasClass("encierra")) {
        $("#V1").removeClass("encierra")
        $("#V3").removeClass("encierra")

    } else if ($("#V3").hasClass("encierra")) {
        $("#V1").removeClass("encierra")
        $("#V2").removeClass("encierra")
    }
});
$('.enc5').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }

});

var resp_cor_len3_act13_p14 = {
    inicio: ["Awapít", "img/i2_p44_act64.png"],
    desarrollo: ["Shuar chicham", "img/i3_p44_act64.png"],
    final: ["Tsa´fíqui", "img/i4_p44_act64.png"],
    final2: ["Kichwa", "img/i5_p44_act64.png"],

}
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i2_p44_act64.png', 'img/i3_p44_act64.png', 'img/i4_p44_act64.png', 'img/i5_p44_act64.png'];
var loadTxt = ['Awapít', 'Shuar chicham', 'Tsa´fíqui', 'Kichwa'];
var divs = $(".imagen, .texto");
var cont_resp_cor = [];
var divsImg, divsTxt;
var indice;
var contador_nota = 0;



initElementos("imagen", loadImg);
initElementos("texto", loadTxt);
insertDraggable();
enviarEventosListener("caja_img1", "caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2", "caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3", "caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img4", "caja_txt4"); //caja1 img y texto

function genIdRandom() {
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a * b;
}

function enviarEventosListener(id, id2) {
    document.getElementById(id).addEventListener('dragstart', function() {
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop', function() {
        onDrop(id2, divsImg);
    });
    document.getElementById(id).addEventListener('drop', function() {
        onDropReturn(id);
    });
    document.getElementById('bt_comprobar').addEventListener('click', contarRespCorrectaDnD);

}

function onDropReturn(id) {
    divsImg = $('#' + id).find("img")[0].alt;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign([], cont_resp_cor);

    for (i = 0; i < objetoLength; i++) {

        if (Object.values(objComparar)[i].indexOf(divsImg) != -1) {

            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];

        }

    }

}

function dragStart(id) {
    divsImg = $('#' + id).find("img")[0].alt;

}

function insertaParOnDrop(id) {
    divsTxt = $('#' + id).find("span").text();

    var prop = Object.keys(cont_resp_cor);

    cont_resp_cor[genIdRandom()] = [divsTxt, divsImg];

}

function onDrop(id, divsImg) {
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador = 0;
    if (objetoLength == 0) {
        insertaParOnDrop(id);
    } else {
        for (i = 0; i < objetoLength; i++) {
            if (Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1) {
                contador = contador + 1;

            }

        }
        if (contador == 0) {
            insertaParOnDrop(id);
        }
    }
}

function initElementos(classDiv, arrayElement) { //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if (classDiv == "imagen") {
            $('#' + cajas[i].id).html('<img class="center"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
        } else if (classDiv == "texto") {
            $('#' + cajas[i].id).html('<span class= "cajas-cuentos"  id="' + arrayElement[i] + '">' + arrayElement[i] + '</span>');
        }

    }
}

function insertDraggable() {


    for (i = 0; i < divs.length; i++) {
        $('#' + divs[i].id).attr({
            "ondrop": "drop(event)",
            "ondragover": "allowDrop(event)"
        });
    }
    for (i = 0; i < divs.find("img").length; i++) {
        $('#img' + i).attr({
            "draggable": "true",
            "ondragstart": "drag(event)"
        });

    }
    /*     for(i=0; i< divs.find("span").length; i++){
            $('#'+divs.find("span")[i].id).attr({
                "draggable" : "true",
                "ondragstart" : "drag(event)"
            });

        } */





}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];

    //i=respcorrectas j= a comprobar
    for (var i = 0; i < Object.values(resp_cor_len3_act13_p14).length; i++) {
        for (j = 0; j < Object.values(cont_resp_cor).length; j++) {
            if (JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])) {
                contador_nota = contador_nota + 1;
                arrayCorrestarColorear.push(Object.values(cont_resp_cor)[j][0]);
            } else {
                $('.texto').addClass('incorrecto')
            }
        }
    }
    for (i = 0; i < arrayCorrestarColorear.length; i++) {
        var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
        document.getElementById(id).style.background = '#65CE6D';


    }

    calcularNotaGeneral(
        4,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 2;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
         //$('#txtNota').html(calculo.toFixed(2) + ' ');
        sumar();
        $("#nt6").val(calculo);
        calificaTST();
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)


}


function calificaTST() {
    var listNts = document.getElementsByClassName('nota-abierta');
    nt = 0;
    band = true;
    for (var i = 0; i < listNts.length; i++) {
        if ($(listNts[i]).val() == '') {
            band = false;
            $(listNts[i]).addClass('no-valid')
            $('.form-control').attr('disabled', true);
        } else {
            nt += parseFloat($(listNts[i]).val());
            $(listNts[i]).addClass('valid')
        }
    }
    if (band == false) {
        alert('Hay preguntas sin calificar.\n\Verifica que todas las preguntas estan calificadas.')
    } else {
        $('.respuesta').attr('desabled', true);
        $('.btnCalificar').addClass('disabled');
        $('.btnGuardar').removeClass('disabled');
        $('#txtNota').html(nt)
    }

}

function guardar() {
    $('.collapse').collapse('show')
    save_open_activity_to_local('txtAlumno')
};
function sumar(){
    if($("#R3").hasClass("subrayar")){
        $("#R3").css({"background-color": "#00FF00"});
    }else if ($("#R1").hasClass("subrayar")){
        $("#R1").css({"background-color": "#ff0000"});
    }else{
        $("#R2").css({"background-color": "#ff0000"});
    }

    if($("#S2").hasClass("subrayar")){
        $("#S2").css({"background-color": "#00ff00"});
    }else if ($("#S1").hasClass("subrayar")){

        $("#S1").css({"background-color": "#ff0000"});
    }else{
        $("#S3").css({"background-color": "#ff0000"});
    }

    if($("#T1").hasClass("subrayar")){
        $("#T1").css({"background-color": "#00ff00"});
    }else if ($("#T2").hasClass("subrayar")){

        $("#T2").css({"background-color": "#ff0000"});
    }else{
        $("#T3").css({"background-color": "#ff0000"});
    }

    if($("#U1").hasClass("subrayar")){
        $("#U1").css({"background-color": "#00ff00"});
    }else if ($("#U2").hasClass("subrayar")){

        $("#U2").css({"background-color": "#ff0000"});
    }else{
        $("#U3").css({"background-color": "#ff0000"});
    }
    var subtotal = parseInt(resp1)+parseInt(resp2)+parseInt(resp3)+parseInt(resp4);
    var total = subtotal/2;
    $("#nt1").val(parseFloat(total));


}

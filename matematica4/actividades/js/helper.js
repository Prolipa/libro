function save_to_pdf(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    var txtAlumno = document.getElementById('txtAlumno').value;
    // html2pdf().set(opt).from(element).save();
    // 
    var nota = parseInt($('#txtNota').text());
    //var title = $(this).attr('title');
    var libro = '13';
    var pagina = $('#n_pagina').text();
    var html = self.location.href.match(/\/([^/]+)$/)[1];



    $.post("https://prolipadigital.com.ec/software/PlataformaProlipa/public/api/notaEstudiante", {
        "nota": nota,
        "libro": libro,
        "pagina": pagina,
        "html": html
    }, function(result) {

    });


    $('#myModal').modal('hide');
    window.print();
    // New Promise-based usage:

}

$(".btnCalificar").bind("click", function() {
    $('#myModal').modal('show');

});

$(".btn").click(function(e) {
    if (!$(this).hasClass("disabled")) {
        $(this).mouseenter();
    }
});

function mostrar_ayuda() {
    $("#nota-informativa").show("blind", { direction: 'up' }, 500)
}

function cerrar_ayuda() {
    $("#nota-informativa").hide("blind", { direction: 'up' }, 500).delay(500);
}

//fullscreen
function full_screen_change() {
    if (document.getElementById('full_ico').className.indexOf('full') > -1) {
        screenfull.request();
        document.getElementById('full_ico').className = 'glyphicon glyphicon-resize-small';
    } else {
        screenfull.exit();
        document.getElementById('full_ico').className = 'glyphicon glyphicon-resize-full';
    };
}

function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter')

    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    ,
    source = $('#activity')[0]

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    ,
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    }

    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
                ,
            'elementHandlers': specialElementHandlers
        },
        function(dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        },
        margins
    )
}

function getPdf(inline, url) {
    var page = new WebPage();
    var system = require("system");
    // change the paper size to letter, add some borders
    // add a footer callback showing page numbers
    page.paperSize = {
        format: "A4",
        orientation: "portrait",
        footer: {
            height: "0.9cm",
            contents: phantom.callback(function(pageNum, numPages) {
                return "<div style='text-align:center;'><small>" + pageNum +
                    " / " + numPages + "</small></div>";
            })
        }
    };
    page.zoomFactor = 1;
    // assume the file is local, so we don't handle status errors
    page.open(system.args[1], function(status) {
        page.render(system.args[2]);
        phantom.exit();
    });
}

//coloca el nombre del alumno en el div nombre_alumno
//genera pdf con la actividad
function save_open_activity_to_local(alumno) {
    //console.log($('#txtAlumno'));
    var nom = "#" + alumno;
    $('#nombre_alumno').addClass("no-valid");
    if (valida_existe('txtAlumno')) {
        $('#nombre_alumno').removeClass('no-valid');
        $('#nombre_alumno').append('' + $(nom).val() + "        Puntaje: " + $("#txtNota").html());
        $('#nombre_alumno').attr('hidden', false);
        $('#botonera').hide();
        ocultar_by_class('ocultable');
        mostrar_by_class('txtAlumno');
        save_to_pdf('activity');
        // demoFromHTML();
        //$('#nombre_alumno').attr('hidden', true);
        $(nom).val('');
        $('#myModal').modal('hide');
    }
    mostrar_by_class('ocultable');
}
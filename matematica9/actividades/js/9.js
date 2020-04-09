var nPregs;
var actual;
var nota;


data = [
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100,
    aleatorio(-100, 100) / 100
]
Highcharts.theme = {
    colors: ['#ff1a75']
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    show()
})




function show() {
    habilitar_by_class('input1');
    habilitar_by_class('btnCalificar');
    $(".input1").val('');
    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    npaso = 10 / nPregs;

    chart();
    table();

}

function chart() {
    Highcharts.chart('chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Inflación mesual en los meses de noviembre'
        },
        yAxis: {
            title: {
                text: null
            }
        },
        xAxis: {
            categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
            title: {
                text: null
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.2f}%'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
                name: 'inflación',
                data: data
            }]

    });
}

function table() {
    $('#p1').html(data[0] + '%');
    $('#p2').html(data[1] + '%');
    $('#p3').html(data[2] + '%');
    $('#p4').html(data[3] + '%');
    $('#p5').html(data[4] + '%');
    $('#p6').html(data[5] + '%');
    $('#p7').html(data[6] + '%');
    $('#p8').html(data[7] + '%');

    $('.snum1').val(data[0] * 100);
    $('.snum2').val(data[1] * 100);
    $('.snum3').val(data[2] * 100);
    $('.snum4').val(data[3] * 100);
    $('.snum5').val(data[4] * 100);
    $('.snum6').val(data[5] * 100);
    $('.snum7').val(data[6] * 100);
    $('.snum8').val(data[7] * 100);

    $('.sden1').val(100);
    $('.sden2').val(100);
    $('.sden3').val(100);
    $('.sden4').val(100);
    $('.sden5').val(100);
    $('.sden6').val(100);
    $('.sden7').val(100);
    $('.sden8').val(100);

    $('.sdec1').val(data[0]);
    $('.sdec2').val(data[1]);
    $('.sdec3').val(data[2]);
    $('.sdec4').val(data[3]);
    $('.sdec5').val(data[4]);
    $('.sdec6').val(data[5]);
    $('.sdec7').val(data[6]);
    $('.sdec8').val(data[7]);
}

function siguiente() {
    actual++;
    var dest = $("#preg").offset().top;
    $("html, body").animate({scrollTop: dest}, 1000, 'swing');

    show();
}

function calificar() {

    console.log('calificando');

    nt = npaso / 16;
    for (var i = 1; i <= 8; i++) {
        if ($('.rnum' + i).val() == $('.snum' + i).val() && $('.rden' + i).val() == $('.sden' + i).val()) {
            nota = nota + nt;
            $('.rnum' + i).addClass('valid');
            $('.rnum' + i).remove('no-valid');
            $('.rden' + i).addClass('valid');
            $('.rden' + i).remove('no-valid');
        } else {
            $('.rnum' + i).addClass('no-valid');
            $('.rnum' + i).remove('valid');
            $('.rden' + i).addClass('no-valid');
            $('.rden' + i).remove('valid');
        }
        if ($('.rdec' + i).val() == $('.sdec' + i).val()) {
            nota = nota + nt;
            $('.rdec' + i).addClass('valid');
            $('.rdec' + i).remove('no-valid');
        } else {
            $('.rdec' + i).addClass('no-valid');
            $('.rdec' + i).remove('valid');
        }
    }
    var dest = $("#tabla").offset().top;
    $("html, body").animate({scrollTop: dest}, 1000, 'swing');

    document.getElementById('tabla').scrollIntoView();
    desabilitar_by_class('input1');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota.toFixed(2);
    if (actual < nPregs) {
        setTimeout(siguiente, 3000);
    }
}
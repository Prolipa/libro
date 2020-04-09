$(document).ready(function () {
    var content_tabs = '';
    var body_tabs = '';


    $.each(mrk, function (index, value) {

console.log(mrk)
    var activo = (index == 0) ? 'class="active"' : '';
        content_tabs += '<li role="presentation" ' + activo + ' >'//inicio tab
        content_tabs += '<a href="#t' + index + '" aria-controls="t' + index + '" role="tab" data-toggle="tab">' + value['name'] + '</a>';
        content_tabs += '</li>';//fin tab
        tab=value['name']
        
        act = (index ==0)?'active':'';
        
        body_tabs += '<div role="tabpanel" class="tab-pane '+act+' " id="t' + index + '">';//tab body

        body_tabs += ' <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'//inicio grupo collapse
        $.each(value['items'], function (indice, valor) {
            body_tabs += '<div class="panel panel-default">';//panel collapse
            body_tabs += ' <div class="panel-heading" role="tab" id="headingOne">';//panel header collapse
            body_tabs += '<h4 class="panel-title">';//titulo panel collapse
            //link control collapse
            body_tabs += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#c' + valor['name'].replace(/\s/g, '') +tab+ '" aria-expanded="true" aria-controls="c' + indice + '">';
            body_tabs += valor['name']
            body_tabs += '</a>';
            //fin link control collapse
            body_tabs += '</h4>';//titulo panel collapse
            body_tabs += '</div>';//fin panel header collapse
            //collapsable section
            body_tabs += '<div id="c' + valor['name'].replace(/\s/g, '')+tab+ '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="h' + indice + '">';
            body_tabs += '<div class="panel-body">';//collapse body

//            count valor
            body_tabs += '<ol class="menu">'//lista de enlaces
            $.each(valor['items'], function (cursor, item) {
                body_tabs += '<li class="mli">'

                //body_tabs += '<a href="' + item['link'] + '.html">'//link contenido
                body_tabs += '<a href="' + value['folder'] + '/' + item['link'] + '.html">'//link contenido
                body_tabs += '<div class="col-md-10">' + item['name'].substring(0, 30) + "</div>"//contenido nombre
                body_tabs += '<div class="col-md-2">Pag.' + item['page'] + "</div>"//contenido pagina
                body_tabs += '</a>'//fin link contenido

                body_tabs += '</li>'//fin lista de enlaces
            })
            body_tabs += '</ol>'//fin lista de enlaces

            body_tabs += '</div>';//fin collapse body
            body_tabs += '</div>';
            //fin collapsable section

            body_tabs += '</div>';//fin panel collapse
        })
        // body_tabs += value['name'] + index;
        body_tabs += '</div>';//fin grupo collapse
        body_tabs += '</div>';//fin tab body
    })

    $("#menu_tabs").html(content_tabs);
    $("#body_tabs").html(body_tabs);
    

    //console.log(content_tabs)
    //console.log(body_tabs)
})
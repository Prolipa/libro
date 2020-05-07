function jsCanvasToolBar(container) {
    this.container = container;
    this.palet = ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"];
    this.selectedColor = '#8e44ad';
    this.selectedPoint = 1;
    this.hide = false;
    this.picker;
}

jsCanvasToolBar.prototype.init = function () {
    console.log('iniciando....');
    var ctb = this;
    el = document.getElementById(ctb.container);
    //console.log(el);
    var nooculto = (ctb.hide) ? 'no-show' : '';
    var oculto = (ctb.hide) ? '' : 'no-show';
    el.innerHTML += ' <span class="glyphicon glyphicon-cog btn-show-hide ' + oculto + ' " id="btn-show"  aria-hidden="true"></span>' +
            '<div id="tool' + ctb.container + '" class="' + nooculto + '" >' +
            ' <span class="glyphicon glyphicon-chevron-left btn-show-hide ' + oculto + '" id="btn-hide"  aria-hidden="true"></span>' +
            ' <div style="float: left;" id="picker' + ctb.container + '" class="picker"></div>' +
            ' <span class="glyphicon glyphicon-stop btn-point selected pw' + ctb.container + '" id="1"  style="font-size:1.5rem;" aria-hidden="true"></span>' +
            ' <span class="glyphicon glyphicon-stop btn-point pw' + ctb.container + '" id="2" style="font-size:2rem;" aria-hidden="true"></span>' +
            ' <span class="glyphicon glyphicon-stop btn-point pw' + ctb.container + '" id="3" style="font-size:2.5rem;" aria-hidden="true"></span>' +
            ' <span class="glyphicon glyphicon-stop btn-point pw' + ctb.container + '" id="4" style="font-size:3rem;" aria-hidden="true"></span>&nbsp;&nbsp;' +
            ' <span class="glyphicon glyphicon-pencil btn-pencil selected pe' + ctb.container + '"  id="pencil" style="font-size:3rem;" aria-hidden="true"></span>' +
            ' <span class="glyphicon glyphicon-erase btn-eraser pe' + ctb.container + '" id="eraser" style="font-size:3rem;" aria-hidden="true"></span>&nbsp;&nbsp;' +
            ' <span class="glyphicon glyphicon-refresh btn-refresh no-show" id="refresh" style="font-size:3rem;" aria-hidden="true"></span>&nbsp;&nbsp;' +
            '</div>';
    ctb.picker = document.getElementById('picker' + ctb.container);

    this.colorPicker(ctb);
    toolPointWidthBtnConfig(ctb);
    toolPencilEraserConfig(ctb);

    document.getElementById('btn-show').addEventListener("click", function () {
        $.when($('#btn-show').slideUp('slow')).then(function (x) {
            $('#tool' + ctb.container).slideDown('slow');
        });
    }, false);
    document.getElementById('btn-hide').addEventListener("click", function () {
        $.when($('#tool' + ctb.container).slideUp('slow')).then(function (x) {
            $('#btn-show').slideDown('slow');
        });


    }, false);
}

//array de colores
jsCanvasToolBar.prototype.setPalet = function (palet) {
    this.palet = palet;
};

jsCanvasToolBar.prototype.Ocultar = function (hide) {
    this.hide = hide;
};

jsCanvasToolBar.prototype.colorPicker = function (ctb) {
    var pick = '#picker' + this.container;
    $(pick).colorPick({
        'initialColor': ctb.selectedColor,
        'palette': ctb.palet,
        'onColorSelected': function () {
            this.element.css({'backgroundColor': this.color, 'color': this.color});
            ctb.selectedColor = this.color;
        }
    });
}

//funcion para colocar el tamaño a lo spuntos
function toolPencilEraserConfig(ctb) {
//    console.log('clicks pencil');
    var els = document.getElementsByClassName('pe' + ctb.container);
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener("click", function () {
            toolBtnSelect('pe' + ctb.container);
            switch (this.getAttribute('id')) {
                case 'pencil':
                    ctb.selectedColor = ctb.picker.style.color;
                    this.classList.add('selected');
                    break;
                case 'eraser':
                    ctb.selectedColor = '#ffffff';
                    this.classList.add('selected');
                    break;
                default:
                    ctb.selectedColor = ctb.picker.style.color;
                    this.classList.add('selected');
            }
//            console.log(ctb.selectedColor);
        }, false);
    }
}
function toolPointWidthBtnConfig(ctb) {
    var els = document.getElementsByClassName('pw' + ctb.container);
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener("click", function () {
            toolBtnSelect('pw' + ctb.container);
            switch (parseInt(this.getAttribute('id'))) {
                case 1:
                    ctb.pointWidth = 1;
                    this.classList.add('selected');
                    break;
                case 2:
                    ctb.pointWidth = 5;
                    this.classList.add('selected');
                    break;
                case 3:
                    ctb.pointWidth = 10;
                    this.classList.add('selected');
                    break;
                case 4:
                    ctb.pointWidth = 20;
                    this.classList.add('selected');
                    break;
                default:
                    ctb.pointWidth = 1;
                    this.classList.add('selected');
            }
            //console.log(ctb.pointWidth);
        }, false);
    }
}

function toolBtnSelect(className) {
    var els = document.getElementsByClassName(className);
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('selected');
    }
}













function jsCanvas(container, width, height, ctb) {
    this.toolBar = ctb;
    this.height = height + 'px';
    this.width = width + 'px';
    this.container = container;
    this.borderWidth = 0;
    this.borderColor = '#ffffff';
    this.canvas;
    this.context;
    this.draw = false;
}

//color y borde
jsCanvas.prototype.setBorder = function (width, color) {
    this.borderColor = color;
    this.borderWidth = width;
};


jsCanvas.prototype.init = function () {
    var cnv = this;
    console.log('init canvas ' + cnv.container + '...');
    var el = document.getElementById(cnv.container);
    el.innerHTML = '<canvas  id="cv' + cnv.container + '" class="cnv"></canvas>';
    cnv.canvas = document.getElementById('cv' + cnv.container);
    cnv.canvas.style.borderStyle = 'solid';
    cnv.canvas.style.borderColor = cnv.borderColor;
    cnv.canvas.style.borderWidth = cnv.borderWidth + 'px';
    cnv.canvas.setAttribute('width', cnv.width);
    cnv.canvas.setAttribute('height', cnv.height);
    cnv.context = cnv.canvas.getContext("2d");
    cnv.canvas.addEventListener('mousedown', function (evt) {
        cnv.draw = true; // ya podemos dibujar
        cnv.context.lineWidth = cnv.toolBar.pointWidth;
        cnv.context.beginPath(); //empezamos a dibujar
    }, false);
    cnv.canvas.addEventListener("mousemove", function (evt) {
        Draw(cnv, evt);
    }, false);

    cnv.canvas.addEventListener('mouseup', function (evt) {
        cnv.draw = false;
    }, false);

    cnv.canvas.addEventListener("mouseout", function (evt) {
        cnv.draw = false;
    }, false);
};




function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    pos = {//objeto
        x: Math.round(evt.pageX - ClientRect.left),
        y: Math.round(evt.pageY - ClientRect.top)
    };
    return pos;
}

function Draw(cnv, evt) {
    if (cnv.draw) {
//        console.log('-->' + cnv.container)
        var m = oMousePos(cnv.canvas, evt);
        console.log(m);
        cnv.context.strokeStyle = cnv.toolBar.selectedColor;
        // pnt.context.fillStyle = pnt.selectedColor;
        cnv.context.lineTo(m.x, m.y);
        //pnt.context.arc(m.x, m.y, 1, 0, 2 * Math.PI, false);
        //pnt.context.fill();
        cnv.context.stroke();
    }
}







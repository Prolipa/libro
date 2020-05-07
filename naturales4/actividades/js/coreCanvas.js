/*
Author: SWAGAT PARIDA
*/  

        var copiedObject;
        var copiedObjects = new Array();
        var canvasScale = 1;
        var SCALE_FACTOR = 1.2;
        var src = window.location.href.replace('index.html','') + '/test.jpg';
        var canvas = new fabric.Canvas('canvas', {
            isDrawingMode: false
        });
        
        var onStartDrawing = function () {
            canvas.isDrawingMode = true;
        }

        onStartDrawing();        
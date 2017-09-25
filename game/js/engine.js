var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

var cw = canvas.width;
var ch = canvas.height;

function map() {
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0,0, cw, ch);
}
map()
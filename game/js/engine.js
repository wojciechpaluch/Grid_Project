const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

const cw = canvas.width;
const ch = canvas.height;

function map() {
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, cw, ch);
}

const orbSize = 25;
let orbX = cw / 2;
let orbY = ch / 2;


function orb() {
    ctx.fillstyle = '#ffffff';
    ctx.fillRect(orbX, orbY, orbSize, orbSize);
}

function game() {
    map()
    orb()
}

game()

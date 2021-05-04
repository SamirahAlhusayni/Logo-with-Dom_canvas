let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
context.font='50px sans-serif';
for (var i =0 ; i <300 ; i++)
{
context.beginPath();
var x = Math.random()*window.innerWidth;
var y = Math.random()*window.innerWidth;
var r = Math.random()*2;
context.arc(x, y,r,0, Math.PI *2);

context.stroke();
}
context.beginPath();
context.arc(300, 300,90,0, Math.PI);
context.fillStyle='#333';
context.fill();

context.beginPath();
context.arc(300, 270,20,0, Math.PI*2);
context.fillStyle='#333';
context.fill();

context.beginPath();
context.arc(300, 270,10,0, Math.PI*2);
context.fillStyle='white';
context.fill();
context.beginPath();
context.arc(300, 310,45,0, Math.PI);
context.fillStyle='white';
context.fill();
context.fillStyle='#333';
context.fillText("Brand", 230, 450, 270);

var start = document.getElementById('start');
var op0 = document.getElementById('op0');
var rec = document.getElementById('rec');
var se = document.getElementById('second');

window.onload = function(){
    setTimeout(function(){
        start.classList.remove('BG');
        start.classList.add('BG-2');
        op0.classList.remove('main');
    },2000)
    setTimeout(function(){
        rec.classList.remove('main');
    },8200)
    setTimeout(function(){
        se.classList.remove('main');
        se.classList.add('fade_in');
    },12000)
}
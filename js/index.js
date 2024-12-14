let yt_blink =document.getElementById('yt_title');
let sw_blink =document.getElementById('sw_title');
let n_blink =document.getElementById('n_title');
let ml_blink =document.getElementById('ml_title');

setInterval(function () {
yt_blink.style.opacity = (yt_blink.style.opacity == 0 ? 1 : 0);
sw_blink.style.opacity = (sw_blink.style.opacity == 0 ? 1 : 0);
n_blink.style.opacity = (n_blink.style.opacity == 0 ? 1 : 0);
ml_blink.style.opacity = (ml_blink.style.opacity == 0 ? 1 : 0);

}, 1000);

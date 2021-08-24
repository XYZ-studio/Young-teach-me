import './index.sass';
import './pop.sass';

let youngCount = 0;
let popCount = 0;
let young = ['KeyY', 'KeyO', 'KeyU', 'KeyN', 'KeyG'];
let popYoung = ['KeyP', 'KeyO', 'KeyP'];
let popYoungCount = 0;
let popYoungSwitch = false;

document.addEventListener('keydown', (event) => {
    if (popCount === 5) {
        document.getElementById('young').className = 'young-close';
        popCount = 0;
    }
    if (youngCount === 3 && event.cod === 'Escape') {
        document.getElementById('pop-young').className = 'pop-young-close';
    }
    if (event.code === young[youngCount])
        youngCount++;
    if (event.code === popYoung[popCount])
        popCount++;
    
    if (youngCount === 5) {
        document.getElementById('young').className = 'young-open';
    }
    if (popCount === 3) {
        document.getElementById('pop-young').className = 'pop-young-open';
    }
});

document.onmouseup = document.onkeypress = (event) => {
    if (document.getElementById('pop-young').className === 'pop-young-open' && !popYoungSwitch) {
        popYoungCount++;
        document.getElementById('count').textContent = popYoungCount;
        document.getElementById('young-image').className = 'young-image-open';
        popYoungSwitch = true;
    }
};

document.onmousedown = document.onkeyup = (event) => {
    if (document.getElementById('pop-young').className === 'pop-young-open' && popYoungSwitch) {
        document.getElementById('count').textContent = popYoungCount;
        document.getElementById('young-image').className = 'young-image-close';
        popYoungSwitch = false;
    }
};
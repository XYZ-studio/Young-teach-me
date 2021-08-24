import './index.sass';
import './pop.sass';

let youngCount = 0;
let popCount = 0;
let young = ['KeyY', 'KeyO', 'KeyU', 'KeyN', 'KeyG'];
let popYoung = ['KeyP', 'KeyO', 'KeyP'];
let popYoungCount = 0;
let popYoungSwitch = false;

document.addEventListener('keydown', (event) => {
    if (youngCount === 5) {
        document.getElementById('young').className = 'young-close';
        youngCount = 0;
    }
    if (popCount === 3 && event.code === 'Escape') {
        document.getElementById('pop-young').className = 'pop-young-close';
        popCount = 0;
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

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

document.onmousedown = document.onkeypress = (event) => {
    if (document.getElementById('pop-young').className === 'pop-young-open' && !popYoungSwitch) {
        (async() => {
            document.getElementById('count').style = 'font-size: 60px;transform: rotate(-10deg)';
            await sleep(100);
            document.getElementById('count').style = '';
        })();
        popYoungCount++;
        document.getElementById('count').textContent = popYoungCount;
        document.getElementById('young-image').className = 'young-image-open';
        popYoungSwitch = true;
        let audio = new Audio('./2.mp3');
        audio.volume = 0.5;
        audio.play();

    }
};

document.onmouseup = document.onkeyup = (event) => {
    if (document.getElementById('pop-young').className === 'pop-young-open' && popYoungSwitch) {
        document.getElementById('count').textContent = popYoungCount;
        document.getElementById('young-image').className = 'young-image-close';
        popYoungSwitch = false;
    }
};
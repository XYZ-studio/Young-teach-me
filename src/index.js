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

function isMobileDevice() {
    var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    var isMobileDevice = false
    for (var i = 0; i < mobileDevices.length; i++) {
        if (navigator.userAgent.match(mobileDevices[i])) {
            isMobileDevice = true
        }
    }
    return isMobileDevice
}

const down = (event) => {
    if (document.getElementById('pop-young').className === 'pop-young-open' && !popYoungSwitch) {
        popYoungCount++;
        document.getElementById('count').textContent = popYoungCount;
        document.getElementById('young-image').className = 'young-image-open';
        popYoungSwitch = true;
        let audio = new Audio('./2.mp3');
        audio.volume = 0.5;
        audio.play();
    }
};

const seup = (event) => {
    if (document.getElementById('pop-young').className === 'pop-young-open' && popYoungSwitch) {
        document.getElementById('count').textContent = popYoungCount;
        document.getElementById('young-image').className = 'young-image-close';
        popYoungSwitch = false;
    }
};

document.addEventListener('keypress', (event) => {
    if (!isMobileDevice()) down(event);
});

document.onmousedown = (event) => {
    if (!isMobileDevice()) down(event);
};

document.ontouchstart = document.onkeypress = (event) => {
    console.log(isMobileDevice())
    if (isMobileDevice()) down(event);
};

document.addEventListener('keyup', (event) => {
    if (!isMobileDevice()) seup(event);
});

document.onmouseup = (event) => {
    if (!isMobileDevice()) seup(event);
};

document.ontouchend = document.onkeyup = (event) => {
    console.log(isMobileDevice())
    if (isMobileDevice()) seup(event);
};
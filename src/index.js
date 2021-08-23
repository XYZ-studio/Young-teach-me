import './index.sass';

let count = 0;
let young = ['KeyY', 'KeyO', 'KeyU', 'KeyN', 'KeyG'];

document.addEventListener('keydown', (event) => {
    if (count === 5) {
        document.getElementById('young').className = 'young-close';
        count = 0;
    }
    if (event.code === young[count]) 
        count++;
    
    if (count === 5) {
        document.getElementById('young').className = 'young-open';
    }

});


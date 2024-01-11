const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reloadButtom = document.querySelector('.reload-buttom');
const points = document.querySelector('.points');

let point = 0;
let canCountPoint = true;

const marioJump = () => {
    mario.classList.add('mario-jump');
    
    setTimeout(() => {
        mario.classList.remove('mario-jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition < 115 && pipePosition > 0 && marioPosition <=  70) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = '../assets/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '38px';

        reloadButtom.style.display = 'initial';

        clearInterval(loop);
    }

    if (pipePosition <= 120 && pipePosition >= 110 && canCountPoint && marioPosition > 70) {
        point++;
        points.innerHTML = point;
        canCountPoint = false;
    }

    if (pipePosition < 110) {
        canCountPoint = true;
    }
}, 10);

document.addEventListener('keydown', marioJump);
const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
let score = 0;

const sound = new Audio("assets/smash.mp3"); // Corrigido o caminho para o arquivo de áudio

function run() {
    const i = Math.floor(Math.random() * holes.length); // Corrigido o 'math' para 'Math' e o 'lenght' para 'length'
    const hole = holes[i];
    let timer = null;

    const img = document.createElement('img');
    img.classList.add('mole');
    img.src = 'assets/mole.png'; // Corrigido o caminho para a imagem da "mole"

    img.addEventListener('click', () => { // Corrigido o 'Image' para 'img'
        score += 10;
        sound.play();
        scoreEl.textContent = score;
        img.src = 'assets/mole-whacked.png'; // Corrigido o 'scr' para 'src'
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img);
            run();
        }, 500);
    });

    hole.appendChild(img);

    timer = setTimeout(() => {
        hole.removeChild(img);
        run();
    }, 1500);
}

run();

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

window.addEventListener('mousedown', () => {
    cursor.classList.add('active'); // Corrigido 'add98' para 'add'
});

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});
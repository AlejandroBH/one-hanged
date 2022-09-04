const entry = document.querySelector('body');
const divHiddenWord = document.getElementById('hidden-word');
const divWrongWord = document.getElementById('wrong-word');
const btnNewGame = document.getElementById('btn-new-game');

let selectedWord;
let arrayWord = [];
let keyPressed;
let lettersUsed = [];

let fail = 0;

entry.addEventListener('keypress',captureKey);
btnNewGame.addEventListener('click', newGame);

// Esta funcion reinicia el juego y genera una nueva palabra aleatoria
function newGame(){
    location.reload();
}

// Esta funcion genera una palabra aleatoria y asigna un espacio vacio para cada letra
function createWord(){
    let randomNumber = Math.floor(Math.random()*words.length);
    selectedWord = words[randomNumber].toUpperCase();
    arrayWord = selectedWord.split('');

    for(let i=0; i<arrayWord.length; i++){
        let div = document.createElement('div');
        div.setAttribute('id', i);
        div.textContent = '.';
        divHiddenWord.appendChild(div);
    }
}

// Esta funcion captura la tecla presionada a travez de un teclado fisico
// y evita que la misma tecla sea presionada 2 veces.
function captureKey(event){
    let validation = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm';
    keyPressed = event.key.toUpperCase();

    if(validation.includes(event.key) && !lettersUsed.toString().includes(keyPressed)){
        lettersUsed.push(keyPressed);
        checkWord();
    }
}

// Esta funcion verifica si la tecla presionada existe en la palabra oculta
function checkWord(){
    if(arrayWord.includes(keyPressed)){
        for(let i=0; i<arrayWord.length; i++){
            if(arrayWord[i]==keyPressed){
                let found = i;
                document.getElementById(found).innerHTML = keyPressed;
            }
        }
    }else{
        let div = document.createElement('div');
        div.textContent = keyPressed;
        divWrongWord.appendChild(div);

        if(fail < 8){
            fail++;
            hangedCharacter(fail);
        }
    }
}

// Esta funcion muestra la imagen del ahorcado segun el parametro que se le envie
function hangedCharacter(condition){
    for(let i=0; i<8; i++){
        document.querySelector('.char-' + i).style.display = 'none';
    }

    switch(condition){
        case 0:document.querySelector('.char-0').style.display = 'block'; break;
        case 1:document.querySelector('.char-1').style.display = 'block'; break;
        case 2:document.querySelector('.char-2').style.display = 'block'; break;
        case 3:document.querySelector('.char-3').style.display = 'block'; break;
        case 4:document.querySelector('.char-4').style.display = 'block'; break;
        case 5:document.querySelector('.char-5').style.display = 'block'; break;
        case 6:document.querySelector('.char-6').style.display = 'block'; break;
        case 7:document.querySelector('.char-7').style.display = 'block'; break;
       default:document.querySelector('.char-7').style.display = 'block'; break;
    }
}

hangedCharacter(0);

createWord();
console.log(selectedWord);
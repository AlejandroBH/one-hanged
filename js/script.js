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
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.textContent = '.';
        divHiddenWord.appendChild(div);
    }
}

// Esta funcion captura la tecla presionada a travez de un teclado fisico
// y evita que la misma tecla sea presionada 2 veces.
function captureKey(event){
    const validation = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm';
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
        const div = document.createElement('div');
        div.textContent = keyPressed;
        divWrongWord.appendChild(div);

        if(fail < 7){
            fail++;
            hangedCharacter(fail);
        }
    }
}

// Esta funcion muestra la imagen del ahorcado segun el parametro que se le envie
function hangedCharacter(condition){
    const getImage = document.querySelector('#hanged-character img');
    getImage.setAttribute('src','img/assets/hanget_'+ condition +'.svg');
}

hangedCharacter(0);

createWord();
console.log(selectedWord);
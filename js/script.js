const entry = document.querySelector('body');
const divHiddenWord = document.getElementById('hidden-word');
const divWrongWord = document.getElementById('wrong-word');
const btnNewGame = document.getElementById('btn-new-game');
const viewKeyboard = document.getElementById('virtual-keyboard');
const alertWin = document.querySelector('.alert-win');
const alertFail = document.querySelector('.alert-fail');
const alertSecretWord = document.getElementById('alert-secret-word');
const alertPoints = document.getElementById('alert-points');

let selectedWord;
let arrayWord = [];
let keyPressed;
let lettersUsed = [];
let fail = 0;
let win = 0;
let points = 0;
let complete = false;

viewKeyboard.style.display = 'block';
alertWin.style.display = 'none';
alertFail.style.display = 'none';

entry.addEventListener('keypress', captureKey);
btnNewGame.addEventListener('click', newGame);

// Esta funcion reinicia el juego y genera una nueva palabra aleatoria
function newGame(){
    lettersUsed = [];
    fail = 0;
    win = 0;

    if(complete == false){
        points = 0;
    }

    complete = false;

    removeWordDiv();
    hangedCharacter(0);
    alertWin.style.display = 'none';
    alertFail.style.display = 'none';
    keyboardUnlock();
    createWord();
    console.log(selectedWord);
    console.log(points);
}

// Esta funcion elimina los elementos div creados a travez de js
function removeWordDiv(){
    arrayWord = [];
    for(let i=0; i<selectedWord.length; i++){
        let removeDivHidden = document.getElementById(i);
        divHiddenWord.removeChild(removeDivHidden);
    }
}

// Esta funcion genera una palabra aleatoria y asigna un espacio vacio para cada letra
function createWord(){
    let randomNumber = Math.floor(Math.random()*words.length);
    selectedWord = words[randomNumber].toUpperCase();
    arrayWord = selectedWord.split('');

    for(let i=0; i<arrayWord.length; i++){
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.setAttribute('class', 'hidde');
        div.textContent = '.';
        divHiddenWord.appendChild(div);
    }
}

// Esta funcion captura la tecla presionada a travez de un teclado fisico
// y evita que la misma tecla sea presionada 2 veces.
// Tambien sirve para bloquear las teclas cuando el juego finaliza.
function captureKey(event){
    const validation = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm';
    keyPressed = event.key.toUpperCase();

    disableKey();

    if(validation.includes(event.key) && !lettersUsed.toString().includes(keyPressed) && fail < 7 && win < selectedWord.length){
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
                win++;
                document.getElementById(found).innerHTML = keyPressed;
                document.getElementById(found).removeAttribute('class','hidde')
                document.querySelector('.btn-'+ keyPressed).style.backgroundColor = "green";
                document.querySelector('.btn-'+ keyPressed).style.color = "white";
                endGameMsg();
            }
        }
    }else{
        const div = document.createElement('div');
        div.textContent = keyPressed;
        divWrongWord.appendChild(div);

        if(fail < 7){
            fail++;
            hangedCharacter(fail);
            document.querySelector('.btn-'+ keyPressed).style.backgroundColor = "red";
            document.querySelector('.btn-'+ keyPressed).style.color = "white";
            endGameMsg();
        }
    }
}

// Esta funcion muestra mensaje si gano o perdio
function endGameMsg(){
    if(fail == 7){
        complete = false;
        points = 0;
        alertSecretWord.innerHTML = selectedWord;
        alertFail.style.display = 'block';
        keyboardLock();
    }
    if(win == selectedWord.length){
        complete = true;
        points = points + selectedWord.length;
        alertPoints.innerHTML = points;
        alertWin.style.display = 'block';
        keyboardLock();
    }
}

// Esta funcion muestra la imagen del ahorcado segun el parametro que se le envie
function hangedCharacter(condition){
    const getImage = document.querySelector('#hanged-character img');
    getImage.setAttribute('src','img/assets/hanget_'+ condition +'.svg');
}

hangedCharacter(0);
createWord();
console.log(selectedWord)
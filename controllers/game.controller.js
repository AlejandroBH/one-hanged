"use strict";

import { 
  divHiddenWord, 
  alertWin, 
  alertFail, 
  alertSecretWord, 
  alertPoints,
  score,
  maxedScore,
  gameState 
} from "../app.js";
import { keyboardLock, keyboardUnlock, disableKey } from "./keyboard.controller.js";
import { updateHangedImage } from "./ui.controller.js";

// Selección de categorías de palabras
export const CATEGORIES = {
  CUSTOM: 0,
  DEFAULT: 1,
  COMPUTING: 2,
  FRUITS: 3,
  ANIMALS: 4,
  VIDEOGAMES: 5,
  CAR_BRANDS: 6,
  PROFESSIONS: 7
};

const WORD_LISTS = {
  [CATEGORIES.DEFAULT]: [
    'empalmar', 'velador', 'nieve', 'primera', 'roca', 'riachuelo', 'lago',
    'levadura', 'ruleta', 'estirar', 'domingo', 'frenar', 'peligro', 'maleta',
    'profesor', 'epitafio', 'burbuja', 'mesa', 'conectar', 'marco', 'pollito',
    'mapache', 'sombrero', 'turistas', 'termostato', 'correr', 'doctora', 'yema',
    'goleada', 'acusado', 'horizonte', 'contento', 'toallero', 'final', 'varilla',
    'abuelos', 'atreverse', 'maquillaje', 'pauta', 'madera', 'coro', 'principio',
    'suicidio', 'plumero', 'colocar', 'lazo', 'guillotina', 'manicura', 'sumar', 'yegua'
  ],
  [CATEGORIES.COMPUTING]: [
    'software', 'hardware', 'monitor', 'javascript', 'vscode', 'teclado',
    'impresora', 'hipertexto', 'phyton', 'enlace'
  ],
  [CATEGORIES.FRUITS]: [
    'manzana', 'pera', 'platano', 'frutilla', 'piña', 'ciruela',
    'melon', 'sandia', 'papaya', 'mango'
  ],
  [CATEGORIES.ANIMALS]: [
    'perro', 'gato', 'raton', 'lobo', 'zorro', 'gorila',
    'elefante', 'hiena', 'jaguar', 'canguro'
  ],
  [CATEGORIES.VIDEOGAMES]: [
    'sekiro', 'darksoul', 'bloodborne', 'eldenring', 'mariobros',
    'roblox', 'minecraft', 'bioschok', 'rayman', 'megaman'
  ],
  [CATEGORIES.CAR_BRANDS]: [
    'mazda', 'chevrolet', 'ferrari', 'audi', 'volvo', 'ford',
    'hyundai', 'nissan', 'maserati', 'peugeot'
  ],
  [CATEGORIES.PROFESSIONS]: [
    'piloto', 'ingeniero', 'mecanico', 'arquitecto', 'carnicero',
    'granjero', 'profesor', 'carabinero'
  ]
};

// Selecciona la categoría de palabras
export const selectCategory = (category) => {
  if (category === CATEGORIES.CUSTOM) {
    gameState.words = gameState.customWords;
  } else {
    gameState.words = WORD_LISTS[category] || WORD_LISTS[CATEGORIES.DEFAULT];
  }
  gameState.currentCategory = category;
};

// Agrega una palabra personalizada
export const addCustomWord = (word) => {
  if (word && word.trim() !== '') {
    gameState.customWords.push(word.trim().toLowerCase());
    return true;
  }
  return false;
};

// Genera una palabra aleatoria y crea los espacios para las letras
export const createWord = () => {
  const randomNumber = Math.floor(Math.random() * gameState.words.length);
  gameState.selectedWord = gameState.words[randomNumber].toUpperCase();
  gameState.arrayWord = gameState.selectedWord.split('');

  // Limpiar palabra anterior si existe
  divHiddenWord.innerHTML = '';

  for (let i = 0; i < gameState.arrayWord.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    div.setAttribute('class', 'hidde');
    div.textContent = '.';
    divHiddenWord.appendChild(div);
  }
};

// Elimina los elementos div de la palabra oculta
export const removeWordDiv = () => {
  if (gameState.selectedWord) {
    for (let i = 0; i < gameState.selectedWord.length; i++) {
      const removeDivHidden = document.getElementById(i);
      if (removeDivHidden) {
        divHiddenWord.removeChild(removeDivHidden);
      }
    }
  }
  gameState.arrayWord = [];
};

// Verifica si la letra presionada existe en la palabra oculta
export const checkWord = () => {
  if (gameState.arrayWord.includes(gameState.keyPressed)) {
    // Letra correcta
    for (let i = 0; i < gameState.arrayWord.length; i++) {
      if (gameState.arrayWord[i] === gameState.keyPressed) {
        gameState.win++;
        const element = document.getElementById(i);
        if (element) {
          element.innerHTML = gameState.keyPressed;
          element.removeAttribute('class');
        }
        const keyButton = document.querySelector('.btn-' + gameState.keyPressed);
        if (keyButton) {
          keyButton.style.backgroundColor = '#52C41A';
          keyButton.style.color = 'white';
        }
      }
    }
  } else {
    // Letra incorrecta
    if (gameState.fail < 7) {
      gameState.fail++;
      updateHangedImage(gameState.fail);
      const keyButton = document.querySelector('.btn-' + gameState.keyPressed);
      if (keyButton) {
        keyButton.style.backgroundColor = '#F5222D';
        keyButton.style.color = 'white';
      }
    }
  }
  endGameMsg();
};

// Muestra mensaje de victoria o derrota
const endGameMsg = () => {
  if (gameState.fail === 7) {
    // Perdió
    gameState.complete = false;
    gameState.points = 0;
    alertSecretWord.innerHTML = gameState.selectedWord;
    alertFail.style.display = 'block';
    keyboardLock();
  }
  
  if (gameState.win === gameState.selectedWord.length) {
    // Ganó
    gameState.complete = true;
    gameState.points = gameState.points + gameState.selectedWord.length;

    if (gameState.points > gameState.maxedPoints) {
      gameState.maxedPoints = gameState.points;
    }

    alertPoints.innerHTML = gameState.selectedWord.length;
    alertWin.style.display = 'block';
    keyboardLock();
  }
};

// Reinicia el juego y genera una nueva palabra
export const newGame = () => {
  gameState.lettersUsed = [];
  gameState.fail = 0;
  gameState.win = 0;

  if (!gameState.complete) {
    gameState.points = 0;
  }

  gameState.complete = false;

  if (gameState.selectedWord) {
    removeWordDiv();
  }
  
  updateHangedImage(0);
  alertWin.style.display = 'none';
  alertFail.style.display = 'none';
  keyboardUnlock();
  createWord();
  score.innerHTML = gameState.points;
  maxedScore.innerHTML = gameState.maxedPoints;
};

// Captura la tecla presionada del teclado físico
export const captureKey = (event) => {
  const validation = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm';
  gameState.keyPressed = event.key.toUpperCase();

  disableKey();

  if (
    validation.includes(event.key) &&
    !gameState.lettersUsed.toString().includes(gameState.keyPressed) &&
    gameState.fail < 7 &&
    gameState.win < gameState.selectedWord.length
  ) {
    gameState.lettersUsed.push(gameState.keyPressed);
    checkWord();
  }
};

// Procesa la letra presionada desde el teclado virtual
export const processVirtualKey = (letter) => {
  gameState.keyPressed = letter.toUpperCase();
  gameState.lettersUsed.push(gameState.keyPressed);
  checkWord();
};

// Validación de solo letras para input
export const onlyLetters = (e) => {
  const key = e.keyCode || e.which;
  const keyboard = String.fromCharCode(key).toLowerCase();
  const validation = 'qwertyuiopasdfghjklñzxcvbnm';
  const specials = '8-37-38-46-164';
  let specialKeyboard = false;
  
  for (let i in specials) {
    if (key == specials[i]) {
      specialKeyboard = true;
      break;
    }
  }
  
  if (validation.indexOf(keyboard) === -1 && !specialKeyboard) {
    return false;
  }
};

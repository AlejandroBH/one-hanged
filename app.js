"use strict";

import { newGame, captureKey, selectCategory, CATEGORIES, onlyLetters } from "./controllers/game.controller.js";
import { initVirtualKeyboard } from "./controllers/keyboard.controller.js";
import {
    showCategorySection,
    showGameSection,
    initCategoryButtons,
    handleAddCustomWord,
    handlePlayCustomWords,
    handleDesist,
    updateHangedImage
} from "./controllers/ui.controller.js";

// Referencias DOM - Secciones
export const mainMenu = document.getElementById('main-menu');
export const gameBox = document.getElementById('game-box');
export const category = document.getElementById('category');
export const sectionAddWords = document.getElementById('add-words');

// Referencias DOM - Elementos del juego
export const divHiddenWord = document.getElementById('hidden-word');
export const alertWin = document.querySelector('.alert-win');
export const alertFail = document.querySelector('.alert-fail');
export const alertSecretWord = document.getElementById('alert-secret-word');
export const alertPoints = document.getElementById('alert-points');
export const score = document.querySelector('.accumulated-points');
export const maxedScore = document.querySelector('.maxed-points');

// Referencias DOM - Botones principales
export const btnStartGame = document.querySelector('.btn-start-game');
export const btnCustomizeGame = document.querySelector('.btn-customize-game');
export const btnNewGame = document.getElementById('btn-new-game');
export const btnDesist = document.getElementById('btn-desist');

// Referencias DOM - Categorías
export const categoryTitle = document.querySelector('.selected-title-category');
export const inputWord = document.querySelector('#input-custom-word');
export const btnAddWords = document.querySelector('.btn-add-word');
export const btnAddWordsPlay = document.querySelector('.btn-add-word-play');

// Referencias DOM - Body
export const entry = document.querySelector('body');

// Estado global del juego
export const gameState = {
    selectedWord: '',
    arrayWord: [],
    keyPressed: '',
    lettersUsed: [],
    fail: 0,
    win: 0,
    points: 0,
    maxedPoints: 0,
    complete: false,
    words: [],
    customWords: [],
    currentCategory: CATEGORIES.DEFAULT
};

// Inicialización de la aplicación
const init = () => {
    // Ocultar secciones inicialmente
    gameBox.style.display = 'none';
    category.style.display = 'none';
    sectionAddWords.style.display = 'none';
    alertWin.style.display = 'none';
    alertFail.style.display = 'none';

    // Seleccionar categoría por defecto
    selectCategory(CATEGORIES.DEFAULT);

    // Inicializar teclado virtual
    initVirtualKeyboard();

    // Inicializar botones de categorías
    initCategoryButtons();

    // Event listeners principales
    btnStartGame.addEventListener('click', () => {
        newGame();
        showGameSection();
    });

    btnCustomizeGame.addEventListener('click', showCategorySection);

    entry.addEventListener('keypress', captureKey);

    btnNewGame.addEventListener('click', newGame);

    btnDesist.addEventListener('click', handleDesist);

    btnAddWords.addEventListener('click', handleAddCustomWord);

    btnAddWordsPlay.addEventListener('click', handlePlayCustomWords);

    // Hacer disponible onlyLetters globalmente para el HTML
    window.onlyLetters = onlyLetters;

    // Inicializar imagen del ahorcado
    updateHangedImage(0);
};

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

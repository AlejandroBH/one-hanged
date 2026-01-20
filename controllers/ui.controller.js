"use strict";

import {
    mainMenu,
    gameBox,
    category,
    sectionAddWords,
    categoryTitle,
    inputWord,
    gameState
} from "../app.js";
import { newGame, selectCategory, addCustomWord, CATEGORIES } from "./game.controller.js";

// Muestra la sección de categorías
export const showCategorySection = () => {
    gameBox.style.display = 'none';
    mainMenu.style.display = 'none';
    category.style.display = 'block';
};

// Muestra la sección de juego
export const showGameSection = () => {
    gameBox.style.display = 'block';
    mainMenu.style.display = 'none';
    category.style.display = 'none';
    sectionAddWords.style.display = 'none';
};

// Muestra el menú principal
export const showMainMenu = () => {
    gameBox.style.display = 'none';
    mainMenu.style.display = 'block';
    category.style.display = 'none';
    sectionAddWords.style.display = 'none';
};

// Muestra la sección de palabras personalizadas
export const showCustomWordsSection = () => {
    category.style.display = 'none';
    sectionAddWords.style.display = 'block';
};

// Actualiza la imagen del ahorcado
export const updateHangedImage = (condition) => {
    const getImage = document.querySelector('#hanged-character img');
    if (getImage) {
        getImage.setAttribute('src', 'assets/images/assets/hanget_' + condition + '.svg');
    }
};

// Maneja la selección de categoría personalizada
export const handleCustomCategory = () => {
    showCustomWordsSection();
    categoryTitle.innerHTML = 'personalizadas';
    selectCategory(CATEGORIES.CUSTOM);
};

// Maneja la selección de categorías predefinidas
export const handleCategorySelection = (categoryId, categoryName) => {
    selectCategory(categoryId);
    categoryTitle.innerHTML = categoryName;
    newGame();
    showGameSection();
};

// Maneja agregar palabra personalizada
export const handleAddCustomWord = () => {
    if (inputWord.value === '') {
        alert('El campo está vacío');
        inputWord.focus();
    } else {
        addCustomWord(inputWord.value);
        inputWord.value = '';
        inputWord.focus();
    }
};

// Maneja iniciar juego con palabras personalizadas
export const handlePlayCustomWords = () => {
    if (gameState.words.length === 0) {
        alert('Agrega al menos una palabra para jugar');
        inputWord.focus();
    } else {
        sectionAddWords.style.display = 'none';
        newGame();
        showGameSection();
    }
};

// Maneja el botón de desistir
export const handleDesist = () => {
    newGame();
    showMainMenu();
};

// Inicializa los event listeners de las categorías
export const initCategoryButtons = () => {
    const categories = [
        { selector: '.category-0', handler: handleCustomCategory },
        { selector: '.category-1', handler: () => handleCategorySelection(CATEGORIES.DEFAULT, 'predeterminadas') },
        { selector: '.category-2', handler: () => handleCategorySelection(CATEGORIES.COMPUTING, 'de informática') },
        { selector: '.category-3', handler: () => handleCategorySelection(CATEGORIES.FRUITS, 'de frutas') },
        { selector: '.category-4', handler: () => handleCategorySelection(CATEGORIES.ANIMALS, 'de animales') },
        { selector: '.category-5', handler: () => handleCategorySelection(CATEGORIES.VIDEOGAMES, 'de videojuegos') },
        { selector: '.category-6', handler: () => handleCategorySelection(CATEGORIES.CAR_BRANDS, 'de marcas de autos') },
        { selector: '.category-7', handler: () => handleCategorySelection(CATEGORIES.PROFESSIONS, 'de profesiones') }
    ];

    categories.forEach(cat => {
        const button = document.querySelector(cat.selector);
        if (button) {
            button.addEventListener('click', cat.handler);
        }
    });
};

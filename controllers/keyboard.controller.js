"use strict";

import { gameState } from "../app.js";
import { processVirtualKey } from "./game.controller.js";

// Array de letras del teclado
const KEYBOARD_LETTERS = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

// Obtiene el botón de una letra específica
const getKeyButton = (letter) => {
    return document.querySelector('.btn-' + letter);
};

// Inicializa los event listeners del teclado virtual
export const initVirtualKeyboard = () => {
    KEYBOARD_LETTERS.forEach(letter => {
        const keyButton = getKeyButton(letter);
        if (keyButton) {
            keyButton.addEventListener('click', () => {
                processVirtualKey(letter);
                keyButton.disabled = true;
            });
        }
    });
};

// Desactiva la tecla del teclado virtual cuando se presiona desde el teclado físico
export const disableKey = () => {
    const keyButton = getKeyButton(gameState.keyPressed);
    if (keyButton) {
        keyButton.disabled = true;
    }
};

// Bloquea todo el teclado virtual
export const keyboardLock = () => {
    KEYBOARD_LETTERS.forEach(letter => {
        const keyButton = getKeyButton(letter);
        if (keyButton) {
            keyButton.disabled = true;
        }
    });
};

// Desbloquea todo el teclado virtual y resetea estilos
export const keyboardUnlock = () => {
    KEYBOARD_LETTERS.forEach(letter => {
        const keyButton = getKeyButton(letter);
        if (keyButton) {
            keyButton.disabled = false;
            keyButton.removeAttribute('style');
        }
    });
};

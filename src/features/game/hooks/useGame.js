import { useState, useCallback } from 'react';
import { CATEGORIES, WORD_LISTS } from '../data/wordLists';

const MAX_FAILS = 7;

/**
 * Custom hook que encapsula toda la lógica del juego del ahorcado.
 * Reemplaza la manipulación directa del DOM por estado React.
 */
const useGame = () => {
    // Estado del juego
    const [selectedWord, setSelectedWord] = useState('');
    const [lettersUsed, setLettersUsed] = useState([]);
    const [fails, setFails] = useState(0);
    const [points, setPoints] = useState(0);
    const [maxPoints, setMaxPoints] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(CATEGORIES.DEFAULT);
    const [customWords, setCustomWords] = useState([]);
    const [gamePhase, setGamePhase] = useState('menu'); // 'menu' | 'playing' | 'won' | 'lost' | 'categories' | 'customWords'
    const [lastWonWordLength, setLastWonWordLength] = useState(0);

    // Obtiene la lista de palabras activa
    const getWordList = useCallback((category, custom) => {
        if (category === CATEGORIES.CUSTOM) {
            return custom;
        }
        return WORD_LISTS[category] || WORD_LISTS[CATEGORIES.DEFAULT];
    }, []);

    // Genera una palabra aleatoria de la categoría actual
    const generateWord = useCallback((category, custom) => {
        const words = getWordList(category, custom);
        if (words.length === 0) return '';
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].toUpperCase();
    }, [getWordList]);

    // Letras de la palabra que ya fueron reveladas
    const revealedLetters = selectedWord.split('').map((letter) =>
        lettersUsed.includes(letter) ? letter : null
    );

    // Cuenta de letras acertadas
    const correctCount = revealedLetters.filter((l) => l !== null).length;

    // Determina si una letra usada fue correcta o incorrecta
    const getLetterStatus = useCallback((letter) => {
        if (!lettersUsed.includes(letter)) return 'unused';
        if (selectedWord.includes(letter)) return 'correct';
        return 'wrong';
    }, [lettersUsed, selectedWord]);

    // Inicia un nuevo juego (categoryOverride evita bug de estado stale)
    const startGame = useCallback((categoryOverride) => {
        const cat = categoryOverride ?? currentCategory;
        if (categoryOverride !== undefined) {
            setCurrentCategory(cat);
        }
        const word = generateWord(cat, customWords);
        if (!word) return;

        setSelectedWord(word);
        setLettersUsed([]);
        setFails(0);
        setGamePhase('playing');
    }, [currentCategory, customWords, generateWord]);

    // Nuevo juego (resetea puntos si el anterior fue derrota)
    const newGame = useCallback((wasComplete = false, categoryOverride) => {
        if (!wasComplete) {
            setPoints(0);
        }
        const cat = categoryOverride ?? currentCategory;
        const word = generateWord(cat, customWords);
        if (!word) return;

        setSelectedWord(word);
        setLettersUsed([]);
        setFails(0);
        setGamePhase('playing');
    }, [currentCategory, customWords, generateWord]);

    // Adivina una letra
    const guessLetter = useCallback((letter) => {
        const upperLetter = letter.toUpperCase();

        // Ignorar si ya fue usada, si el juego no está activo, o si ya terminó
        if (lettersUsed.includes(upperLetter)) return;
        if (gamePhase !== 'playing') return;

        const newLettersUsed = [...lettersUsed, upperLetter];
        setLettersUsed(newLettersUsed);

        if (selectedWord.includes(upperLetter)) {
            // Letra correcta — verificar si ganó
            const newCorrectCount = selectedWord.split('').filter(
                (l) => newLettersUsed.includes(l)
            ).length;

            if (newCorrectCount === selectedWord.length) {
                const newPoints = points + selectedWord.length;
                setPoints(newPoints);
                setLastWonWordLength(selectedWord.length);
                if (newPoints > maxPoints) {
                    setMaxPoints(newPoints);
                }
                setGamePhase('won');
            }
        } else {
            // Letra incorrecta
            const newFails = fails + 1;
            setFails(newFails);

            if (newFails >= MAX_FAILS) {
                setPoints(0);
                setGamePhase('lost');
            }
        }
    }, [lettersUsed, gamePhase, selectedWord, points, maxPoints, fails]);

    // Selecciona una categoría
    const selectCategory = useCallback((categoryId) => {
        setCurrentCategory(categoryId);
    }, []);

    // Agrega una palabra personalizada
    const addCustomWord = useCallback((word) => {
        if (word && word.trim() !== '') {
            const trimmedWord = word.trim().toLowerCase();
            setCustomWords((prev) => {
                if (prev.includes(trimmedWord)) return prev;
                return [...prev, trimmedWord];
            });
            return true;
        }
        return false;
    }, []);

    // Elimina una palabra personalizada
    const removeCustomWord = useCallback((indexToRemove) => {
        setCustomWords((prev) => prev.filter((_, index) => index !== indexToRemove));
    }, []);

    // Desistir — volver al menú
    const desist = useCallback(() => {
        setPoints(0);
        setSelectedWord('');
        setLettersUsed([]);
        setFails(0);
        setGamePhase('menu');
    }, []);

    // Navegar a categorías
    const goToCategories = useCallback(() => {
        setGamePhase('categories');
    }, []);

    // Navegar a palabras personalizadas
    const goToCustomWords = useCallback(() => {
        setGamePhase('customWords');
    }, []);

    // Navegar al menú
    const goToMenu = useCallback(() => {
        setGamePhase('menu');
    }, []);

    return {
        // Estado
        selectedWord,
        lettersUsed,
        fails,
        points,
        maxPoints,
        currentCategory,
        customWords,
        gamePhase,
        revealedLetters,
        correctCount,
        lastWonWordLength,

        // Acciones
        startGame,
        newGame,
        guessLetter,
        selectCategory,
        addCustomWord,
        desist,
        goToCategories,
        goToCustomWords,
        goToMenu,
        getLetterStatus,
        removeCustomWord,
    };
};

export default useGame;

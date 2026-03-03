import { useState, useCallback, useEffect } from 'react';
import { CATEGORIES, WORD_LISTS } from '../data/wordLists';

const MAX_FAILS = 7;
const GAME_TIME_LIMIT = 10;
const STORAGE_KEYS = {
    CUSTOM_WORDS: 'hanged-game-custom-words',
    MAX_POINTS: 'hanged-game-max-points',
    POINTS: 'hanged-game-points',
    STREAK: 'hanged-game-streak',
    CATEGORY: 'hanged-game-category',
    RANKING: 'hanged-game-ranking',
};

// Multiplicadores por dificultad de categoría
const CATEGORY_MULTIPLIERS = {
    [CATEGORIES.CUSTOM]: 1.0,
    [CATEGORIES.DEFAULT]: 1.0,
    [CATEGORIES.COMPUTING]: 1.5,
    [CATEGORIES.FRUITS]: 0.8,
    [CATEGORIES.ANIMALS]: 1.0,
    [CATEGORIES.VIDEOGAMES]: 1.5,
    [CATEGORIES.CAR_BRANDS]: 1.2,
    [CATEGORIES.PROFESSIONS]: 1.5,
};

/**
 * Custom hook que encapsula toda la lógica del juego del ahorcado.
 * Reemplaza la manipulación directa del DOM por estado React.
 */
const useGame = () => {
    // Estado del juego
    const [selectedWord, setSelectedWord] = useState('');
    const [lettersUsed, setLettersUsed] = useState([]);
    const [fails, setFails] = useState(0);
    const [points, setPoints] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.POINTS);
        return stored ? parseInt(stored, 10) : 0;
    });
    const [maxPoints, setMaxPoints] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.MAX_POINTS);
        return stored ? parseInt(stored, 10) : 0;
    });
    const [streak, setStreak] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.STREAK);
        return stored ? parseInt(stored, 10) : 0;
    });
    const [currentCategory, setCurrentCategory] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.CATEGORY);
        const numeric = stored !== null ? Number(stored) : null;
        return Object.values(CATEGORIES).includes(numeric) ? numeric : CATEGORIES.DEFAULT;
    });
    const [customWords, setCustomWords] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_WORDS);
        return stored ? JSON.parse(stored) : [];
    });
    const [ranking, setRanking] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.RANKING);
        return stored ? JSON.parse(stored) : [];
    });
    const [gamePhase, setGamePhase] = useState('menu'); // 'menu' | 'playing' | 'won' | 'lost' | 'categories' | 'customWords' | 'rankingInput' | 'rankingBoard'
    const [timeLeft, setTimeLeft] = useState(GAME_TIME_LIMIT);
    const [lastWonWordLength, setLastWonWordLength] = useState(0);
    const [lastEarnedPoints, setLastEarnedPoints] = useState(0);
    const [notification, setNotification] = useState({
        isOpen: false,
        message: '',
        type: 'info',
        onConfirm: null,
        confirmLabel: 'Entendido'
    });

    const showNotification = useCallback((message, type = 'info', confirmLabel = 'Entendido') => {
        setNotification({
            isOpen: true,
            message,
            type,
            onConfirm: null,
            confirmLabel
        });
    }, []);

    const showConfirm = useCallback((message, onConfirm, confirmLabel = 'Confirmar') => {
        setNotification({
            isOpen: true,
            message,
            type: 'confirm',
            onConfirm,
            confirmLabel
        });
    }, []);

    const closeNotification = useCallback(() => {
        setNotification((prev) => ({ ...prev, isOpen: false }));
    }, []);

    // Sistema de cuenta regresiva
    useEffect(() => {
        let timer;
        if (gamePhase === 'playing' && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gamePhase === 'playing') {
            // Tiempo agotado = Derrota
            if (points > 0) {
                setGamePhase('rankingInput');
            } else {
                setPoints(0);
                setStreak(0);
                setGamePhase('lost');
            }
        }

        return () => clearInterval(timer);
    }, [gamePhase, timeLeft, points]);

    // Persistencia de ranking
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.RANKING, JSON.stringify(ranking));
    }, [ranking]);

    // Persistencia de puntaje máximo
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.MAX_POINTS, maxPoints.toString());
    }, [maxPoints]);

    // Persistencia de puntos actuales
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.POINTS, points.toString());
    }, [points]);

    // Persistencia de racha
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
    }, [streak]);

    // Persistencia de palabras personalizadas
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_WORDS, JSON.stringify(customWords));
    }, [customWords]);

    // Persistencia de categoría actual
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.CATEGORY, currentCategory);
    }, [currentCategory]);

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
        const cat = typeof categoryOverride === 'number' ? categoryOverride : currentCategory;
        if (typeof categoryOverride === 'number') {
            setCurrentCategory(cat);
        }
        const word = generateWord(cat, customWords);
        if (!word) return;

        setSelectedWord(word);
        setLettersUsed([]);
        setFails(0);
        setTimeLeft(GAME_TIME_LIMIT);
        setGamePhase('playing');
        setLastEarnedPoints(0);
    }, [currentCategory, customWords, generateWord]);

    // Nuevo juego (ahora divide puntos a la mitad si se salta la palabra)
    const newGame = useCallback((wasComplete = false, categoryOverride) => {
        if (!wasComplete) {
            setPoints((prev) => Math.floor(prev / 2));
            setStreak(0);
        }
        const cat = typeof categoryOverride === 'number' ? categoryOverride : currentCategory;
        const word = generateWord(cat, customWords);
        if (!word) return;

        setSelectedWord(word);
        setLettersUsed([]);
        setFails(0);
        setTimeLeft(GAME_TIME_LIMIT);
        setGamePhase('playing');
        setLastEarnedPoints(0);
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
            // Letra correcta — reiniciar cronómetro
            setTimeLeft(GAME_TIME_LIMIT);

            // Verificar si ganó
            const newCorrectCount = selectedWord.split('').filter(
                (l) => newLettersUsed.includes(l)
            ).length;

            if (newCorrectCount === selectedWord.length) {
                // Nueva lógica de puntuación:
                // puntos = (longitud * 10 * multiplicador) - (fallas * 5) + (racha * 5)
                const multiplier = CATEGORY_MULTIPLIERS[currentCategory] || 1.0;
                const basePoints = selectedWord.length * 10;
                const difficultyBonus = Math.round(basePoints * (multiplier - 1));
                const failPenalty = fails * 5;
                const streakBonus = streak * 5;

                const earned = Math.max(
                    selectedWord.length * 2, // Mínimo garantizado
                    basePoints + difficultyBonus - failPenalty + streakBonus
                );

                const newPoints = points + earned;
                const newStreak = streak + 1;

                setPoints(newPoints);
                setStreak(newStreak);
                setLastEarnedPoints(earned);
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
                if (points > 0) {
                    setGamePhase('rankingInput');
                } else {
                    setPoints(0);
                    setStreak(0);
                    setGamePhase('lost');
                }
            }
        }
    }, [lettersUsed, gamePhase, selectedWord, points, maxPoints, fails, streak, currentCategory]);

    // Guarda el puntaje en el ranking
    const saveRankingScore = useCallback((initials) => {
        const newRecord = {
            initials: initials.toUpperCase(),
            score: points,
            date: new Date().toISOString()
        };

        setRanking((prev) => {
            const updated = [...prev, newRecord]
                .sort((a, b) => b.score - a.score)
                .slice(0, 10); // Mantener solo los top 10
            return updated;
        });

        // Resetear tras guardar
        setPoints(0);
        setStreak(0);
        setGamePhase('menu');
    }, [points]);

    // Resetear tras perder sin entrar al ranking
    const resetGameAfterLost = useCallback(() => {
        setPoints(0);
        setStreak(0);
        setGamePhase('menu');
    }, []);

    // Navegar al tablero de ranking
    const goToRanking = useCallback(() => {
        setGamePhase('rankingBoard');
    }, []);

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

    // Elimina todas las palabras personalizadas
    const clearCustomWords = useCallback(() => {
        showConfirm(
            '¿Estás seguro de que quieres eliminar todas las palabras? Esta acción no se puede deshacer.',
            () => setCustomWords([]),
            'Eliminar Todo'
        );
    }, [showConfirm]);

    // Desistir — volver al menú
    const desist = useCallback(() => {
        showConfirm(
            '¿Estás seguro de que quieres desistir? Perderás todo tu progreso de esta partida (puntos y racha).',
            () => {
                setPoints(0);
                setStreak(0);
                setSelectedWord('');
                setLettersUsed([]);
                setFails(0);
                setGamePhase('menu');
                setLastEarnedPoints(0);
            },
            'Sí, Desistir'
        );
    }, [showConfirm]);

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
        streak,
        currentCategory,
        customWords,
        ranking,
        gamePhase,
        timeLeft,
        revealedLetters,
        correctCount,
        lastWonWordLength,
        lastEarnedPoints,
        notification,

        // Acciones
        startGame,
        newGame,
        guessLetter,
        selectCategory,
        addCustomWord,
        desist,
        goToCategories,
        goToCustomWords,
        goToRanking,
        goToMenu,
        getLetterStatus,
        removeCustomWord,
        clearCustomWords,
        saveRankingScore,
        resetGameAfterLost,
        showNotification,
        showConfirm,
        closeNotification,
    };
};

export default useGame;


import { useState } from 'react';
import Button from '@/components/ui/Button';
import './CustomWords.css';

const CustomWords = ({ customWords, onAddWord, onRemoveWord, onClearAll, onPlay, onBack, showNotification }) => {
    const [inputValue, setInputValue] = useState('');
    const MAX_WORDS = 10;
    const isFull = customWords.length >= MAX_WORDS;
    const hasWords = customWords.length > 0;

    const handleAdd = () => {
        const word = inputValue.trim().toLowerCase();
        if (word === '') return;

        if (isFull) {
            showNotification('Has alcanzado el límite de 10 palabras', 'warning');
            return;
        }

        // --- VALIDACIONES ANTI-TRAMPA (INDIVIDUAL 2.0) ---

        // 1. Evitar más de 2 caracteres iguales seguidos (ej: aaa)
        const hasTooManyRepeats = /(.)\1\1/.test(word);

        // 2. Complejidad Proporcional (Letras únicas vs Longitud)
        const uniqueLettersCount = new Set(word).size;
        let isTooSimple = false;

        if (word.length <= 3 && uniqueLettersCount < 1) isTooSimple = true; // No debería pasar por regex inicial
        else if (word.length <= 5 && uniqueLettersCount < 3) isTooSimple = true; // ej: "aaaa", "abab"
        else if (word.length <= 7 && uniqueLettersCount < 4) isTooSimple = true; // ej: "cacasa" (3 unicas: c,a,s)
        else if (word.length <= 10 && uniqueLettersCount < 5) isTooSimple = true; // ej: "cacasasasa" (3 unicas)

        // 3. Control de Vocales/Consonantes
        const vowels = word.match(/[aeiouáéíóúü]/g) || [];
        const consonants = word.match(/[bcdfghjklmnñpqrstvwxyz]/g) || [];

        const hasNoVowels = vowels.length === 0;
        const hasNoConsonants = word.length > 2 && consonants.length === 0;

        if (hasTooManyRepeats || isTooSimple) {
            showNotification('¡Esa palabra es demasiado simple o repetitiva! Sé más creativo.', 'error');
            return;
        }

        if (hasNoVowels) {
            showNotification('La palabra debe tener al menos una vocal.', 'warning');
            return;
        }

        if (hasNoConsonants) {
            showNotification('La palabra debe tener al menos una consonante.', 'warning');
            return;
        }

        // Validación de duplicados (explícita)
        if (customWords.includes(word)) {
            showNotification(`La palabra "${word}" ya está en tu lista.`, 'warning');
            return;
        }

        const success = onAddWord(inputValue);
        if (success) {
            setInputValue('');
        }
    };

    const handlePlay = () => {
        if (customWords.length < MAX_WORDS) {
            showNotification(`Necesitas agregar ${MAX_WORDS} palabras para jugar`, 'info');
            return;
        }

        // --- VALIDACIÓN ANTI-TRAMPA (GLOBAL 2.0) ---

        const allText = customWords.join('').toLowerCase();
        const allLetters = allText.split('');

        // 1. Variedad de Alfabeto (mínimo 8 letras distintas en todo el set)
        const globalUniqueLetters = new Set(allLetters).size;

        if (globalUniqueLetters < 8) {
            showNotification(
                'Tu lista usa muy pocas letras del abecedario. ¡Hazlo más difícil!',
                'error'
            );
            return;
        }

        // 2. Análisis de Entropía (Distribución de letras)
        // Si las 3 letras más comunes dominan el set, es un "hack" de cacas/casas
        const charMap = {};
        allLetters.forEach(char => {
            charMap[char] = (charMap[char] || 0) + 1;
        });

        const sortedFreqs = Object.values(charMap).sort((a, b) => b - a);
        const top3Sum = (sortedFreqs[0] || 0) + (sortedFreqs[1] || 0) + (sortedFreqs[2] || 0);
        const top3Ratio = top3Sum / allLetters.length;

        if (top3Ratio > 0.55) {
            showNotification(
                'Demasiada repetición de las mismas letras en toda la lista. ¡No hagas trampa! 🧐',
                'error'
            );
            return;
        }

        // 3. Detección de Spam Estructural (variedad de sets de letras)
        const letterSets = customWords.map(w => [...new Set(w.toLowerCase())].sort().join(''));
        const uniqueSets = new Set(letterSets).size;

        if (uniqueSets < 5) {
            showNotification(
                'Tus palabras son estructuralmente casi iguales. ¡Varía un poco!',
                'error'
            );
            return;
        }

        onPlay();
    };

    // Solo permitir letras
    const handleKeyPress = (e) => {
        const validation = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM';
        if (!validation.includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    const remainingWords = MAX_WORDS - customWords.length;

    return (
        <section className="custom-words">
            <header className="custom-words__header">
                <h1 className="custom-words__title">Tus Palabras</h1>
                <p className="custom-words__subtitle">
                    Crea tu propio reto personal
                </p>
                <div className={`custom-words__counter ${isFull ? 'custom-words__counter--full' : ''}`}>
                    {customWords.length} / {MAX_WORDS} palabras
                </div>
            </header>

            <div className="custom-words__content">
                {hasWords && (
                    <div className="custom-words__content-actions">
                        <button
                            className="custom-words__clear-btn"
                            onClick={onClearAll}
                            title="Eliminar todas las palabras"
                        >
                            Limpiar Todo
                        </button>
                    </div>
                )}

                {customWords.length > 0 ? (
                    <div className="custom-words__list">
                        {customWords.map((word, index) => (
                            <div key={index} className="custom-words__tag">
                                <span className="custom-words__tag-text">{word}</span>
                                <button
                                    className="custom-words__tag-remove"
                                    onClick={() => onRemoveWord(index)}
                                    aria-label={`Eliminar palabra ${word}`}
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="custom-words__empty">
                        <div className="custom-words__empty-icon">✍️</div>
                        <p className="custom-words__empty-text">
                            No hay palabras personalizadas.<br />
                            ¡Comienza agregando algunas!
                        </p>
                    </div>
                )}
            </div>

            <div className="custom-words__form">
                <input
                    className="custom-words__input"
                    type="text"
                    maxLength={10}
                    placeholder={isFull ? "Límite alcanzado" : "Escribe una palabra..."}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onKeyDown={handleKeyDown}
                    disabled={isFull}
                    autoFocus
                />
                <Button
                    variant="primary"
                    size="md"
                    onClick={handleAdd}
                    disabled={isFull || inputValue.trim() === ''}
                >
                    Agregar
                </Button>
            </div>

            <div className="custom-words__footer">
                <Button variant="secondary" size="sm" onClick={onBack}>
                    Volver
                </Button>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handlePlay}
                    disabled={customWords.length < MAX_WORDS}
                >
                    {customWords.length < MAX_WORDS
                        ? `¡Faltan ${remainingWords}!`
                        : '¡Jugar Ahora!'}
                </Button>
            </div>
        </section>
    );
};


export default CustomWords;

import { useState } from 'react';
import Button from '@/components/ui/Button';
import './CustomWords.css';

const CustomWords = ({ customWords, onAddWord, onRemoveWord, onClearAll, onPlay, onBack }) => {
    const [inputValue, setInputValue] = useState('');
    const MAX_WORDS = 10;
    const isFull = customWords.length >= MAX_WORDS;
    const hasWords = customWords.length > 0;

    const handleAdd = () => {
        if (inputValue.trim() === '') return;
        if (isFull) {
            alert('Has alcanzado el límite de 10 palabras');
            return;
        }

        const success = onAddWord(inputValue);
        if (success) {
            setInputValue('');
        } else {
            alert('Esa palabra ya existe');
        }
    };

    const handlePlay = () => {
        if (customWords.length === 0) {
            alert('Agrega al menos una palabra para jugar');
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
                            🗑️ Limpiar Todo
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
                    disabled={customWords.length === 0}
                >
                    ¡Jugar Ahora!
                </Button>
            </div>
        </section>
    );
};


export default CustomWords;

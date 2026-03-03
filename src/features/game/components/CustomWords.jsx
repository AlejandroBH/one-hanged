import { useState } from 'react';
import Button from '@/components/ui/Button';
import './CustomWords.css';

const CustomWords = ({ customWords, onAddWord, onPlay }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() === '') {
            alert('El campo está vacío');
            return;
        }
        onAddWord(inputValue);
        setInputValue('');
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
            <h1 className="custom-words__title">Configurar</h1>
            <h3 className="custom-words__subtitle">Palabras personalizadas</h3>

            {customWords.length > 0 && (
                <div className="custom-words__list">
                    {customWords.map((word, index) => (
                        <span key={index} className="custom-words__tag">{word}</span>
                    ))}
                </div>
            )}

            <input
                className="custom-words__input"
                type="text"
                maxLength={10}
                placeholder="Ingresa aqui"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                onKeyDown={handleKeyDown}
                autoFocus
            />
            <div className="custom-words__actions">
                <Button variant="primary" size="md" onClick={handleAdd}>
                    Agregar
                </Button>
                <Button variant="secondary" size="sm" onClick={handlePlay}>
                    Jugar
                </Button>
            </div>
        </section>
    );
};

export default CustomWords;

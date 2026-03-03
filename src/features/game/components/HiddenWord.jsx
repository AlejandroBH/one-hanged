import { useRef, useEffect } from 'react';
import './HiddenWord.css';

const HiddenWord = ({ revealedLetters }) => {
    // Rastrear letras previamente reveladas para animar solo las nuevas
    const prevLettersRef = useRef([]);

    useEffect(() => {
        prevLettersRef.current = revealedLetters.slice();
    }, [revealedLetters]);

    return (
        <div className="hidden-word">
            {revealedLetters.map((letter, index) => {
                const wasHidden = prevLettersRef.current[index] === null;
                const isRevealed = letter !== null && wasHidden;

                const classes = [
                    'hidden-word__letter',
                    letter === null ? 'hidden-word__letter--hidden' : '',
                    isRevealed ? 'hidden-word__letter--revealed' : '',
                ].filter(Boolean).join(' ');

                return (
                    <div key={index} className={classes}>
                        {letter || '.'}
                    </div>
                );
            })}
        </div>
    );
};

export default HiddenWord;

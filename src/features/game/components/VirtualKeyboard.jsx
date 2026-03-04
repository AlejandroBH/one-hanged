import { memo, useEffect, useCallback } from 'react';
import './VirtualKeyboard.css';

const KEYBOARD_LETTERS = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U',
    'I', 'O', 'P', 'A', 'S', 'D', 'F',
    'G', 'H', 'J', 'K', 'L', 'Ñ', 'Z',
    'X', 'C', 'V', 'B', 'N', 'M',
];

const VALID_KEYS = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm';

const VirtualKeyboard = memo(({ onKeyPress, getLetterStatus, disabled = false }) => {
    // Captura de teclado físico
    const handlePhysicalKey = useCallback((event) => {
        if (disabled) return;
        if (VALID_KEYS.includes(event.key)) {
            event.preventDefault();
            onKeyPress(event.key.toUpperCase());
        }
    }, [onKeyPress, disabled]);

    useEffect(() => {
        window.addEventListener('keypress', handlePhysicalKey);
        return () => window.removeEventListener('keypress', handlePhysicalKey);
    }, [handlePhysicalKey]);

    return (
        <div className="virtual-keyboard">
            {KEYBOARD_LETTERS.map((letter) => {
                const status = getLetterStatus(letter);
                const isUsed = status !== 'unused';
                const keyClass = [
                    'virtual-keyboard__key',
                    isUsed ? `virtual-keyboard__key--${status}` : '',
                ].filter(Boolean).join(' ');

                return (
                    <button
                        key={letter}
                        className={keyClass}
                        onClick={() => onKeyPress(letter)}
                        disabled={disabled || isUsed}
                    >
                        {letter}
                    </button>
                );
            })}
        </div>
    );
});

export default VirtualKeyboard;

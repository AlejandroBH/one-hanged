import { useState } from 'react';
import Button from '@/components/ui/Button';
import './RankingInput.css';

const RankingInput = ({ score, streak, onSave, onCancel }) => {
    const [initials, setInitials] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initials.length === 3) {
            onSave(initials.toUpperCase());
        }
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 3);
        setInitials(value);
    };

    return (
        <section className="ranking-input">
            <header className="ranking-input__header">
                <h1 className="ranking-input__title">¡Juego Terminado!</h1>
                <p className="ranking-input__subtitle">Has conseguido un gran puntaje</p>

                <div className="ranking-input__stats">
                    <div className="ranking-input__score-badge">
                        <span className="ranking-input__score-label">PUNTUACIÓN</span>
                        <span className="ranking-input__score-value">{score}</span>
                    </div>

                    {streak > 1 && (
                        <div className="ranking-input__streak-badge">
                            <span className="ranking-input__score-label">MÁX. RACHA</span>
                            <span className="ranking-input__score-value">🔥 {streak}</span>
                        </div>
                    )}
                </div>
            </header>

            <form className="ranking-input__form" onSubmit={handleSubmit}>
                <label className="ranking-input__label">Ingresa tus iniciales (3 letras)</label>
                <div className="ranking-input__field-wrapper">
                    <input
                        type="text"
                        className="ranking-input__field"
                        value={initials}
                        onChange={handleChange}
                        placeholder="AAA"
                        autoFocus
                        required
                        autoComplete="off"
                    />
                    <div className="ranking-input__cursor"></div>
                </div>

                <div className="ranking-input__actions">
                    <Button
                        type="button"
                        variant="secondary"
                        size="md"
                        onClick={onCancel}
                    >
                        Omitir
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={initials.length !== 3}
                    >
                        Guardar Record
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default RankingInput;

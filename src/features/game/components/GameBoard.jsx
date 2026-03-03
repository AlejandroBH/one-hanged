import HangedFigure from './HangedFigure';
import HiddenWord from './HiddenWord';
import VirtualKeyboard from './VirtualKeyboard';
import GameAlert from './GameAlert';
import Button from '@/components/ui/Button';
import './GameBoard.css';

const GameBoard = ({
    fails,
    points,
    streak,
    selectedWord,
    revealedLetters,
    gamePhase,
    lastWonWordLength,
    lastEarnedPoints,
    timeLeft,
    onGuessLetter,
    onNewGame,
    onDesist,
    getLetterStatus,
}) => {
    const isGameOver = gamePhase === 'won' || gamePhase === 'lost';
    const alertType = isGameOver ? gamePhase : null;

    const handleNewGame = () => {
        onNewGame(gamePhase === 'won');
    };

    return (
        <section className="game-board">
            {/* Alerta de victoria o derrota */}
            {isGameOver && (
                <GameAlert
                    type={alertType}
                    secretWord={selectedWord}
                    pointsWon={lastEarnedPoints}
                    streak={streak}
                    onAction={handleNewGame}
                />
            )}

            {/* Puntaje y Racha */}
            <div className="game-board__stats">
                <div className="game-board__score">
                    <h3 className="game-board__score-text">
                        Puntaje: <span className="game-board__score-value">{points}</span>
                    </h3>
                </div>

                <div className={`game-board__timer ${timeLeft <= 3 ? 'game-board__timer--urgent' : ''}`}>
                    <h3 className="game-board__score-text">
                        Tiempo: <span className="game-board__timer-value">{timeLeft}s</span>
                    </h3>
                </div>

                {streak > 0 && (
                    <div className="game-board__streak">
                        <h3 className="game-board__score-text">
                            Racha: <span className="game-board__streak-value">🔥 {streak}</span>
                        </h3>
                    </div>
                )}
            </div>

            {/* Figura del ahorcado */}
            <HangedFigure fails={fails} />

            {/* Palabra oculta */}
            <HiddenWord revealedLetters={revealedLetters} />

            {/* Botones de acción */}
            <div className="game-board__actions">
                <Button variant="primary" size="md" onClick={handleNewGame}>
                    Nuevo Juego
                </Button>
                <Button variant="secondary" size="sm" onClick={onDesist}>
                    Desistir
                </Button>
            </div>

            {/* Teclado virtual */}
            <VirtualKeyboard
                onKeyPress={onGuessLetter}
                getLetterStatus={getLetterStatus}
                disabled={isGameOver}
            />
        </section>
    );
};

export default GameBoard;

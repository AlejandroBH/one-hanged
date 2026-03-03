import HangedFigure from './HangedFigure';
import HiddenWord from './HiddenWord';
import VirtualKeyboard from './VirtualKeyboard';
import GameAlert from './GameAlert';
import Button from '@/components/ui/Button';
import './GameBoard.css';

const GameBoard = ({
    fails,
    points,
    selectedWord,
    revealedLetters,
    gamePhase,
    lastWonWordLength,
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
                    pointsWon={lastWonWordLength}
                    onAction={handleNewGame}
                />
            )}

            {/* Puntaje */}
            <div className="game-board__score">
                <h3 className="game-board__score-text">
                    Puntaje total: <span className="game-board__score-value">{points}</span>
                </h3>
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

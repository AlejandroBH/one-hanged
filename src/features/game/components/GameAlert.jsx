import iconWin from '@/assets/images/icon-win.svg';
import iconFail from '@/assets/images/icon-fail.svg';
import './GameAlert.css';

const GameAlert = ({ type, secretWord, pointsWon }) => {
    if (!type) return null;

    const isWin = type === 'won';

    return (
        <div className="game-alert">
            <div className="game-alert__overlay" />
            <div className={`game-alert__card game-alert__card--${isWin ? 'win' : 'fail'}`}>
                <img
                    className="game-alert__icon"
                    src={isWin ? iconWin : iconFail}
                    alt={isWin ? 'Victoria' : 'Derrota'}
                />
                <h2 className="game-alert__title">
                    {isWin ? '¡GANASTE!' : 'PERDISTE'}
                </h2>
                <p className="game-alert__message">
                    {isWin
                        ? `Obtuviste: "${pointsWon} PUNTOS"`
                        : `La palabra era: "${secretWord}"`
                    }
                </p>
            </div>
        </div>
    );
};

export default GameAlert;

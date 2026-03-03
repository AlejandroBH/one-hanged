import Button from '@/components/ui/Button';
import './RankingBoard.css';

const RankingBoard = ({ ranking, onBack }) => {
    return (
        <section className="ranking-board">
            <header className="ranking-board__header">
                <h1 className="ranking-board__title">Leyendas del Ahorcado</h1>
                <p className="ranking-board__subtitle">Los 10 mejores puntajes históricos</p>
                <div className="ranking-board__cup">🏆</div>
            </header>

            <div className="ranking-board__content">
                {ranking.length > 0 ? (
                    <table className="ranking-board__table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Jugador</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.map((record, index) => (
                                <tr key={index} className={`ranking-board__row ${index === 0 ? 'ranking-board__row--top' : ''}`}>
                                    <td className="ranking-board__rank">{index + 1}</td>
                                    <td className="ranking-board__initials">{record.initials}</td>
                                    <td className="ranking-board__score">{record.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="ranking-board__empty">
                        <p>Aún no hay records registrados.</p>
                        <p>¡Sé el primero en aparecer aquí!</p>
                    </div>
                )}
            </div>

            <footer className="ranking-board__footer">
                <Button variant="secondary" size="lg" onClick={onBack}>
                    Volver al Menú
                </Button>
            </footer>
        </section>
    );
};

export default RankingBoard;

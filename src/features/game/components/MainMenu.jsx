import hangedImg from '@/assets/images/hanged/hanget_7.svg';
import Button from '@/components/ui/Button';
import './MainMenu.css';

const MainMenu = ({ maxPoints, onStartGame, onCustomize, onShowRanking }) => {
    return (
        <section className="main-menu">
            <h1 className="main-menu__title">Hanged Game</h1>
            <h3 className="main-menu__subtitle">
                Puntaje maximo: <span className="main-menu__score">{maxPoints}</span>
            </h3>
            <img className="main-menu__image" src={hangedImg} alt="Horca" />
            <div className="main-menu__actions">
                <Button variant="primary" size="lg" onClick={onStartGame} className="btn--pulse">
                    Iniciar Juego
                </Button>
                <div className="main-menu__subactions">
                    <Button variant="secondary" size="md" onClick={onCustomize}>
                        Personalizar
                    </Button>
                    <Button variant="secondary" size="md" onClick={onShowRanking}>
                        Ver Ranking
                    </Button>
                </div>
            </div>
        </section>
    );
};


export default MainMenu;

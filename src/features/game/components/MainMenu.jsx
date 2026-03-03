import hangedImg from '@/assets/images/hanged/hanget_7.svg';
import Button from '@/components/ui/Button';
import './MainMenu.css';

const MainMenu = ({ maxPoints, onStartGame, onCustomize }) => {
    return (
        <section className="main-menu">
            <h1 className="main-menu__title">Hanged Game</h1>
            <h3 className="main-menu__subtitle">
                Puntaje maximo: <span className="main-menu__score">{maxPoints}</span>
            </h3>
            <br />
            <img className="main-menu__image" src={hangedImg} alt="Horca" />
            <br />
            <Button variant="primary" size="lg" onClick={onStartGame}>
                Iniciar Juego
            </Button>
            <br />
            <Button variant="secondary" size="md" onClick={onCustomize}>
                Juego Personalizado
            </Button>
        </section>
    );
};

export default MainMenu;

import { useState, useEffect } from 'react';
import './HangedFigure.css';

// Importar todas las imágenes de la horca
import hanged0 from '@/assets/images/hanged/hanget_0.svg';
import hanged1 from '@/assets/images/hanged/hanget_1.svg';
import hanged2 from '@/assets/images/hanged/hanget_2.svg';
import hanged3 from '@/assets/images/hanged/hanget_3.svg';
import hanged4 from '@/assets/images/hanged/hanget_4.svg';
import hanged5 from '@/assets/images/hanged/hanget_5.svg';
import hanged6 from '@/assets/images/hanged/hanget_6.svg';
import hanged7 from '@/assets/images/hanged/hanget_7.svg';

const HANGED_IMAGES = [hanged0, hanged1, hanged2, hanged3, hanged4, hanged5, hanged6, hanged7];

const HangedFigure = ({ fails, streak }) => {
    const [shaking, setShaking] = useState(false);
    const [displayStreak, setDisplayStreak] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const imageSrc = HANGED_IMAGES[fails] || HANGED_IMAGES[0];

    // Disparar shake al cambiar fails (pero no en 0)
    useEffect(() => {
        if (fails > 0) {
            setShaking(true);
            const timer = setTimeout(() => setShaking(false), 500);
            return () => clearTimeout(timer);
        }
    }, [fails]);

    // Lógica para mostrar la racha temporalmente
    useEffect(() => {
        if (streak > 0) {
            setDisplayStreak(streak);
            setIsVisible(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1000); // Duración de 1000ms + margen para animación

            return () => clearTimeout(timer);
        }
    }, [streak]);

    const figureClass = [
        'hanged-figure',
        shaking ? 'hanged-figure--shake' : '',
    ].filter(Boolean).join(' ');

    return (
        <div className={figureClass}>
            <div className="hanged-figure__container">
                <img className="hanged-figure__image" src={imageSrc} alt={`Horca - ${fails} fallos`} />

                {isVisible && displayStreak > 1 && (
                    <div key={displayStreak} className="hanged-figure__streak-badge">
                        <span className="hanged-figure__streak-text">RACHA</span>
                        <span className="hanged-figure__streak-count">{displayStreak}</span>
                        <span className="hanged-figure__streak-fire">🔥</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HangedFigure;

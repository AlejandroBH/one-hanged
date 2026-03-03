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

const HangedFigure = ({ fails }) => {
    const imageSrc = HANGED_IMAGES[fails] || HANGED_IMAGES[0];

    return (
        <div className="hanged-figure">
            <img className="hanged-figure__image" src={imageSrc} alt={`Horca - ${fails} fallos`} />
        </div>
    );
};

export default HangedFigure;

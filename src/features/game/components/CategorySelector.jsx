import Button from '@/components/ui/Button';
import { CATEGORIES, CATEGORY_LABELS, CATEGORY_BUTTONS } from '../data/wordLists';
import './CategorySelector.css';

const CATEGORY_ICONS = {
    [CATEGORIES.CUSTOM]: '✍️',
    [CATEGORIES.DEFAULT]: '📝',
    [CATEGORIES.COMPUTING]: '💻',
    [CATEGORIES.FRUITS]: '🍎',
    [CATEGORIES.ANIMALS]: '🦁',
    [CATEGORIES.VIDEOGAMES]: '🎮',
    [CATEGORIES.CAR_BRANDS]: '🏎️',
    [CATEGORIES.PROFESSIONS]: '👨‍⚕️',
};

const CategorySelector = ({ currentCategory, onSelectCategory, onGoToCustomWords, onStartGame, onBack }) => {
    const handleCategoryClick = (categoryId) => {
        if (categoryId === CATEGORIES.CUSTOM) {
            onSelectCategory(categoryId);
            onGoToCustomWords();
        } else {
            onStartGame(categoryId);
        }
    };

    return (
        <section className="category-selector">
            <header className="category-selector__header">
                <h1 className="category-selector__title">Categorías</h1>
                <p className="category-selector__subtitle">
                    Selecciona un tema para comenzar a jugar
                </p>
            </header>

            <div className="category-selector__grid">
                {CATEGORY_BUTTONS.map((cat) => (
                    <button
                        key={cat.id}
                        className={`category-selector__btn category-selector__btn--${cat.id} ${currentCategory === cat.id ? 'category-selector__btn--active' : ''}`}
                        onClick={() => handleCategoryClick(cat.id)}
                    >
                        <span className="category-selector__btn-icon">
                            {CATEGORY_ICONS[cat.id]}
                        </span>
                        <span className="category-selector__btn-label">
                            {cat.label}
                        </span>
                    </button>
                ))}
            </div>

            <footer className="category-selector__footer">
                <Button variant="secondary" size="lg" onClick={onBack}>
                    Volver al Menú
                </Button>
            </footer>
        </section>
    );
};


export default CategorySelector;

import Button from '@/components/ui/Button';
import { CATEGORIES, CATEGORY_LABELS, CATEGORY_BUTTONS } from '../data/wordLists';
import './CategorySelector.css';

const CategorySelector = ({ currentCategory, onSelectCategory, onGoToCustomWords, onStartGame, onBack }) => {
    const handleCategoryClick = (categoryId) => {
        if (categoryId === CATEGORIES.CUSTOM) {
            onSelectCategory(categoryId);
            onGoToCustomWords();
        } else {
            // Pasar categoría directamente para evitar bug de estado stale
            onStartGame(categoryId);
        }
    };

    return (
        <section className="category-selector">
            <h1 className="category-selector__title">Categorias</h1>
            <h3 className="category-selector__subtitle">
                Palabras <span className="category-selector__label">
                    {CATEGORY_LABELS[currentCategory] || 'predeterminadas'}
                </span>
            </h3>
            <div className="category-selector__grid">
                {CATEGORY_BUTTONS.map((cat) => (
                    <button
                        key={cat.id}
                        className={`category-selector__btn category-selector__btn--${cat.id}`}
                        onClick={() => handleCategoryClick(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
            <div className="category-selector__actions">
                <Button variant="secondary" size="md" onClick={onBack}>
                    Volver
                </Button>
            </div>
        </section>
    );
};

export default CategorySelector;

import './ThemeToggle.css';

const ThemeToggle = ({ isDark, onToggle }) => {
    return (
        <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
        >
            <span className="theme-toggle__icon">
                {isDark ? '☀️' : '🌙'}
            </span>
        </button>
    );
};

export default ThemeToggle;

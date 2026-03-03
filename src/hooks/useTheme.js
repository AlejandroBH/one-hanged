import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'hanged-game-theme';

/**
 * Hook para manejar el tema claro/oscuro con persistencia en localStorage.
 * Prioridad: localStorage > preferencia del sistema > 'light'.
 */
const useTheme = () => {
    const getInitialTheme = () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;

        // Fallback: preferencia del sistema operativo
        if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Aplicar tema al <html> y persistir
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    const isDark = theme === 'dark';

    return { theme, isDark, toggleTheme };
};

export default useTheme;

// Categorías de palabras
export const CATEGORIES = {
    CUSTOM: 0,
    DEFAULT: 1,
    COMPUTING: 2,
    FRUITS: 3,
    ANIMALS: 4,
    VIDEOGAMES: 5,
    CAR_BRANDS: 6,
    PROFESSIONS: 7,
};

// Nombres de categorías para display
export const CATEGORY_LABELS = {
    [CATEGORIES.CUSTOM]: 'personalizadas',
    [CATEGORIES.DEFAULT]: 'predeterminadas',
    [CATEGORIES.COMPUTING]: 'de informática',
    [CATEGORIES.FRUITS]: 'de frutas',
    [CATEGORIES.ANIMALS]: 'de animales',
    [CATEGORIES.VIDEOGAMES]: 'de videojuegos',
    [CATEGORIES.CAR_BRANDS]: 'de marcas de autos',
    [CATEGORIES.PROFESSIONS]: 'de profesiones',
};

// Nombres de botones de categoría
export const CATEGORY_BUTTONS = [
    { id: CATEGORIES.CUSTOM, label: 'Personalizado' },
    { id: CATEGORIES.DEFAULT, label: 'Predeterminado' },
    { id: CATEGORIES.COMPUTING, label: 'Informatica' },
    { id: CATEGORIES.FRUITS, label: 'Frutas' },
    { id: CATEGORIES.ANIMALS, label: 'Animales' },
    { id: CATEGORIES.VIDEOGAMES, label: 'Videojuegos' },
    { id: CATEGORIES.CAR_BRANDS, label: 'Marcas de autos' },
    { id: CATEGORIES.PROFESSIONS, label: 'Profesiones' },
];

// Listas de palabras por categoría
export const WORD_LISTS = {
    [CATEGORIES.DEFAULT]: [
        'empalmar', 'velador', 'nieve', 'primera', 'roca', 'riachuelo', 'lago',
        'levadura', 'ruleta', 'estirar', 'domingo', 'frenar', 'peligro', 'maleta',
        'profesor', 'epitafio', 'burbuja', 'mesa', 'conectar', 'marco', 'pollito',
        'mapache', 'sombrero', 'turistas', 'termostato', 'correr', 'doctora', 'yema',
        'goleada', 'acusado', 'horizonte', 'contento', 'toallero', 'final', 'varilla',
        'abuelos', 'atreverse', 'maquillaje', 'pauta', 'madera', 'coro', 'principio',
        'suicidio', 'plumero', 'colocar', 'lazo', 'guillotina', 'manicura', 'sumar', 'yegua',
    ],
    [CATEGORIES.COMPUTING]: [
        'software', 'hardware', 'monitor', 'javascript', 'vscode', 'teclado',
        'impresora', 'hipertexto', 'phyton', 'enlace',
    ],
    [CATEGORIES.FRUITS]: [
        'manzana', 'pera', 'platano', 'frutilla', 'piña', 'ciruela',
        'melon', 'sandia', 'papaya', 'mango',
    ],
    [CATEGORIES.ANIMALS]: [
        'perro', 'gato', 'raton', 'lobo', 'zorro', 'gorila',
        'elefante', 'hiena', 'jaguar', 'canguro',
    ],
    [CATEGORIES.VIDEOGAMES]: [
        'sekiro', 'darksoul', 'bloodborne', 'eldenring', 'mariobros',
        'roblox', 'minecraft', 'bioschok', 'rayman', 'megaman',
    ],
    [CATEGORIES.CAR_BRANDS]: [
        'mazda', 'chevrolet', 'ferrari', 'audi', 'volvo', 'ford',
        'hyundai', 'nissan', 'maserati', 'peugeot',
    ],
    [CATEGORIES.PROFESSIONS]: [
        'piloto', 'ingeniero', 'mecanico', 'arquitecto', 'carnicero',
        'granjero', 'profesor', 'carabinero',
    ],
};

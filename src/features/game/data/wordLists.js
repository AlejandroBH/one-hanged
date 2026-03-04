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
        'empalmar'
    ],
    [CATEGORIES.COMPUTING]: [
        'software', 'hardware', 'monitor', 'javascript', 'vscode', 'teclado',
        'impresora', 'hipertexto', 'python', 'enlace', 'servidor', 'interfaz',
        'compilador', 'algoritmo', 'navegador', 'memoria', 'puntero', 'variable',
        'terminal', 'consola', 'libreria', 'entorno',
    ],
    [CATEGORIES.FRUITS]: [
        'manzana', 'pera', 'platano', 'frutilla', 'piña', 'ciruela',
        'melon', 'sandia', 'papaya', 'mango', 'cereza', 'uva',
        'durazno', 'naranja', 'limon', 'kiwi', 'mora', 'arandano',
        'granada', 'higo', 'frambuesa',
    ],
    [CATEGORIES.ANIMALS]: [
        'perro', 'gato', 'raton', 'lobo', 'zorro', 'gorila',
        'elefante', 'hiena', 'jaguar', 'canguro', 'tigre', 'leon',
        'pantera', 'jirafa', 'cebra', 'avestruz', 'hipopotamo', 'koala',
        'panda', 'aguila', 'tiburon', 'delfin',
    ],
    [CATEGORIES.VIDEOGAMES]: [
        'sekiro', 'darksoul', 'bloodborne', 'eldenring', 'mariobros',
        'roblox', 'minecraft', 'bioschok', 'rayman', 'megaman', 'halo',
        'fortnite', 'overwatch', 'valorant', 'pokemon', 'zelda', 'metroid',
        'pacman', 'tetris', 'sonic', 'doom', 'witcher',
    ],
    [CATEGORIES.CAR_BRANDS]: [
        'mazda', 'chevrolet', 'ferrari', 'audi', 'volvo', 'ford',
        'hyundai', 'nissan', 'maserati', 'peugeot', 'toyota', 'honda',
        'porsche', 'mercedes', 'bmw', 'bugatti', 'tesla', 'subaru',
        'mitsubishi', 'renault', 'jeep',
    ],
    [CATEGORIES.PROFESSIONS]: [
        'piloto', 'ingeniero', 'mecanico', 'arquitecto', 'carnicero',
        'granjero', 'profesor', 'carabinero', 'abogado', 'medico',
        'dentista', 'bombero', 'cocinero', 'pintor', 'musico', 'escritor',
        'periodista', 'detective', 'cientifico', 'vendedor',
    ],
};

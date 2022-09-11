// SelectCategory:
// 0: Predeterminado
// 1: Informatica
// 2: Frutas
// 3: Animales
// 4: Videojuegos
// 5: Marcas de autos
// 6: Profesiones
// 7: Palabras personalizadas
let words = [];
let customWords = [];

// Esta funcion crea array de palabras segun la categoria seleccionada
function selectCategory(option){
    switch(option){
        case 0:
            words = [
                'empalmar',
                'velador',
                'nieve',
                'primera',
                'roca',
                'riachuelo',
                'lago',
                'levadura',
                'ruleta',
                'estirar',
                'domingo',
                'frenar',
                'peligro',
                'maleta',
                'profesor',
                'epitafio',
                'burbuja',
                'mesa',
                'conectar',
                'marco',
                'pollito',
                'jaguar',
                'sombrero',
                'turistas',
                'termostato',
                'correr',
                'doctora',
                'yema',
                'goleada',
                'acusado',
                'horizonte',
                'contento',
                'toallero',
                'final',
                'varilla',
                'abuelos',
                'atreverse',
                'maquillaje',
                'pauta',
                'madera',
                'coro',
                'principio',
                'suicidio',
                'plumero',
                'colocar',
                'lazo',
                'guillotina',
                'manicura',
                'sumar',
                'yegua',
        ]; break;
        case 1:
            words = [
                'software',
                'hardware',
                'monitor',
                'javascript',
                'vscode',
                'teclado',
                'impresora',
                'hipertexto',
                'phyton',
                'enlace',
        ]; break;
        case 2:
            words = [
                'manzana',
                'pera',
                'platano',
                'frutilla',
                'piña',
                'ciruela',
                'melon',
                'sandia',
                'papaya',
                'mango',
        ]; break;
        case 3:
            words = [
                'perro',
                'gato',
                'raton',
                'lobo',
                'zorro',
                'gorila',
                'elefante',
                'hiena',
                'jaguar',
                'canguro',
        ]; break;
        case 4:
            words = [
                'sekiro',
                'darksoul',
                'bloodborne',
                'eldenring',
                'mariobros',
                'roblox',
                'minecraft',
                'bioschok',
                'rayman',
                'megaman',
        ]; break;
        case 5:
            words = [
                'mazda',
                'chevrolet',
                'ferrari',
                'audi',
                'volvo',
                'ford',
                'hyundai',
                'nissan',
                'maserati',
                'peugeot',
        ]; break;
        case 6:
            words = [
                'piloto',
                'ingeniera',
                'ingeniero',
                'mecanico',
                'arquitecto',
                'carnicero',
                'granjera',
                'profesor',
                'carabinero',
                'profesora',
        ]; break;
        case 7:
            // Crear metodo para insertar palabras personalizadas
            words = [];
        break;
    }
}

selectCategory(0);
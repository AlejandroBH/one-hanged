// SelectCategory:
// 0: Personalizado
// 1: Predeterminado
// 2: Informatica
// 3: Frutas
// 4: Animales
// 5: Videojuegos
// 6: Marcas de autos
// 7: Profesiones

const categoryTitle = document.querySelector('.selected-title-category');
const btnCategory0 = document.querySelector('.category-0');
const btnCategory1 = document.querySelector('.category-1');
const btnCategory2 = document.querySelector('.category-2');
const btnCategory3 = document.querySelector('.category-3');
const btnCategory4 = document.querySelector('.category-4');
const btnCategory5 = document.querySelector('.category-5');
const btnCategory6 = document.querySelector('.category-6');
const btnCategory7 = document.querySelector('.category-7');

let words = [];
let customWords = [];

btnCategory0.addEventListener('click', accessCategory0);
btnCategory1.addEventListener('click', accessCategory1);
btnCategory2.addEventListener('click', accessCategory2);
btnCategory3.addEventListener('click', accessCategory3);
btnCategory4.addEventListener('click', accessCategory4);
btnCategory5.addEventListener('click', accessCategory5);
btnCategory6.addEventListener('click', accessCategory6);
btnCategory7.addEventListener('click', accessCategory7);

function accessCategory0(){alert('Proximamente'); categoryTitle.innerHTML='personalizadas';} //programar funcion para agregar palabras
function accessCategory1(){selectCategory(1); categoryTitle.innerHTML='predeterminadas'; newGame();}
function accessCategory2(){selectCategory(2); categoryTitle.innerHTML='de informatica'; newGame();}
function accessCategory3(){selectCategory(3); categoryTitle.innerHTML='de frutas'; newGame();}
function accessCategory4(){selectCategory(4); categoryTitle.innerHTML='de animales'; newGame();}
function accessCategory5(){selectCategory(5); categoryTitle.innerHTML='de videojuegos'; newGame();}
function accessCategory6(){selectCategory(6); categoryTitle.innerHTML='de marcas de autos'; newGame();}
function accessCategory7(){selectCategory(7); categoryTitle.innerHTML='de profesiones'; newGame();}

// Esta funcion crea array de palabras segun la categoria seleccionada
function selectCategory(option){
    switch(option){
        case 0:
            // Crear metodo para insertar palabras personalizadas
            words = [];
        break;
        case 1:
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
                'mapache',
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
        case 2:
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
        case 3:
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
        case 4:
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
        case 5:
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
        case 6:
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
        case 7:
            words = [
                'piloto',
                'ingeniero',
                'ingeniero',
                'mecanico',
                'arquitecto',
                'carnicero',
                'granjero',
                'profesor',
                'carabinero',
                'profesor',
        ]; break;
    }
}

selectCategory(1);
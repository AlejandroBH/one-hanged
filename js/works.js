// SelectCategory:
// 0: Personalizar
// 1: Predeterminado
// 2: Informatica
// 3: Frutas
// 4: Animales
// 5: Videojuegos
// 6: Marcas de autos
// 7: Profesiones

btnCategory0 = document.querySelector('.category-0');
btnCategory1 = document.querySelector('.category-1');
btnCategory2 = document.querySelector('.category-2');
btnCategory3 = document.querySelector('.category-3');
btnCategory4 = document.querySelector('.category-4');
btnCategory5 = document.querySelector('.category-5');
btnCategory6 = document.querySelector('.category-6');
btnCategory7 = document.querySelector('.category-7');

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

function accessCategory0(){alert('no programado aun'); selectCategory(1);newGame();} //programar funcion para agregar palabras
function accessCategory1(){selectCategory(1);newGame();}
function accessCategory2(){selectCategory(2);newGame();}
function accessCategory3(){selectCategory(3);newGame();}
function accessCategory4(){selectCategory(4);newGame();}
function accessCategory5(){selectCategory(5);newGame();}
function accessCategory6(){selectCategory(6);newGame();}
function accessCategory7(){selectCategory(7);newGame();}

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
    }
}

selectCategory(1);
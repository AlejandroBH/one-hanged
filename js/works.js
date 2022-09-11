// SelectCategory:
// 1: Informactica
// 2: frutas
// 3: animales
// 4: videojuegos
// 5: autos
let words = [];

function selectCategory(option){
    words = [];

    switch(option){
        case 1:
            words = ['software','hardware','monitor','javascript','vscode','teclado','impresora','hipertexto','phyton','enlace'];
        break;
        case 2:
            words = ['manzana','pera','platano','frutilla','piña','ciruela','melon','sandia','papaya','mango'];
        break;
        case 3:
            words = ['perro','gato','raton','lobo','zorro','gorila','elefante','hiena','jaguar','canguro'];
        break;
        case 4:
            words = ['sekiro','darksoul','bloodborne','eldenring','mariobros','roblox','minecraft','bioschok','rayman','megaman'];
        break;
        case 5:
            words = ['mazda','chevrolet','ferrari','audi','volvo','ford','hyundai','nissan','maserati','peugeot'];
        break;
    }
}

selectCategory(1);
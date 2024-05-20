
(() => {

    // Definimos nuestro tipo de dato "Avengers"
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    };

    // Desestructuración de objetos
    const { poder, vision }: Avengers = avengers;

    //console.log(poder.toFixed(2), vision.toUpperCase());

    // Desestructuración de objetos en argumentos de entrada de funciones
    // El operador rest("...") en "resto" obtiene un nuevo objeto con el resto de propiedades(todas menos "ironman") del objeto original
    const printAvengers = ({ ironman, ...resto }: Avengers): void => {
        console.log(ironman, resto)
    };

    printAvengers(avengers);

    const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];

    // Desestructuración de arreglos o arrays
    const [ capitan , ironman, ]: string[] = avengersArr; // Obtiene la primera y segunda posición del arreglo o array "avengersArr"

    console.log({ ironman, capitan });
})();
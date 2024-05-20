
(() => {

    // Nota: Las interfaces de TypeScript no tienen traducción en JavaScript porque en JavaScript no existe ese conecpto.

    // Al igual que ocurre en otros lenguajes de programación, en TypeScript no es posible crear instancias de interfaces

    // Los tipos y las interfaces de TypeScript son prácticamente lo mismo
    // Hay una diferencia; Los tipos no pueden expandirse y las interfaces sí pueden

    // Definimos nuestro tipo de dato "Hero"
    // Las propiedades "age" y "getName" son opcionales('?')
    /*type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }; */

    // Definimos nuestra interfaz "Hero"
    // Las propiedades "age" y "getName" son opcionales('?')
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza', 'Volar'],
        getName() {
            return this.name;
        }
    };

})();


(() => {
    // Nota: Los tipos e interfaces de TypeScript no tienen traducción en JavaScript porque no existen en JavaScript.
    // Sin embargo, las clases si se traducen a JavaScript porque existen tanto en TypeScript como en JavaScript.

    // Los tipos y las interfaces de TypeScript son prácticamente lo mismo
    // Hay una diferencia; Los tipos no pueden expandirse y las interfaces sí pueden

    // Definimos nuestro tipo de dato "Hero"
    // Las propiedades "age" y "getName" son opcionales('?')
    type Hero = {
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
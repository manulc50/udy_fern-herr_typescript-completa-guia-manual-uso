

(() => {
 
    // TypeScript infiere que el tipo de dato para "flash" es "{ name: string, age: number, powers: string[] }"
    /*let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };*/

    /*flash = {
        name2: 'Otro nombre' // Error porque la propiedad "name2" no está en el tipo de dato "{ name: string, age: number, powers: string[] }" inferido por TypeScript
    }*/

    // Válido porque concuerda con el tipo de dato "{ name: string, age: number, powers: string[] }" inferido por TypeScript
    /*flash = {
        name: 'Superman',
        age: 60,
        powers: ['Súper fuerza']
    };*/

    // Especificamos que el tipo de dato de "flash" es "{ name: string, age?: number, powers: string[], getName?: () => string }"
    // Las propiedades "age" y "getName" son opcionales('?')
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };

    // Válido porque concuerda con el tipo de dato "{ name: string, age?: number, powers: string[], getName?: () => string }" especificado por nosotros
    flash = {
        name: 'Superman',
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };

    console.log(flash);
    console.log(flash.getName!()); // Como la propiedad "getName" es opcional, usando "!" indicamos a TypeScript que en este caso es seguro invocar a esa propiedad ya que no tiene valor "undefined"

})();
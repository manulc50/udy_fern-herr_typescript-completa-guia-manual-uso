
(() => {
    // Una tupla es como un array de tamaño fijo donde podemos especificar el tipo de dato de cada elemento de la tupla.
    // La tupla de TypeScript se traduce como un array tradicional en JavaScript.

    //const hero = ['Dr Strange', 100]; // En este caso, aunque no hemos especificado un tipo de dato, TypeScript infiere que el tipo de dato es un array de datos de tipo "number" y "string"
    //const hero: [string, number] = ['Dr Strange', 100]; // En este caso, especificamos que el tipo de dato es una tupla donde siempre el primer elemento es de tipo "string" y el segundo es de tipo "number"
    const hero: [string, number, boolean] = ['Dr Strange', 100, true]; // En este caso, especificamos que el tipo de dato es "una tupla de tres elementos" donde siempre el primer elemento es de tipo "string", el segundo es de tipo "number" y el tercero es de tipo "boolean"

    //hero[0] = 50; // Error: El primer elemento de la tupla sólo admite valores de tipo "string"
    //hero[1] = 'Spiderman'; // Error: El segundo elemento de la tupla sólo admite valores de tipo "number"

    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero);
})();
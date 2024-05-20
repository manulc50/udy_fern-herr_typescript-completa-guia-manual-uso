

(() => {

    const addNumber = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hola ${ name }`;
    const saveTheWorld = (): string => 'El mundo está salvado!';

    //let myFunction; // TypeScript infiere que el tipo de datos es "any"
    //let myFunction: Function; // Ahora "myFunction" es de tipo "Function"
    //let myFunction: (x: number, y: number) => number; // Ahora "myFunction" es de tipo "Function" que recibe 2 argumentos obligatorios de tipo "number" y devuelve un dato también de tipo "number"
    //let myFunction: (x: string ) => string; // Ahora "myFunction" es de tipo "Function" que recibe 1 argumento obligatorio de tipo "string" y devuelve un dato también de tipo "string"
    let myFunction: () => string; // Ahora "myFunction" es de tipo "Function" que no recibe ningún argumento de entrada y devuelve un dato de tipo "string"

    /*myFunction = 10; // Válido si "myFunction" es de tipo "any"
    console.log(myFunction); */

    /*myFunction = addNumber; // Válido si "myFunction" es de tipo "Function" o de tipo "(x: number, y: number) => number". Ahora "myFunction" tiene la referencia de "addNumber"(las funciones son objetos)
    console.log(myFunction(1, 2)); */

    /*myFunction = greet; // Válido si "myFunction" es de tipo "Function" o de tipo "(x: string ) => string". Ahora "myFunction" tiene la referencia de "greet"(las funciones son objetos)
    console.log(myFunction('Manuel'));*/

    myFunction = saveTheWorld; // Válido si "myFunction" es de tipo "Function" o de tipo "() => string". Ahora "myFunction" tiene la referencia de "saveTheWorld"(las funciones son objetos)
    console.log(myFunction());
})();
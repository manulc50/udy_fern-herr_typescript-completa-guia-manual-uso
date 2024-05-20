import { Hero, Villain } from '../interfaces';
import { genericFunction, genericFunctionArrow, genericFunctionWithAny, printObject } from "../generics/generics";
import { getPokemon } from "../generics/get-pokemon";


// La función "printObject" puede recibir cualquier tipo de dato porque su argumento de entrada esta definido como "any"
printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4 , 5]);
printObject('Hola Mundo');

// Problema: La función "genericFunction" recibe un argumento de tipo "any" y devuelve ese mismo argumento, pero TypeScript no sabe como interpretarlo debido a que no se trata de un tipo de dato en concreto
console.log(genericFunctionWithAny(3.1416).toFixed(2)); // OK: El método "toFixed()" se aplica a un tipo de dato "number" que es lo que está devolviendo la función "genericFunction"
//console.log(genericFunctionWithAny(new Date()).toFixed(2)); // Error: El método "toFixed()" se aplica a un tipo de dato "number" pero la función "genericFunction" está devolviendo un tipo de dato "Date"
//console.log(genericFunctionWithAny('Hola Mundo').toFixed(2)); // Error: El método "toFixed()" se aplica a un tipo de dato "number" pero la función "genericFunction" está devolviendo un tipo de dato "string"

// Solución: Uso de genéricos para que TypeScript pueda interpretar el tipo de dato que se usa en cada momento
console.log(genericFunction(123).toFixed(2));
console.log(genericFunctionArrow('Hola Mundo').toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
};

console.log(genericFunctionArrow<Hero>(deadpool).name);
//console.log(genericFunctionArrow<HeroI>(deadpool).dangerLevel); // Error porque hemos indicado a TypeScript que el dato que le estamos pasando a al función "genericFunctionArrow" es de tipo "Hero"
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel); // Pero si ahora indicamos a TypeScript que el tipo de dato es "Villain", todo está ok 


getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(console.log) // Versión simplificada de la expresión "error => console.log(error)"
    .finally(() => console.log('Fin de getPokemon'));








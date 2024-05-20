

export const printObject = (argument: any): void => {
    console.log(argument);
};

// Definimos una función tradicional genérica que recibe un argumento de entrada de tipo "any" y devuelve ese mismo argumento
export function genericFunctionWithAny(argument: any): any {
    return argument;
}

// Definimos una función tradicional genérica usando el tipo genérico "T"
// Esta función recibe un argumento de entrada de tipo genérico "T" y devuelve ese mismo argumento
export function genericFunction<T>(argument: T): T {
    return argument;
}

// Definimos una arrow function o función de tipo flecha genérica usando el tipo genérico "T"
// Esta función recibe un argumento de entrada de tipo genérico "T" y devuelve ese mismo argumento
export const genericFunctionArrow = <T>(argument: T): T => argument;
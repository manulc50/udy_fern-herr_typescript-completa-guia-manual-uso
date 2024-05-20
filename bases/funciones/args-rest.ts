

(() => {

    // La idea es que el primer argumento sea obligatorio y pueda recibir un número variable de argumentos opcionales
    // El operador "..." usado en argumentos de entrada en funciones(también puede ser usado en objetos) se denomina operador "REST"
    const fullName = (firstname: string, ...restArgs: string[]): string => {
        return `${ firstname } ${ restArgs.join(' ') }`;

    }

    const superman = fullName('Clark', 'Joseph', 'Kent');

    console.log({ superman });


})();
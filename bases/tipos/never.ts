
(() => {


    // El tipo de dato TypeScript "never" se usa en funciones e indica que la función nunca debe terminar con éxito
    const error = (message: string): never => {

        throw new Error(message);
    };

    // En este caso, esta función puede devolver un dato de tipo "number" o un error
    const error2 = (message: string): (never | number) => {

        if(false)
            throw new Error(message);

        return 1;
    };

    error('Auxilio!!!'); // A partir de aquí, se interrumpe la ejecución del código
    console.log('Hola Mundo');

})();
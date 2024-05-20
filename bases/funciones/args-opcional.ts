

(() => {

    // El argumento de entrada "firstname" es obligatorio y el argumento de entrada "lastname" es opcional('?')
    // En TypeScript, los argumentos de entrada obligatorios de una función tienen que ser declarados todos al principio y aquellos argumentos que sean opcionales tienen que se declrados al final
    const fullName = (firstname: string, lastname?: string): string => {
        return `${ firstname } ${ lastname || '----' }`;
    };

    const name = fullName('Tony');

    console.log({ name });

})();
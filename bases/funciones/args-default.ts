

(() => {

    // El argumento de entrada "firstname" es obligatorio y los argumentos de entrada "lastname" y "upper" son opcionales("upper" es opcional porque tiene asignado un valor por defecto que se aplica en caso de que no venga)
    // En TypeScript, los argumentos de entrada obligatorios de una función tienen que ser declarados todos al principio y aquellos argumentos que sean opcionales tienen que se declrados al final
    const fullName = (firstname: string, lastname?: string, upper: boolean = false): string => {

        if(upper)
            return `${ firstname } ${ lastname || '----' }`.toUpperCase();
        else
        return `${ firstname } ${ lastname || '----' }`;
    };

    const name = fullName('Tony', 'Stark', true);

    console.log({ name });

})();
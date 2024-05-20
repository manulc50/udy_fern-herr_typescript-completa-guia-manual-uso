

(() => {

    const nada: undefined = undefined;
    //const isActive: boolean = undefined; // Error porque por defecto no se permite hacer asignaciones de valores "undefined" o "null" porque la propiedad "strictNullChecks" del archivo de configuración "tsconfig.json" está a true
    //const isActive: boolean = null; // Error porque por defecto no se permite hacer asignaciones de valores "undefined" o "null" porque la propiedad "strictNullChecks" del archivo de configuración "tsconfig.json" está a true
    const isActive: (boolean | undefined) = undefined; // Válido pero no tiene mucho sentido en TypeScript asignar el valor "undefined" a una variable o constante

    console.log(isActive);

})();
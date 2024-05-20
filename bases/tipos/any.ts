
// Se debe usar lo menos posible el tipo de dato "any" de TypeScript porque este tipo de dato indica que se puede usar cualquier tipo de dato y debemos ser lo más estricto posible

(() => {

    let avenger: any;
    let exists; // Aunque no hemos especificado el tipo de dato, TypeScript infiere que es de tipo "any"
    let power; // Aunque no hemos especificado el tipo de dato, TypeScript infiere que es de tipo "any"

    // Los IDE's, como Visual Studio Code, no muestran ayudas ni auto-completados con declaraciones de tipo "any" porque no se trata de un tipo de dato en concreto
    // Pero, con el tipo de dato "any", podemos usar castings para indicar tipos de datos en concreto en puntos determinados del código y, en estos caso, los IDE's sí muestran ayudas y auto-completados para esos tipos de datos específicos

    avenger = 'Dr Strange'; // Válido porque "avenger" es de tipo "any"
    //console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0)); // Hacemos un casting al tipo de dato "string"

    avenger = 150.232578; // Válido porque "avenger" es de tipo "any"
    //console.log(avenger.toFixed(2));
    console.log((<number>avenger).toFixed(2)); // Otra forma de hacer un casting. En este caso, hacemos un casting al tipo de dato "number"

    console.log(exists); // Muestra "undefined" porque la variable está definida pero no tiene asignada un valor
    console.log(power); // Muestra "undefined" porque la variable está definida pero no tiene asignada un valor
})();
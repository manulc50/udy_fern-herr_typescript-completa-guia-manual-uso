

(() => {

    // En TypeScript, si una función no devulve nada, se recomienda indicarlo con el tipo de dato "void"
    function callBatman(): void {

        //return 1; // Error porque la función devuelve el tipo de dato "void", es decir, nada
    }

    // Lo mismo pero en una arrow function o función de tipo flecha
    const callSuperman = (): void => {

        //return true;  // Error porque la función devuelve el tipo de dato "void", es decir, nada
    };

    const a = callBatman(); // "a" tiene el valor "undefined"

    console.log(a);

})();
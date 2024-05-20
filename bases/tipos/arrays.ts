

(() => {

    /*const numbers = [1,2,3,4,5,'6',7,8,9,10]; // Como no hemos especificado el tipo de dato, TypeScript infiere que este array es de tipo "number" y "string"

    //numbers.push(true); // Error: Este array sólo admite valores de tipo "number" o "string"
    numbers.push(11); */

    const numbers: (number | string | boolean)[] = [1,2,3,4,5,'6',7,8,9,10]; // Este array acepta valores de tipo "number", "string" y "boolean"

    numbers.push(true);

    console.log(numbers);

    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde']; // Aunque no hemos especificado el tipo de dato, TypeScript infiere que este array es de tipo "string"

    villians.forEach(v => console.log(v.toUpperCase()));

})();
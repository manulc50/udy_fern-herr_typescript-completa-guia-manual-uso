

(() => {

    // Definimos nuestro tipo de dato "Hero"
    // Las propiedades "age" y "getName" son opcionales('?')
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustomVariable: (string | number | Hero) = 'Manuel';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomVariable);

})();

const saludo: string = 'Hola';

(() => {

    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    isSuperman = isBatman ? false : true;

    console.log({ isSuperman });

})();
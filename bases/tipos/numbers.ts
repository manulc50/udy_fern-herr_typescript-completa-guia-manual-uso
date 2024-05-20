

(() => {

    let avengers: number = 10;

    console.log(avengers);

    const villians: number = 10;

    if(avengers < villians) 
        console.log('Estamos en problemas');
    else
        console.log('Nos salvamos');

    // Para TypeScript esto es correcto porque el constructor "Number" devuleve un dato de tipo number y concuerdan los tipos de datos, sin embargo, el resultado no es el esperado porque, en este caso, "Number('55A')" devuelve NaN(Not a Number)
    // Nan es considerado un dato de tipo number.
    avengers = Number('55A');

    console.log({ avengers });
})();
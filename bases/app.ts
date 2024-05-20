
/* Usando el comando "tsc app", generamos(transpila o compila) el archivo JavaScript correspondiente al archivo TypeScript "app.ts" */
/* Usando el comando "tsc" sobre un directorio, generamos(transpila o compila) los archivos JavaScript correspondientes a los archivos TypeScript que se encuentren en ese directorio */
/* El comando "tsc --init" crea un proyecto de tipo TypeScript generándose el archivo de configuración "tsconfig.json" */
/* Modo Observador de TypeScript - Con el comando "tsc --watch", "tsc --w" , "tsc -watch" o "tsc -w", cada cambio que se produzca en algún archivo de TypeScrip, automáticamente se genera(transpila o compila) su archivo correspondiente de JavaScript */ 

// Usamos una función anónima auto-invocada para encapsular o aislar el código de este archivo TypeScript
// Esto lo hacemos porque, como tenemos varios archivos TypeScript, a veces(según la versión de JavaScript o ECMAScript que se use para la traducción del cñodigo) las declaraciones de variables y constantes en estos archivos se traducen, mediante el proceso de traspilación o compilación, en declaraciones de JavaScript que usa la palabra "var" provocando que se almacenen como propiedades en el objeto global "window" 
// Por lo tanto, si no aislamos o encapsulamos el código de cada archivo TypeScript y declaramos la misma variable o constante en varios de estos archivos, TypeScript se queja usando, como ejemplo, el siguiente mensaje de error
/* 
    Cannot redeclare block-scoped variable 'saludo'.ts(2451)
    booleans.ts(2, 7): 'saludo' was also declared here.
*/

/* Por defecto, los comentarios que pongamos en los archivos de TypeScript se pasan a sus correspondientes archivos de JavaScript durante el proceso de transpilación o compilación de esos archivos TypeScript.
   Si se desea que los comentarios no pasen a los archivos de JavaScript durante el proceso de traspilación o compilación, se debe poner la propiedad "removeComments" del archivo de configuración de TypeScript "tsconfig.json" a true */

/* Por defecto, TypeScript ignora, a la hora de realizar la transpilación o compilación, los archivos .ts que se encuentran dentro del directorio "node_modules" si existiese */


(() => {

    const msg: string = 'Hola mundo';

    const hero = {
        name: 'Ironman',
        age: 45
    };

    // hero.age = '50'; // Error: TypeScript detecta que la propiedad "age" es de tipo Number y no te deja asignarla una cadena de texto
    hero.age = 50;

    console.log(hero.age + 1);

})();
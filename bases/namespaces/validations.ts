

// En lugar de crear una función anónima auto-invocada para aislar el código, vamos a crear un namespace

// Un namespace nos permite realizar agrupaciones

// Definimos el namespace "Validations" - Este namespace agrupa todo lo que tiene que ver con las validaciones
namespace Validations {

    // Aquello que se quiera usar fuera del namespace hay que exportarlo con "export"

    export const validateText = (text: string): boolean => text.length > 3 ? true : false;

    export const validateDate = (date: Date): boolean => isNaN(date.valueOf()) ? false : true;
}

console.log(Validations.validateText('Man'));
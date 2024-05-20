
(() => {

    // Ésto no es muy común verlo y usarlo

    // Definimos esta interfaz para restringir funciones
    interface AddTwoNumbers {
        (a: number, b: number): number; // La funciín debe recibir 2 argumentos de entrada de tipo "number" y devolver un dato también de tipo "number"
    }

    const addNumbersFunction: AddTwoNumbers = (a: number, b: number): number => a + b;

})();
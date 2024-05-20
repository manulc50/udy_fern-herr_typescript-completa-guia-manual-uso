
(() => {

    // Una clase abstracta sirve de "cascarón" para implementar otras clases
    // No se puede instanciar objetos de una clase abstracta

    // Definición de una clase abstracta
    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {

        // Si no indicamos un constructor, por defecto y de forma automática se invoca al constructor de la clase padre "Avenger"
    
        // Método público. Es queivalente a la expresión "public salvarMundo(): string { ... }"
        salvarMundo(): string {
            return 'Mundo salvado!';
        }
    }

    class Villian extends Mutante {

        // Si no indicamos un constructor, por defecto y de forma automática se invoca al constructor de la clase padre "Avenger"
    
        // Método público. Es queivalente a la expresión "public conquistarMundo(): string { ... }"
        conquistarMundo(): string {
            return 'Mundo conquistado!';
        }
    }

    //const wolverine: Mutante = new Mutante('Wolverine', 'Logan'); // Error: No se puede instanciar objetos de una clase abstracta
    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villian = new Villian('Magneto', 'Magnus');

    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    const printName = (character: Mutante): void => console.log(character.name);

    printName(wolverine); // Válido porque el objeto "wolverine" es de la clase "Xmen" que extiende de la clase padre "Mutante"
    printName(magneto); // Válido porque el objeto "magneto" es de la clase "Villian" que extiende de la clase padre "Mutante"
    

})();

(() => {

    // Definimos la interfaz "Xmen"
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    // Definimos la interfaz "Human"
    interface Human {
        age: number;
    }

    // Esta clase implementa las interfaces "Xmen" y "Human"
    class Mutant implements Xmen, Human {

        constructor(public name: string, public realName: string, public age: number) {

        }

        // Método público
        mutantPower(id: number): string {
            return `${ this.name } ${ this.realName }`;
        }
    }

})();
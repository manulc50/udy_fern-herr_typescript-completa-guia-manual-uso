
(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado!');
        }

        // El modificador "protected" hace que este método sea accesible dentro de su propia clase y también en las clases hijas de esta clase, es decir, aquellas clases que extiendan esta clase padre
        protected getFullName(): string {
            return `${ this.name } ${ this.realName }`;
        }
    }

    // Herencia
    class Xmen extends Avenger {

        // Si no indicamos un constructor, por defecto y de forma automática se invoca al constructor de la clase padre "Avenger"

        constructor(
            name: string, // No crea una propiedad de la clase. Simplemente es un argumento de entrada del constructor
            realName: string, // No crea una propiedad de la clase. Simplemente es un argumento de entrada del constructor
            public isMutant: boolean // Crea la propiedad "isMutant" en la clase porque hemos especificado un modificador
        ) {
            super(name, realName); // La invocación al constructor de la clase padre siempre tiene que estar al principio del todo
            console.log('Constructor Xmen llamado!');
        }

        // Los métodos getters y setters se invocan como si accedieramos a una propiedad de una clase

        get fullName(): string {
            return `${ this.name } ${ this.realName }`;
        }

        // En TypeScript, los métodos "setter" sólo pueden recibir un argumento de entrada
        set fullName(name: string) {
            if(name.length < 3)
                throw new Error('El nombre tiene que tener 3 letras o más');

            this.name = name;
        }

        // Método público. Es equivalente a poner "public getFullNameDesdeXmen(): string { ... }"
        getFullNameDesdeXmen(): string {
            return super.getFullName(); // Podemos acceder a este método "protected" de la clase padre "Avenger" porque esta clase es hija de esa clase padre "Avenger" 
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.getFullNameDesdeXmen());
    wolverine.fullName = 'Fernando'; // Invoca al método setter "fullName"
    console.log(wolverine.fullName); // Invoca al método getter "fullName"

})();
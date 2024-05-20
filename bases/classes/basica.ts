
(() => {

    class Avenger {

        // Por defecto, una propiedad de una clase en TypeScript es pública si no se indica otra cosa
        // Por defecto, un método de una clase en TypeScript es público si no se indica otra cosa

        private static avgAge: number = 35; // Propiedad privada, estática(pertenece a la clase y no a las instancias) y obligatoria

        // Método público y estático(pertenece a la clase y no a las instancias)
        public static getAvgAge(): number {
            return this.avgAge; // Como este método es estático, sólo podemos acceder a propiedades estáticas
        }

        /*private name: string = 'Scott Lang'; // Propiedad privada y obligatoria. Se inicializa con el valor "Scott Lang" 
        public team: string; // Propiedad pública y obligatoria
        realName?: string; // Popiedad pública y opcional('?')

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }*/

        // Forma corta de crear propiedades y asignar valores en una clase de TypeScript
        constructor(
             private name: string,
             public team: string,
             public realName?: string
        ) { }

        
        // Método público. En este caso, es equivalente a poner "public bio(): string { ... }"
        bio(): string {
            return `${ this.name } (${ this.team })`;
        }

        // Método privado
        private bio2(): string {
            return `${ this.name } (${ this.realName })`;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitán', 'Scott Lang');
    //console.log(Avenger.avgAge); // Error: La propiedad estática "avgAge" es privada y no puede ser accedida desde fuera de la clase
    console.log(Avenger.getAvgAge());
    console.log(antman);
    console.log(antman.bio());
    //console.log(antman.bio2()); // Error: El método "bio2" es privado y no puede ser accedido desde fuera de la clase

})();
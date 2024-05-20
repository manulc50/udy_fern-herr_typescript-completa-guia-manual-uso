
(() => {

    // Patrón Singleton: La primera vez se crea la instancia y las siguientes veces se devuelve siempre esa misma instancia(no se crean otras)

    class Apocalipsis {

        private static instance: Apocalipsis; // Propiedad privada y estática(pertenece a la clase y no a las instancias)

        // Constructor privado - Para que no se pueda crear instancias de esta clase desde fuera de esta clase
        private constructor(private name: string) {}

        // Método público y estático(pertenece a la clase y no a las instancias)
        // Los métodos estáticos sólo pueden usar propiedades estáticas y otros métodos estáticos de la clase
        public static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance)
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            
            return Apocalipsis.instance;
        }

        // Método público. Es equivalente a poner "public changeName(name: String): void { ... }"
        changeName(name: string): void {
            this.name = name;
        }
    }

    // Error: No se puede crear instancias de la clase "Apocalipsis" fuera de ella porque su constructor es privado
    /*const apocalipsis1: Apocalipsis = new Apocalipsis('Soy Apocalipsis1... el único');
    const apocalipsis2: Apocalipsis = new Apocalipsis('Soy Apocalipsis2... el único');
    const apocalipsis3: Apocalipsis = new Apocalipsis('Soy Apocalipsis3... el único');*/

    const apocalipsis1: Apocalipsis = Apocalipsis.callApocalipsis(); // Como es la primera vez, se crea la instancia
    const apocalipsis2: Apocalipsis = Apocalipsis.callApocalipsis(); // Como no es la primera vez, se devuelve la misma instancia anterior
    const apocalipsis3: Apocalipsis = Apocalipsis.callApocalipsis(); // Como no es la primera vez, se devuelve la misma instancia anterior

    apocalipsis1.changeName('Xavier'); // También se cambia el valor de "name" de "apocalipsis2" y "apocalipsis3" y porque tienen la referencia a la misma instancia

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
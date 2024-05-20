

(() => {

    // Definición de una clase en JavaScript(a partir del ES6)
    class Avenger {

        // Usando '#' delante del nombre de las propiedades, convertimos esas propiedades de públicas a privadas
        #name;
        #power;

        constructor(name = 'No name', power = 0) {
            this.#name = name;
            this.#power = power;
        }
    }

    // Herencia
    class FlyingAvenger extends Avenger {

        // Usando '#' delante del nombre de las propiedades, convertimos esas propiedades de públicas a privadas
        #flying;

        constructor(name, power) {
            super(name, power);
            this.#flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9000);
    const falcon = new FlyingAvenger('Falcon', 50);

    //console.log(hulk.#name); //Error: La propiedad "#name" es privada y no puede ser accedida directamente fuera de la clase

    console.log(hulk);
    console.log(falcon);

})();
import { Pokemon } from "./decorators/pokemon";


const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = 'Pikachu'; // Se produce un error de ejecución porque usamos el decorador "bloquearConstructor" sobre la clase "Pokemon" y no permite modificar el prototype de una clase

charmander.publicApi = 'http://marca.es'; // Intentará modificar la URL de la propiedad "publicApi" y lo conseguirá o no en función del Factory Decorator "readOnly" aplicado sobre esa propiedad
charmander.savePokemonToDB(5);

console.log(charmander);
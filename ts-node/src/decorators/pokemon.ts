

/* Un decorador no es más que una función(se puede usar tanto una función tradicional como una arrow function) que se ejecuta automáticamente en tiempo de traspilación o compilación y añade nuevas funcionalidades a clases, a métodos de clase o a propiedades de clases 
   Un decorador es una nueva característica, o nueva funcionalidad, del ES7
   Actualmente, el uso de decoradores en TypeScript es algo experimental y está desactivado por defecto. Para activar o habilitar su uso se debe poner la propiedad "experimentalDecorators" a true en el archivo de configuración de TypeScript "tsconfig.json" */

// Definimos el decorador "printToConsole" que recibe el constructor de una clase
function printToConsole(constructor: Function): void {
    console.log(constructor); // Imprime el constructor de una clase
}

// Un Factory Decorator es un decorador que puede recibir argumentos de entrada, que no sea el constructor de una clase, y siempre devuelve una función

// Definición de un Factory Decorator
const printToConsoleConditional = (print: boolean = false): Function => {
    if(print)
        return printToConsole;
    else
        return () => {};
};

// Definimos el decorador "printToConsole" que recibe el constructor de una clase
const bloquearConstructor = function(constructor: Function): void {
    Object.seal(constructor); // En este caso, el método "seal" de Object bloquea el constructor de una clase para que no sea posible modificar sus propiedades y añadir nuevas
    Object.seal(constructor.prototype); // Bloquea el "prototype" del constructor de una clase para que no pueda ser modificado
};

// Definición de un Factory Decorator para aplicar a un método de una clase
// En este caso, este Factory Decorator se aplicará al método "savePokemonToDB" de la clase "Pokemon" y validará que el id de un pokemon sea un id válido, es decir, que su valor esté entre 1 y 800
function CheckValidPokemonId(): Function {
    // Siempre que se aplique un Factory Decorator a un método de una clase, se recibe estos argumentos de entrada:
    // El argumento de entrada "target" contiene la referencia a la clase
    // El argumento de entrada "propertyKey" contiene el nombre del método de la clase
    // El argumento de entrada "descriptor" contiene, entre otras cosas,  la descripción o definición del método
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {

        // Guardamos en esta constante la descripción o definición del método original
        const originalMethod = descriptor.value;

        // El argumento de entrada "id" de tipo "number" se corresponde con el argumento de entrada del método original
        // Si el valor del id es menor a 1 o mayor a 800, modificamos la descripción o definición del método. En caso contrario, invocamos al método original
        descriptor.value = (id: number) => (id < 1 || id > 800)
            ? console.error('El id del poken debe estar entre 1 y 800')
            : originalMethod(id);
    };
}

// Definición de un Factory Decorator para aplicar a una propiedad de una clase
// En este caso, este Factory Decorator se aplicará a la propiedad "publicApi" de la clase "Pokemon" y establecerá si dicha propiedad se puede modificar o no
function readOnly(isReadOnly: boolean = true): Function {
    // Siempre que se aplique un Factory Decorator a una propiedad de una clase, se recibe los siguientes argumentos de entrada y devuelve un objeto de tipo "PropertyDescriptor":
    // El argumento de entrada "target" contiene la referencia a la clase
    // El argumento de entrada "propertyKey" contiene el nombre de la propiedad de la clase
    return  function(target: any, propertyKey: string): PropertyDescriptor {
        
        const descriptor: PropertyDescriptor = {
            // "this" es la referencia al objeto de la clase
            // "val" es el valor que se quiere establecer en la propiedad de la clase
            set(this, val) {
                // Cambiamos la definición de la propiedad de la clase para que la primera vez se establezca el valor de "val" y las siguientes veces se pueda modificar o no en función del valor booleano de "isReadOnly" 
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isReadOnly
                });
            }
        };

        return descriptor;
    };
}

// Los decoradores se ejecutan en orden secuencial
@bloquearConstructor // Aplica el decorador "bloquearConstructor" a esta clase
@printToConsoleConditional(false) // Aplica el Factory Decorator "printToConsoleConditional" a esta clase
//@printToConsole // Aplica el decorador "printToConsole" a esta clase
export class Pokemon {

    @readOnly(true) // Aplica el Factory Decorator "readonly" a esta propiedad
    public publicApi: string = 'https://pokeapi.co';

    constructor(public name :string) {}

    // Método público. Es equivalente a poner "public savePokemonToDB(id: number): void { ... }"
    @CheckValidPokemonId() // Aplica el Factory Decorator "CheckValidPokemonId" a este método
    savePokemonToDB(id: number): void {
        console.log(`Pokemon con id ${ id } guardado en la BD`);
    }

}
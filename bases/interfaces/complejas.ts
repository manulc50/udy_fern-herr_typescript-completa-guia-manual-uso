
(() => {

    // Al igual que ocurre en otros lenguajes de programación, en TypeScript no es posible crear instancias de interfaces

    // Definimos nuestra interfaz "Client"
    // Nota: Cuando tenemos estructuas complejas como ésta, donde tenemos varios niveles de objetos, no se recomienda crear la interfaz de esta forma
    /*interface Client {
        name: string;
        age?: number; // Esta propiedad es opcional('?')
        address?: { // Esta propiedad es opcional('?')
            id: number;
            zip: string;
            city: string;
        }
    }*/

    // En estructuras complejas, se recomienda y es una buena práctica definir varias interfaces y así no poner toda la estructura compleja en una única interfaz

    // Definimos nuestra interfaz "Client"
    interface Client {
        name: string;
        age?: number; // Esta propiedad es opcional('?')
        address?: Address; // Esta propiedad es opcional('?')
        getFullAddress(id: string): string; // Estructura de la función "getFullAddress". Recibe un argumento "id" de tipo "string" y devuelve otro "string"
    }

    // Definimos nuestra interfaz "Address"
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client1: Client = {
        name: 'Manuel',
        age: 36,
        address: {
            id: 125,
            zip: 'KY2 SUB',
            city: 'Ottawa'
        },
        getFullAddress(id: string): string {
            return this.address?.city || 'No address';
        }
    }

    const client2: Client = {
        name: 'Fernando',
        age: 21,
        getFullAddress(id: string): string {
            return this.address?.city || 'No address';
        }
    };

})();
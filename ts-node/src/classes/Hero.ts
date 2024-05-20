import powers from "../data/powers"; // Importamos la exportación por defecto "powers" del archivo "../data/powers"


// Nota: Por defecto, las exportaciones se agrupan en un objeto

export class Hero {

    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) { }

    get power(): string {
        return powers.find(power => power.id === this.powerId)?.desc || 'Not found';
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

export const PI = 3.1416;
export const miNombre = 'Manuel';
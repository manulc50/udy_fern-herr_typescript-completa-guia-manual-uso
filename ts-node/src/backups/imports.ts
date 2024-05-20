//import { Hero as SuperHero } from "./classes/Hero"; // Renombramos con un alías "Hero" para que no entre en conflcto con la constante "Hero" debido a que se llaman igual
import * as HeroClasses from "../classes/Hero"; // Importamos todo el contenido del objeto de exportaciones del archivo "./classes/Hero" y usamos el alías "HeroClasses" para referirnos a ese contenido
import powers, { Power } from "../data/powers"; // Importamos la exportación por defecto "powers" del archivo "./data/powers". También importamos la interfaz "Power" del objeto de exportaciones de ese mismo archivo 

const Hero = 123;

//const ironman = new SuperHero('Ironman', 1, 55);
const ironman = new HeroClasses.Hero('Ironman', 1, 55);

console.log(ironman);

console.log(powers)








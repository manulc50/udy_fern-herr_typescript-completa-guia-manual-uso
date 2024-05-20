import { Pokemon } from '../interfaces';
import axios from 'axios';


export const getPokemon = async (pokemonId: number ): Promise<Pokemon> => {

    // Realiza una petición http de tipo get a la API "pokeapi"
    // Como la respuesta http devuelta por "axios" es una respuesta genérica, usando "<Pokemon>" sobre el método "get", indicamos a TypeScript que la respuesta esperada es de tipo "Pokemon"
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);

    return data;
};
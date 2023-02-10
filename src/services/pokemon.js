// import pokemosResponse from '../mockup/responseDataPokeApi.json'
import pokemoResponse from '../mockup/reponseDataOnePokemon.json';
const POKEDEX_URL_API = 'https://pokeapi.co/api/v2/pokemon';

export const  pokemonsList = async () => {
  const response = await fetch(`${POKEDEX_URL_API}`)
  const json = await response.json()
  const pokemons = json.results
  return pokemons
}

export const pokemonOnly = async(name) => {
  const response = await fetch(`${POKEDEX_URL_API}/${name}`)
  const json = await response.json()
  const pokemons = json
  return pokemons
}
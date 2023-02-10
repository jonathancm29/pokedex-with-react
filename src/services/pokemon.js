import pokemosResponse from '../mockup/responseDataPokeApi.json'
import pokemoResponse from '../mockup/reponseDataOnePokemon.json'
export function pokemonsList () {
  return pokemosResponse.results
}

export function pokemonOnly ({name}) {
  return  pokemoResponse
}
import { useEffect, useState } from "react"
import {pokemonOnly} from '../services/pokemon'


function RenderPokemon ({pokemon}){
  return (
    <li className="pokemon">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other.home.front_default} />
    </li>
  )
}
function NoPokemon() {
  return (
    <p>No hay pokemon</p>
  )
}


export function Pokemon ({name}) {
  const [pokemon, setPokemon] = useState(null);
  const pokemonExist = pokemon !== null

  useEffect(() => {
    pokemonOnly(name)
    .then(data => {
      setPokemon(data)
    })
  },[])

  return (
    pokemonExist 
    ? <RenderPokemon pokemon={pokemon}/>
    : <NoPokemon />
  )
}
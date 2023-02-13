import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { pokemonOnly } from '../services/pokemon'

function RenderPokemon ({ pokemon, handleClick }) {
  return (
    <li className='pokemon' onClick={() => handleClick(pokemon)}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other.home.front_default} />
    </li>
  )
}
function NoPokemon () {
  return (
    <p>No informacion del pokemon</p>
  )
}

export function Pokemon ({ name }) {
  const [pokemon, setPokemon] = useState(null)
  const pokemonExist = pokemon !== null

  useEffect(() => {
    pokemonOnly(name)
      .then(data => {
        setPokemon(data)
      })
  }, [])

  const { setPokemonMain } = useContext(PokemonContext)
  const clickInPokemon = (pokemon) => {
    setPokemonMain(pokemon)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    pokemonExist
      ? <RenderPokemon pokemon={pokemon} handleClick={clickInPokemon} />
      : <NoPokemon />
  )
}

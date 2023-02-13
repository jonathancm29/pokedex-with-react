import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

function usePokemonMain () {
  const { pokemonMain } = useContext(PokemonContext)
  const hasPokemon = pokemonMain !== null

  return { pokemon: pokemonMain, hasPokemon }
}

export function PokemonMain () {
  const { pokemon, hasPokemon } = usePokemonMain()
  return (
    hasPokemon &&
      <div className='container-pokemon'>
        <div className='pokeCard'>
          <h2> {pokemon.name} </h2>
          <img src={pokemon.sprites.other.home.front_default} />
        </div>
        <div className='pokeCard'>
          <div className='listiing'>
            <div className='moves'>
              <h2>Moves</h2>
              <ul>
                {pokemon.moves.slice(0, 5).map((move, i) => (
                  <li key={i}>
                    <h4> {move.move.name} </h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className='abilities'>
              <h2>Abilities</h2>
              <ul>
                {pokemon.abilities.map((ability, i) => (
                  <li key={i}>
                    <h4> {ability.ability.name} </h4>
                  </li>

                ))}
              </ul>
            </div>
          </div>
          <h2>Heigth:</h2> <p>{pokemon.height}kg</p>
          <div className='sprites'>
            <img src={pokemon.sprites.front_default} />
            <img src={pokemon.sprites.back_default} />
          </div>

        </div>
      </div>
  )
}

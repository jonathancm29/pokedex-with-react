import { useEffect, useState } from 'react';
import { pokemonsList } from '../services/pokemon';
import { Pokemon } from './Pokemon';



export function Pokemons () {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(pokemonsList())
  }, [])

  return (
    <>
      <h1>Pokemons</h1>
      <ul className='pokemons'>
        {
        pokemons.map((pokemon, index) => (
            <Pokemon name={pokemon.name} key={index}/>
        ))
        }
      </ul>
    </>
  )
}
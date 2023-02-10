import { useEffect, useState } from 'react';
import { pokemonsList } from '../services/pokemon';
import { Pokemon } from './Pokemon';



export function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  const hasPokemons = pokemons.length > 0;

  useEffect(() => {
    pokemonsList()
    .then(data => {
      setPokemons(data)
    })
  }, [])

  return (
    <div  className='container'>
      <h1>Pokemons</h1>
      <ul className='pokemons'>
        { hasPokemons && 
        pokemons.map((pokemon, index) => (
            <Pokemon name={pokemon.name} key={index}/>
        ))
        }
      </ul>
    </div >
  )
}
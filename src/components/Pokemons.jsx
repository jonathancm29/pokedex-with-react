import { useEffect, useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import { pokemonsList } from '../services/pokemon';
import { Pagination } from './Pagination';
import { Pokemon } from './Pokemon';



export function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  const { limit, offset, handleClick } = usePagination();
  const hasPokemons = pokemons.length > 0;

  const fetchPokemons = async (limit, offset) => {
    const data  = await pokemonsList(limit, offset);
    setPokemons(data)
    
  }
  const pokemosClear = () => {
    setPokemons([])
  }

  useEffect(() => {
    console.log("🚀 ~ file: Pokemons.jsx:22 ~ useEffect ~ fetchPokemons", offset)
    fetchPokemons(limit,offset)
  }, [offset])

  return (
    <div  className='container'>
      <ul className='pokemons'>
        { hasPokemons && 
        pokemons.map((pokemon, index) => (
            <Pokemon name={pokemon.name} key={index}/>
        ))
        }
      </ul>
      <Pagination 
        limit={limit}
        offset={offset}
        handleClick={handleClick}
        cleanData={pokemosClear}
        />
    </div >
  )
}
import { usePokemons } from '../hooks/usePokemons';
import { Pagination } from './Pagination';
import { Pokemon } from './Pokemon';



export function Pokemons () {
  
  const { pokemons, loading, limit, offset, handleClick, hasPokemons, pokemonsClear } = usePokemons();

  return (
    <div  className='container'>
      {
        loading 
        ? <p> Cargando...</p>
        :
        <ul className='pokemons'>
          { hasPokemons && 
          pokemons.map((pokemon, index) => (
              <Pokemon name={pokemon.name} key={index}/>
          ))
          }
        </ul>
      }
      <Pagination 
        limit={limit}
        offset={offset}
        handleClick={handleClick}
        cleanData={pokemonsClear}
        />
    </div >
  )
}
import { usePokemons } from '../hooks/usePokemons';
import { Pagination } from './Pagination';
import { Pokemon } from './Pokemon';



// Componente que renderiza una lista de Pokemon's
export function Pokemons () {
  
  // Desestructuración de los valores devueltos por el hook usePokemons
  const { 
    pokemons, // Un arreglo de objetos, cada objeto representa un Pokemon
    loading, // Un booleano que indica si los Pokemons están siendo cargados o no
    limit, // Un número que representa el límite de Pokemons a mostrar por página
    offset, // Un número que representa la cantidad de Pokemons a saltarse en la lista
    handleClick, // Una función que maneja el evento de click en la paginación
    hasPokemons, // Un booleano que indica si hay Pokemons disponibles para mostrar
    pokemonsClear // Una función que limpia los Pokemons mostrados en pantalla
  } = usePokemons()
  return (
    <div  className='container'>
      {
        loading 
        ? <p> Cargando...</p>
        :
        // Si hay Pokemons disponibles, se renderiza una lista
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
import { useEffect, useState } from "react";
import { usePagination } from "./usePagination";
import { pokemonsList } from '../services/pokemon';

export function usePokemons () {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const { limit, offset, handleClick } = usePagination();
  const hasPokemons = pokemons.length > 0;

  const fetchPokemons = async (limit, offset) => {
    setLoading(true)
    try {
      const data  = await pokemonsList(limit, offset);
      setPokemons(data)
    } catch (error) {
      setError('Error obteniendo los datos')
    } finally {
      setLoading(false)
    }
    
  }
  const pokemonsClear = () => {
    setPokemons([])
  }

  useEffect(() => {
    fetchPokemons(limit,offset)
  }, [offset])

  return { pokemons, setPokemons,loading, setLoading, limit, offset, handleClick, pokemonsClear, hasPokemons }
}
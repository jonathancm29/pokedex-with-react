import { createContext, useState } from 'react'

export const PokemonContext = createContext(null)

export function PokemonProvider ({ children }) {
  const [pokemonMain, setPokemonMain] = useState(null)

  return (
    <PokemonContext.Provider value={{ pokemonMain, setPokemonMain }}>
      {children}
    </PokemonContext.Provider>
  )
}

import './App.css'
import { PokemonMain } from './components/PokemonMain'
import { Pokemons } from './components/Pokemons'
import { PokemonProvider } from './context/PokemonContext'

function App() {

  return (
    <div className='page'>
      <PokemonProvider>
        <header>
          <h1>PokeApp</h1>
          <PokemonMain />
        </header>
        <main>
          <Pokemons />
        </main>
      </PokemonProvider>
    </div>
  )
}

export default App

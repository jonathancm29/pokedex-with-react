import './App.css'
import { Pokemons } from './components/Pokemons'

function App() {

  return (
    <div className='page'>
      <header>
        <h1>PokeApp</h1>
      </header>
      <main>
        <Pokemons />
      </main>
    </div>
  )
}

export default App

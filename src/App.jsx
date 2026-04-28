import './App.css'
import { Movies } from './components/Movies'

function App() {

  return (
    <>
      <h1>Best Movie Finder</h1>
      <header>
        <form action="">
          <input name="userQuery" type="text" placeholder='Avengers, Matrix, Titanic, Avatar...'/>
          <button type='sumbit'>Search</button>
        </form>
      </header>
      <main>
        <Movies></Movies>
      </main>
    </>
  )
}

export default App

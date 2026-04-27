import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Best Movie Finder</h1>
      <header>
        <form action="">
          <input name="userQuery" type="text" />
          <button type='sumbit'>Search</button>
        </form>
      </header>
      <main>
        <h2>Movies</h2>
      </main>
    </>
  )
}

export default App

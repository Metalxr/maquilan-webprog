import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App!</h1>
          <p>
            Name: Joshua Maquilan<br />
            Email: joshuamaquilan31@gmail.com<br />
            Other info: <a href="https://github.com/Metalxr/maquilan-webprog">My GitHub Repository</a>
          </p>
        </header>
      </div>
    </>
  )
}

export default App

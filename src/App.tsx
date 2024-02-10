// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import footballLogo from './assets/football-tall-white.svg'
import chiefsLogo from './assets/logo-chiefs.svg'
import sanFranLogo from './assets/logo-49ers.svg'
import './App.scss'
// import Scoreboard from './components/Scoreboard'



const App = () => {



  // const [count, setCount] = useState(0)


  return (
    <>
    <h1>Superb Owl</h1>
    <h2>Superbowl LXVIII</h2>
      <div>
  
        <a href="https://vitejs.dev" target="_blank">
          <img src={chiefsLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={footballLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={sanFranLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

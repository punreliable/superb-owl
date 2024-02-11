// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Scoreboard from './components/Scoreboard'
import HomeContent from './components/HomeContent'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {



  // const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <main>
        <Scoreboard />
      </main>
      <Footer />
    </>
  )
}

export default App

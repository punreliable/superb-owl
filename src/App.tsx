import Scoreboard from './components/Scoreboard'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.scss'

const App = () => {

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

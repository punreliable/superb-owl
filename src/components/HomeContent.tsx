// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import footballLogo from '../assets/football-tall-white.svg'
import chiefsLogo from '../assets/logo-chiefs.svg'
import sanFranLogo from '../assets/logo-49ers.svg'
import '../App.scss'

const HomeContent = () => {

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
		<p>Punreliably powered by Vercel and Vite.</p>
      </div>
	  <p className="read-the-docs">
		<a href="https://www.buymeacoffee.com/punreliable" target="_blank">
        	Click here to buy me a coffee.
		</a>
      </p>
    </>
  )
}

export default HomeContent

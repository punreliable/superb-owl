import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
// import { RouterProvider, createRouter } from '@tanstack/react-router'
// import { routeTree } from './routeTree.gen'

// const router = createRouter({
//   routeTree,
// })

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

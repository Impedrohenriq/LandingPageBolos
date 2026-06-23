import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Apague a linha import './index.css' se ela existir aí!
// E coloque a nossa nova rota do CSS:
import './styles/globals.css' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
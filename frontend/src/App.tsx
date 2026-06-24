import { useEffect, useState } from 'react'
import { Home } from './pages/home/Home'
import { getBolos, type Bolo } from './sanity'

export default function App() {
  const [bolos, setBolos] = useState<Bolo[]>([])

  useEffect(() => {
    getBolos().then(setBolos)
  }, [])

  return (
    <>
      {/* --- BANNER DE DEBUG (Você apagará isso mais tarde) --- */}
      <div style={{ background: '#111', color: '#0f0', padding: '8px', fontFamily: 'monospace', zIndex: 9999, position: 'relative' }}>
        <details>
          <summary style={{ cursor: 'pointer' }}>
            🟢 Sanity DB: {bolos.length} bolo(s) encontrado(s) [Clique para ver o JSON]
          </summary>
          <pre style={{ maxHeight: '250px', overflow: 'auto', marginTop: '8px' }}>
            {JSON.stringify(bolos, null, 2)}
          </pre>
        </details>
      </div>

      <Home />
    </>
  )
}
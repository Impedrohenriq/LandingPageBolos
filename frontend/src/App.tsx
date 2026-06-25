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
      <Home />
    </>
  )
}
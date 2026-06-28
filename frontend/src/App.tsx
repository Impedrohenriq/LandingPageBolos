import { Home } from './pages/home/Home'

export default function App() {
  return (
    <>
      {/* O Navbar e o Footer geralmente ficam fora do <main> 
         porque não são o conteúdo principal da página.
      */}
      {/* <Navbar /> */}
      
      <main>
        <Home />
      </main>
      
      {/* <Footer /> */}
    </>
  )
}
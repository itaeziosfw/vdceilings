import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <WhatsAppFloat />
    </div>
  )
}

export default App
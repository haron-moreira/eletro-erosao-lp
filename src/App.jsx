import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Machines from './sections/Machines'
import Brands from './sections/Brands'
import Differentials from './sections/Differentials'
import Gallery from './sections/Gallery'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Machines />
        <Brands />
        <Differentials />
        <Gallery />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton size="float" aria-label="Falar no WhatsApp" />
    </>
  )
}

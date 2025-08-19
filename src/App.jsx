import Header from './components/layouts/header'
import Hero from './pages/hero'
import Features from './pages/features'
import Testimonial from './pages/testimonial'
import Footer from './components/layouts/footer'
import './index.css'

function App() {

  // Fungsi scroll ke section dan update URL
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
  
import Header from './components/common/header'
import Hero from './pages/hero'
import Features from './pages/features'
import Testimonial from './pages/testimonial'
import Footer from './components/common/footer'
import './index.css'

function App() {

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
  
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Services } from '../../components/Services/Services';
import { Gallery } from '../../components/Gallery/Gallery';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-creme selection:bg-caramelo selection:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

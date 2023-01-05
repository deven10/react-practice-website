import './App.css';
import { AppSection } from './Components/AppSection';
import { Footer } from './Components/Footer';
import { HeroSection } from './Components/HeroSection';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AppSection/>
      <Footer/>
    </div>
  );
}

export default App;

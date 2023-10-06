import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Panel from './Panel';
import HeroSection from './HeroSection';
import ShopSection from './ShopSection';
import Footer from './Footer';


function App() {
  return (
   <>
    {/*<i class="fa-solid fa-trash"></i>*/}
    <header>
    <Navbar/>
    <Panel/>
    </header>

   <HeroSection/>
   <ShopSection/>

   <footer>
    <Footer/>
   </footer>

    
   </>
        
      
  );
}

export default App;

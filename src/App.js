import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Hero/>
    <ItemListContainer/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<><Hero /> <ItemListContainer /> <Contact /></>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

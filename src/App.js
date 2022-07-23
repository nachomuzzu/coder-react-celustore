import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { useState } from 'react';

function App() {
  const [amountItems, setAmountItems] = useState(0);
  return (
    <>
      <div className='app'>
        <div className='pageContainer'>
          <div className='contentWrapper'>
            <BrowserRouter>
              <NavBar amountItems={amountItems} />
              <Routes>
                <Route path='/' element={<><Hero /> <ItemListContainer /> <Contact /></>} />
                <Route path='/item/:id' element={<ItemDetailContainer setAmountItems={setAmountItems} />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

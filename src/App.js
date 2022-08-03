import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { useState } from 'react';
import Cart from './components/Cart/Cart'
import CartContext from './components/Cart/CartContext';

function App() {
  const [amountItems, setAmountItems] = useState(0);
  return (
    <>
      <div className='app'>
        <div className='pageContainer'>
          <div className='contentWrapper'>
            <CartContext>
              <BrowserRouter>
                <NavBar amountItems={amountItems} />
                <Routes>
                  <Route path='/' element={<><Hero /> <ItemListContainer /> <Contact /></>} />
                  <Route path='/item/:id' element={<ItemDetailContainer setAmountItems={setAmountItems} />} />
                  <Route path='/category/:name' element={<ItemListContainer />} />
                  <Route path='/cart' element={<Cart />} />

                </Routes>
              </BrowserRouter>
            </CartContext>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

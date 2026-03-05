import React from 'react'
import NavBar from '../src/componentes/NavBar/NavBar'
import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer'
import ItemCount from '../src/componentes/ItemCount/ItemCount'
import ItemDetailContainer from '../src/componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CartContext'
import Cart from './componentes/cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './componentes/Loader/Loader'
import { ToastContainer } from 'react-toastify'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Checkout" element= {<Checkout/>}/>
      </Routes>
      </CarritoProvider>
      <ToastContainer/>
      </BrowserRouter>

    </>
  )
}

export default App
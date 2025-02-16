import './App.css'

import { Routes,Route } from "react-router";
import Client from './components/Client/Client';
import ClientList from './pages/Client/ClientList';
import Acceuil from './pages/Acceuil/Acceuil';
import AddProduct from './components/AddProduct/AddProduct';
import AddOrder from './components/AddOrder/AddOrder';
import Authentication from './pages/Authentication/Authentication';
import Login from './components/Login/Login';
import Product from './pages/Product/Product';
import Order from './pages/Order/Order';


function App() {
 
  return (
    <Routes>
      <Route index element={<Acceuil/>}/>
      <Route path='/add-client' element={<Client/>}/>
      <Route path='/produit' element={<Product/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/add-order' element={<AddOrder/>}/>
      <Route path='/client' element={<ClientList/>}/>
      <Route path='/signup' element={<Authentication/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/commande' element={<Order/>}/>
    </Routes>
  )
}

export default App

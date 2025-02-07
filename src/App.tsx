import './App.css'

//import ClientForm from './pages/ClientForm/ClientForm';

import { Routes,Route } from "react-router";
import Client from './components/Client/Client';
import ClientList from './pages/Client/ClientList';
import Acceuil from './pages/Acceuil/Acceuil';
import AddProduct from './components/AddProduct/AddProduct';
// import Authentication from './pages/Authentication/Authentication';
// import Login from './components/Login/Login';


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/add-client' element={<Client/>}/>
      <Route path='add-order' element={<AddProduct/>}/>
      <Route path='/client' element={<ClientList/>}/>
      {/* <Route path='/signup' element={<Authentication/>}/>
      <Route path='/login' element={<Login/>}/> */}
    </Routes>
  )
}

export default App

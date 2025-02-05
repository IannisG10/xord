import './App.css'
//import Acceuil from './pages/Acceuil/Acceuil';
//import ClientForm from './pages/ClientForm/ClientForm';
//import ClientDashBoard from './pages/ClientDashBoard/ClientDashBoard';
import { Routes,Route } from "react-router";
import Client from './components/Client/Client';
import ClientList from './pages/Client/ClientList';
import Acceuil from './pages/Acceuil/Acceuil';
import AddProduct from './components/AddProduct/AddProduct';


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/add-client' element={<Client/>}/>
      <Route path='add-order' element={<AddProduct/>}/>
      <Route path='/client' element={<ClientList/>}/>
    </Routes>
  )
}

export default App

import './App.css'
//import Acceuil from './pages/Acceuil/Acceuil';
//import ClientForm from './pages/ClientForm/ClientForm';
//import ClientDashBoard from './pages/ClientDashBoard/ClientDashBoard';
import { Routes,Route } from "react-router";
import Acceuil from './pages/Acceuil/Acceuil';
import Client from './components/Client/Client';
function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/add-client' element={<Client/>}/>
    </Routes>
  )
}

export default App

import './App.css'
import Acceuil from './pages/Acceuil/Acceuil';
import ClientForm from './pages/ClientForm/ClientForm';
import { Routes,Route } from "react-router";

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/newClient' element={<ClientForm/>}/>
      </Routes>
      
    </>
  )
}

export default App

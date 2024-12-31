import './App.css'

import Acceuil from './pages/Acceuil/Acceuil';
import { Routes,Route } from "react-router";

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
      </Routes>
      
    </>
  )
}

export default App

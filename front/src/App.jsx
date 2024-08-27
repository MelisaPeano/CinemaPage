import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarViews from './components/Navbar/NavbarViews';
import BodyViews from './components/Body/BodyViews';
import {  Route, Routes } from 'react-router-dom';
import FormularioViews from './components/Formulario/FormularioViews';






function App() {
 

  return (
    <div  className="position-relative py-3 mx-auto bg-cover" style={{ backgroundImage: 'url(../src/assets/fondo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
     <NavBarViews/>
    <Routes>
     <Route path="/" element={<BodyViews />} />
     <Route path="/peliculas" element={<FormularioViews />} />
    </Routes>
    </div>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarViews from './components/Navbar/NavbarViews';
import BodyViews from './components/Body/BodyViews';
import {  Route, Routes } from 'react-router-dom';
import FormularioViews from './components/Formulario/FormularioViews';
import DeleteViews from './components/DeleteMovie/DeleteViews';
import PutFormViews from './components/PutMovies/PutFormViews';
import SobreMi from './components/sobremi/SobreMi';






function App() {
 

  return (
    <div style={{ backgroundImage: 'url(../src/assets/fondo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <NavBarViews/>
    <Routes>
     <Route path="/" element={<BodyViews />} />
     <Route path="/peliculas" element={<FormularioViews />} />
     <Route path="/delete" element={<DeleteViews />} />
     <Route path="/update" element={<PutFormViews />} />
     <Route path="/sobremi" element={<SobreMi />} />
    </Routes>
    </div>
  )
}

export default App

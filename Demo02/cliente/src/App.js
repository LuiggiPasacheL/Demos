import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import IngresoNotas from './pages/IngresoNotas';
import ReporteNotas from './pages/ReporteNotas';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/ingreso-notas' element={<IngresoNotas/>} />
      <Route path='/reporte-notas' element={<ReporteNotas/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Lisategelane from './pages/LisaTegelane';
import LisaTegelaneTeine from './pages/LisaTegelaneTeine';
import ValitudTegelased from './pages/ValitudTegelased';

function App() {

  return (
    <div>
      <Link to = "/">
        <button>Avalehele</button>
      </Link>
      <Link to = "/lisa-tegelane">
        <button>Lisa tegelane</button>
      </Link>
      <Link to = "/lisa-tegelaneTeine">
        <button>Lisa tegelane 2</button>
      </Link>
      <Link to = "/valitud-tegelased">
        <button>Valitud tegelased</button>
      </Link>

      <Routes>
        <Route path='/' element ={<Avaleht/>} />
        <Route path='lisa-tegelane' element ={<Lisategelane/>} />
        <Route path='lisa-tegelaneteine' element ={<LisaTegelaneTeine/>} />
        <Route path='valitud-tegelased' element ={<ValitudTegelased/>} />
      </Routes>
    </div>
  )
}

export default App

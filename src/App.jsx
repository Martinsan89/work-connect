import './App.css'
import NavSideBar from './Components/NavSideBar/NavSideBar'
import { NavLink, Routes, Route} from 'react-router-dom'
import Work from './Pages/Work'
import Education from './Pages/Education'
import Curriculum from './Pages/Curriculum'
import Language from './Pages/Languages'
import Profile from './Components/NavSideBar/Profile/Profile'
import Sidebar from './Components/NavSideBar/Sidebar/Sidebar'
import Register from './Components/NavSideBar/Register/Register'
import { useState } from 'react'


function App() {
  const [profile, setProfile] = useState(true)

  return (
    <div>
      <div>

        {/* ⬇️ setea profile como true para mostral el perfil de vuelta ⬇️ */}
        <NavLink 
          onClick={ () => {setProfile(true)} }
          to='/'>
            Home
        </NavLink>

        {/* ⬇️ setea profile como false para ocultar el perfil ⬇️ */}
        <NavLink 
          onClick={ () => { setProfile(false) } }
          to='/register'>
            Register
        </NavLink>

        {/* ⬇️ Renderiza Profile sólo cuando es true ⬇️ (evita que se superponga con otras rutas) */}
        {/* {
          profile ? <Profile/> : ''
        } */}

      </div>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<NavSideBar/>}>
          <Route path='work' element={<Work />}/>
          <Route path='education' element={<Education />}/>
          <Route path='curriculum' element={<Curriculum />}/>
          <Route path='language' element={<Language />}/>
        </Route>
        <Route path="profile" element={<NavSideBar/>}>
          <Route path='work' element={<Work />}/>
          <Route path='education' element={<Education />}/>
          <Route path='curriculum' element={<Curriculum />}/>
          <Route path='language' element={<Language />}/>
          <Route path='sidebar' element={<Sidebar />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

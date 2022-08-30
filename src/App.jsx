import './App.css'
import NavSideBar from './Components/NavSideBar/NavSideBar'
import { NavLink, Routes, Route, BrowserRouter} from 'react-router-dom'
// <<<<<<< HEAD
// import Work from './Pages/Work'
// import Education from './Pages/Education'
// import Curriculum from './Pages/Curriculum'
// import Language from './Pages/Languages'
import Profile from './Components/NavSideBar/Profile/Profile'
import Sidebar from './Components/NavSideBar/Sidebar/Sidebar'
import Register from './Components/NavSideBar/Register/Register'
import { useState } from 'react'
// =======
import Work from './Pages/NavMenu/Work/Work'
import Education from './Pages/NavMenu/Education/Education'
import Curriculum from './Pages/NavMenu/CV/Curriculum'
import Language from './Pages/NavMenu/Language/Languages'
import Login from './Pages/Login/Login'
import CreateNewAccount from './Components/NavSideBar/CreateNewAccount/CreateNewAccount'
// >>>>>>> a5fc9d74b2ed3fd30e03936c5dc086a0d61625e2

function App() {
  const [profile, setProfile] = useState(false)

  return (
    <div>
        <div>

          {/* ⬇️ setea profile como true para mostrar el perfil ⬇️ */}
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
          {
            profile ? <Profile/> : ''
          }

          {/* <NavLink to='/'>Home</NavLink>  */}
          {/* <NavLink to='profile'>Profile</NavLink> */}
          <NavLink onClick={ () => { setProfile(false) } } to='login'>Login</NavLink>
          <NavLink onClick={ () => { setProfile(false) } } to='createnewaccount'>NewAccount</NavLink>
        </div>

        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/createnewaccount" element={<CreateNewAccount />}/>
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
          <Route path='login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App

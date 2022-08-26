import './App.css'
import NavSideBar from './Components/NavSideBar/NavSideBar'
import { NavLink, Routes, Route} from 'react-router-dom'
import Work from './Pages/NavMenu/Work/Work'
import Education from './Pages/NavMenu/Education/Education'
import Curriculum from './Pages/NavMenu/CV/Curriculum'
import Language from './Pages/NavMenu/Language/Languages'
import Login from './Pages/Login/Login'


function App() {
  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='profile'>Profile</NavLink>
        <NavLink to='login'>Login</NavLink>
      </div>
      <Routes>
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
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

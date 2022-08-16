import './App.css'
import NavSideBar from './Components/NavSideBar/NavSideBar'
import { NavLink, Routes, Route} from 'react-router-dom'
import Work from './Pages/Work'
import Education from './Pages/Education'
import Curriculum from './Pages/Curriculum'
import Language from './Pages/Languages'


function App() {
  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='profile'>Profile</NavLink>
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
      </Routes>
    </div>
  )
}

export default App

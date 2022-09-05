import './App.css'
import NavSideBar from './Components/NavSideBar/NavSideBar'
import { NavLink, Routes, Route} from 'react-router-dom'
import Work from './Pages/Work'
import Education from './Pages/Education'
import Curriculum from './Pages/Curriculum'
import Language from './Pages/Languages'
import Sidebar from './Components/Sidebar/Sidebar'
import Notifications from './Components/Notifications/Notifications'
import Chat from './Components/Chat/Chat'


function App() {
  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='profile'>Profile</NavLink>
        <NavLink to='sidebar'>Sidebar</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<NavSideBar/>}>
          <Route path='work' element={<Work />}/>
          <Route path='education' element={<Education />}/>
          <Route path='curriculum' element={<Curriculum />}/>
          <Route path='language' element={<Language />}/>
          <Route path='notifications' element={<Notifications />}/>
          <Route path='inbox' element={<Chat />}/>
        </Route>
        <Route path="sidebar" element={<Sidebar />}>
          <Route path='notifications' element={<Notifications />}/>
          <Route path='inbox' element={<Chat />}/>
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

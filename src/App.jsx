import React from 'react'
import './App.css'
<<<<<<< HEAD
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
import CreatedSuccessfully from './Components/NavSideBar/CreatedSuccessfully/CreatedSuccessfully'
import VerifyAccount from './Components/NavSideBar/VerifyAccount/VerifyAccount'
import AccountVerified from './Components/NavSideBar/AccountVerified/AccountVerified'
import RestorePassword from './Components/NavSideBar/RestorePassword/RestorePassword'
import RestoreSent from './Components/NavSideBar/RestoreSent/RestoreSent'
import NewPassword from './Components/NavSideBar/NewPassword/NewPassword'
import NewPasswordDone from './Components/NavSideBar/NewPasswordDone/NewPasswordDone'
// >>>>>>> a5fc9d74b2ed3fd30e03936c5dc086a0d61625e2

function App() {
  const [profile, setProfile] = useState(false)

  return (
    <div>
        <div>

          {/* ⬇️ setea profile como true para mostrar el perfil ⬇️ */}
          <NavLink 
            className='mx-3'
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
          <NavLink className='ms-3' onClick={ () => { setProfile(false) } } to='/login'>Login</NavLink>
          <NavLink className='mx-3' onClick={ () => { setProfile(false) } } to='/createnewaccount'>NewAccount</NavLink>
          <NavLink onClick={ () => { setProfile(false) } } to='usercreated'>UserCreated</NavLink>
          <NavLink className='mx-3' onClick={ () => { setProfile(false) } } to='/verifyaccount'>VerifyAccount</NavLink>
          <NavLink onClick={ () => { setProfile(false) } } to='/verified'>Verified</NavLink>
          <NavLink className='mx-3' onClick={ () => { setProfile(false) } } to='/restorepassword'>Restore Pass</NavLink>
          <NavLink onClick={ () => { setProfile(false) } } to='/passrestored'>Restored</NavLink>
          <NavLink className='mx-3' onClick={ () => { setProfile(false) } } to='/newpassword'>NewPassword</NavLink>
          <NavLink onClick={ () => { setProfile(false) } } to='/passwasreset'>Password was Reset</NavLink>
        </div>

        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/createnewaccount" element={<CreateNewAccount />}/>
          <Route path="/usercreated" element={<CreatedSuccessfully />}/>
          <Route path="/verifyaccount" element={<VerifyAccount />}/>
          <Route path="/verified" element={<AccountVerified />}/>
          <Route path="/restorepassword" element={<RestorePassword />}/>
          <Route path="/passrestored" element={<RestoreSent />}/>
          <Route path="/newpassword" element={<NewPassword />}/>
          <Route path="/passwasreset" element={<NewPasswordDone />}/>
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
=======
import Home from './Pages/Home/Home'
import Login from './components/Login/Login'
import Register from './Pages/Register/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Advertisements from './Pages/Advertisements/AdvertisementsView'
import ProfileView from './Pages/Profile/ProfileView'
import Work from './components/NavProfileMenu/Work/Work'
import Education from './components/NavProfileMenu/Education/Education'
import Curriculum from './components/NavProfileMenu/CV/Curriculum'
import Language from './components/NavProfileMenu/Language/Languages'
import Sidebar from './Components/Sidebar/Sidebar'
import Notifications from './Components/Notifications/Notifications'
import Chat from './Components/Chat/Chat'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='register' element={<Register />} />
      <Route path='home' element={<Home />}>
        <Route path='advertisements' element={<Advertisements/>}/>
        <Route path='notifications' element={<Notifications />}/>
        <Route path='inbox' element={<Chat />}/>
        <Route path='profile' element={<ProfileView/>}>
          <Route path='work' element={<Work />}/>
          <Route path='education' element={<Education />}/>
          <Route path='curriculum' element={<Curriculum />}/>
          <Route path='language' element={<Language />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
>>>>>>> 9da6dc84b9e31b7a6c064d2ee33c57f599bd9bac
  )
}

export default App

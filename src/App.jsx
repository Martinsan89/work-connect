import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './Pages/Register/Register'
import ProfileView from './Pages/Profile/ProfileView'
import AdvertisementsView from './Pages/Advertisements/AdvertisementsView'
import Work from './components/NavProfileMenu/Work/Work'
import Education from './components/NavProfileMenu/Education/Education'
import Curriculum from './components/NavProfileMenu/CV/Curriculum'
import Language from './components/NavProfileMenu/Language/Languages'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login />}/>
          <Route path='/register' element={<Register/>} />
					<Route path='/home/*' element={<Home/>}>
            <Route path='advertisements' element={<AdvertisementsView />} />
            <Route path='profile' element={<ProfileView />} >
                <Route path='work' element={<Work />}/>
                <Route path='education' element={<Education />}/>
                <Route path='curriculum' element={<Curriculum />}/>
                <Route path='language' element={<Language />}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

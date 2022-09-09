import Home from './Pages/Home/Home'
import Login from './components/Login/Login'
import Register from './Pages/Register/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdvertisementsView from './Pages/Advertisements/AdvertisementsView'
import ProfileView from './Pages/Profile/ProfileView'
import Work from './components/NavProfileMenu/Work/Work'
import Education from './components/NavProfileMenu/Education/Education'
import Curriculum from './components/NavProfileMenu/CV/Curriculum'
import Language from './components/NavProfileMenu/Language/Languages'
import OfferView from './Pages/Advertisements/Offer/OfferView'
import ResultsView from './Pages/Advertisements/Results/ResultsView'
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
        <Route path='advertisements' element={<AdvertisementsView/>}>
          <Route path='results' element={<ResultsView/>}/>
        </Route>  
        {/* <Route path='advertisements' element={<Advertisements/>}/> */}
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
  )
}

export default App

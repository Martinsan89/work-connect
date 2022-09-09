import React from 'react'
import { useState } from 'react'
import './App.css'

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
import CreateNewAccount from './Components/CreateNewAccount/CreateNewAccount'
import CreatedSuccessfully from './Components/CreatedSuccessfully/CreatedSuccessfully'
import VerifyAccount from './Components/VerifyAccount/VerifyAccount'
import AccountVerified from './Components/AccountVerified/AccountVerified'
import RestorePassword from './Components/RestorePassword/RestorePassword'
import RestoreSent from './Components/RestoreSent/RestoreSent'

const App = () => {
    const [companyButton, setCompanyButton] = useState(true)
    const [freelaButton, setFreelaButton] =useState(false)
    const [personButon, setPersonButton] = useState(false)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='register' element={<Register
        companyButton = { companyButton } 
        setCompanyButton = { setCompanyButton }
        freelaButton = { freelaButton }
        setFreelaButton = { setFreelaButton }
        personButon = { personButon }
        setPersonButton = { setPersonButton }
      />} />
      <Route path='createnewaccount' element={<CreateNewAccount 
        companyButton = { companyButton } 
        freelaButton = { freelaButton }
        personButon = { personButon }
      />} />
      <Route path='usercreated' element={ <CreatedSuccessfully/>}/>
      <Route path='verifyaccount' element={ <VerifyAccount />}/>
      <Route path='accountverified' element={ <AccountVerified />}/>
      <Route path='restorepassword' element={ <RestorePassword />}/>
      <Route path='restoresent' element={ <RestoreSent />}/>
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
=======
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore} from '@reduxjs/toolkit'
import { Provider} from 'react-redux'
>>>>>>> a5fc9d74b2ed3fd30e03936c5dc086a0d61625e2

import worksReducer from './features/WorkFeatures'
import educationsReducer from './features/EducationFeature'
import languagesReducer from './features/LanguageFeature'
import cvsReducer from './features/CVFeature'

const store = configureStore({
  reducer: {
    works: worksReducer,
    educations: educationsReducer,
    languages: languagesReducer,
    cvs: cvsReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={ <App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

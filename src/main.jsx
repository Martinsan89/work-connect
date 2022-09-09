import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { configureStore} from '@reduxjs/toolkit'
// import { Provider} from 'react-redux'
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore} from '@reduxjs/toolkit'
import { Provider} from 'react-redux'

// // import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { configureStore} from '@reduxjs/toolkit'
// import { Provider} from 'react-redux'


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
      <App />
    </Provider>
  </React.StrictMode>
)

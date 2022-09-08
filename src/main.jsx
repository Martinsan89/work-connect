import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// <<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// =======
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore} from '@reduxjs/toolkit'
import { Provider} from 'react-redux'
// >>>>>>> a5fc9d74b2ed3fd30e03936c5dc086a0d61625e2

=======
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore} from '@reduxjs/toolkit'
import { Provider} from 'react-redux'
>>>>>>> 9da6dc84b9e31b7a6c064d2ee33c57f599bd9bac
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

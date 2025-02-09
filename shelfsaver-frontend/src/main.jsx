import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from './components/User.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemForm } from './components/Item.jsx'
import SignUpBuyer from './SignUpBuyer.jsx'
import SignUpSeller from './SignUpSeller.jsx'

// Routing is done using react-router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      
        {/* Dynamic route segment for user pages */}
        <Route path='user/:uid' element={<User />}/>

        <Route path='/items' element={<ItemForm />}/>

        <Route path='/signup/buyer' element={<SignUpBuyer/>}/>
        <Route path='/signup/seller' element={<SignUpSeller/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

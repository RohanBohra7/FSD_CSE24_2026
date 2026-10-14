import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import ICardGallery from './components/ICardGallery'
// import MyState from './components/MyState'
// import PracticeNameChange from './components/PracticeNameChange'
// import ImageManipulation from './components/ImageManipulation'
// import FetchProduct from './components/FetchProduct'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    

  <BrowserRouter>
  <Routes>
     <Route path='/' element={<Home />}> 

    <Route path='/login' element={<Login />}> </Route>
    <Route path='/register' element={<Registration />}> </Route>

    </Route>
   

   
     <Route path='/dashboard' element={<Dashboard />}> </Route>

  </Routes>
  </BrowserRouter>
  </div>

    
    
  )
}

export default App

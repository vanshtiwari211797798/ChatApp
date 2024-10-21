import React from 'react'
import Left from './Home/LeftSide/Left'
import Right from './Home/RightSide/Right'
import LogOut from './Home/LeftSide/LogOut'
import Signin from './Components/Signin'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Components/Signup'


const App = () => {

  const Auth = localStorage.getItem('chatuser');

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={Auth ? <div className="flex h-screen">
            <LogOut />
            <Left />
            <Right />
          </div> : <Navigate to={'signin'} />} />

          <Route path='/signin' element={Auth ? <Navigate to={'/'} /> : <Signin />} />

          <Route path='/signup' element={Auth ? <Navigate to={'/'} /> : <Signup />} />

          <Route path='*' element={<h2 className='text-center text-4xl font-bold underline h-screen flex justify-center items-center'>404 PAGE NOT FOUND</h2>} />
        </Routes>
        
      </BrowserRouter>


    </>

  )
}

export default App
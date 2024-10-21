import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
theme="colored"
transition: Bounce
/>
  </StrictMode>,
)

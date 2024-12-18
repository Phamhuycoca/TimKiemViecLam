import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ToastWrapper } from './utils/Helpers/Helper'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ToastWrapper/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

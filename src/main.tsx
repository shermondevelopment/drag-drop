import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MenuProvider } from './contexts/menu.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuProvider>
     <App />
    </MenuProvider>
  </StrictMode>,
)

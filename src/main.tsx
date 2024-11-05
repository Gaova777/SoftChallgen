import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import {ThemeProvider } from '@/Providers';
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeProvider>
)

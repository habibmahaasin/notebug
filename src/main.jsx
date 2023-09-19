import React from 'react'
import ReactDOM from 'react-dom/client'
import Notes from './pages/notes'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Notes />
    </ThemeProvider>
  </React.StrictMode>,
)

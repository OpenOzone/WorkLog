import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { Sidepanel } from '@/sidepanel/Sidepanel'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sidepanel />
  </React.StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrimitiveUseStatePOC from './PrimitiveUseStatePOC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimitiveUseStatePOC />
  </StrictMode>,
)

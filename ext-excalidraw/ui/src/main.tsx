import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import Canvas from './pages/canvas/Canvas';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas />
  </StrictMode>,
)

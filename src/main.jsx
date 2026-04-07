import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import App from './App.jsx'
import './i18n'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>로딩 중...</div>}>
    <StrictMode>
      <Toaster position="center" reverseOrder={false} />
      <App />
    </StrictMode>
  </Suspense>
)

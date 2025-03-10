import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './Rutas'
import './style/index.css'
import store from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

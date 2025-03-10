import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import { ApolloProvider } from '@apollo/client'
import client from './services/ApolloClient'
import './style/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)

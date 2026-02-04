import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Store.js'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>    
 <Auth0Provider
      domain='dev-w8hwv5ea6c0dt08t.us.auth0.com'
      clientId='aNUpoIgRRfvnjcqGzCPVetAmlderKKZt'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
    </StrictMode>
  </Provider>,
)

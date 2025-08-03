import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./store.ts"
import { initSentry } from './utils/sentry'
import { ErrorBoundary } from './components'

// Initialize Sentry (only in production)
initSentry()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
)

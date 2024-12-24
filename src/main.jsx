import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./main.css"
import { Provider } from 'react-redux'
import { store } from './store/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

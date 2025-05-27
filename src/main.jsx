import "./main.css"

import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { mainRoutes } from "./routes/mainRoutes";
import { store } from "./store";
import { Provider } from 'react-redux'

const router = createHashRouter([
  ...mainRoutes
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

import "./main.css"

import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { mainRoutes } from "./routes/mainRoutes";

const router = createHashRouter([
  ...mainRoutes
]);

createRoot(document.getElementById('root')).render(
    //<Provider store={store}>
      <RouterProvider router={router} />
    //</Provider>
)

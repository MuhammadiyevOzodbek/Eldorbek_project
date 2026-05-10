import NavbarLayout from "./components/layout/NavbarLayout"
import HomePage from './components/context/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotPage from "./components/NotFound/NotPage"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        }
      ]
    },
    {
      path: '*',
      element: <NotPage/>
    }
  ])
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App

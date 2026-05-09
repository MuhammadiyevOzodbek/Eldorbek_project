import NavbarLayout from "./components/layout/NavbarLayout"
import HomePage from './components/context/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
    }
  ])
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App

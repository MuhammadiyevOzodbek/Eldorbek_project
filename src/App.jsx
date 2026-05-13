import NavbarLayout from "./components/layout/NavbarLayout"
import HomePage from './components/context/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotPage from "./components/NotFound/NotPage"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Contact from "./components/context/ContactPage/Contact"
import About from "./components/context/AboutPage/About"

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
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

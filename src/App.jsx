import { lazy, Suspense, useEffect } from "react"
import NavbarLayout from "./components/layout/NavbarLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

const HomePage = lazy(() => import("./components/context/HomePage/HomePage"))
const About = lazy(() => import("./components/context/AboutPage/About"))
const Contact = lazy(() => import("./components/context/ContactPage/Contact"))
const Books = lazy(() => import("./components/context/BooksPage/Books"))
const Articles = lazy(() => import("./components/context/ArticlesPage/Articles"))
const ArticleDetail = lazy(() => import("./components/context/ArticlesPage/ArticleDetail"))
const NotPage = lazy(() => import("./components/NotFound/NotPage"))

function PageLoader() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      color: "var(--brand-500)",
      fontWeight: 600,
    }}>
      Yuklanmoqda...
    </div>
  )
}

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    })
  }, [])

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/books",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Books />
            </Suspense>
          ),
        },
        {
          path: "/articles",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Articles />
            </Suspense>
          ),
        },
        {
          path: "/articles/:slug",
          element: (
            <Suspense fallback={<PageLoader />}>
              <ArticleDetail />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<PageLoader />}>
          <NotPage />
        </Suspense>
      ),
    },
  ])

  return <RouterProvider router={routes} />
}

export default App

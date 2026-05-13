import { Link } from 'react-router-dom'
import './NotStyle.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

function NotPage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <div className="notfound">

      <div className="bg-grid"></div>

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div data-aos="zoom-in" className="card">

        <div className="top-text">
          ERROR 404
        </div>

        <h1>
          4<span>0</span>4
        </h1>

        <p>
          The page you are looking for doesn’t exist
          or has been moved.
        </p>

        <div className="buttons">

          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <button className="home-btn">
              Back Home
            </button>
          </Link>

          <Link style={{ textDecoration: 'none' }} to={'/contact'}>
          <button className="contact-btn">
            Contact
          </button>
          </Link>


        </div>

      </div>


    </div>
  )
}

export default NotPage

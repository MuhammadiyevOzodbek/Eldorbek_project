import { useEffect, useState } from "react"
import BookSvg from "../../../public/LayoutSvg/book.svg"
import "./Nabar.css"
import SunSvg from "../../../public/LayoutSvg/sun-svgrepo-com.svg"
import MoonSvg from "../../../public/LayoutSvg/moon-svgrepo-com.svg"
import { Link, Outlet } from "react-router-dom"
import Burger from '../../../public/LayoutSvg/burger-bar.png'
import Aos from "aos"
import "aos/dist/aos.css"

function NavbarLayout() {
    const [dark, setDark] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        Aos.init({
            duration:1000,
            once: true,
        })
    }, [])

    return (
        <div className={dark ? "dark" : ""}>
            <nav>
                <div className="nav-div1" data-aos="fade-right">
                    <img className="nav-logo" src={BookSvg} alt="Book" />
                    <h1>Meros<span>Blog</span></h1>
                </div>
                <img className="nav-burger" onClick={() => setOpen(!open)} src={Burger} alt="Burger" />

                <ul data-aos="fade-down">
                    <Link to={'/'}>
                        <li> Home<span></span></li>
                    </Link>
                    <Link to={'/about'}>
                        <li>About<span></span></li>
                    </Link>
                    <Link to={'/books'}>
                        <li>Books<span></span></li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>Contact<span></span></li>
                    </Link>
                </ul>
                <button data-aos="fade-left" onClick={() => setDark(!dark)} className="dark-btn">
                    {dark ? <img className="sun-svg" src={SunSvg} alt="Light Mode" /> : <img className="moon-svg" src={MoonSvg} alt="Dark Mode" />}
                </button>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavbarLayout

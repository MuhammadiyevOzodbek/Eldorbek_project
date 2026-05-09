import { useState } from "react"
import BookSvg from "../../../public/LayoutSvg/book.svg"
import "./Nabar.css"
import SunSvg from "../../../public/LayoutSvg/sun-svgrepo-com.svg"
import MoonSvg from "../../../public/LayoutSvg/moon-svgrepo-com.svg"
import { Link, Outlet } from "react-router-dom"

function NavbarLayout() {
    const [dark, setDark] = useState(false)
    return (
     <div className={dark ? "dark" : ""}>
        <nav>
            <div className="nav-div1">
                <img src={BookSvg} alt="Book" />
                <h1>Meros<span>Blog</span></h1>
            </div>
            <ul>
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
            <button onClick={() => setDark(!dark)} className="dark-btn">
                {dark ? <img className="sun-svg" src={SunSvg} alt="Light Mode" /> : <img className="moon-svg" src={MoonSvg} alt="Dark Mode" /> }
            </button>
        </nav>
        <Outlet/>
     </div>   
    )
}

export default NavbarLayout

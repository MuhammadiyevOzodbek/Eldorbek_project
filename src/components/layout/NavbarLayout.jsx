import { useEffect, useRef, useState } from "react"
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

    const menuRef = useRef(null)
    const burgerRef = useRef(null)

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })

        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className={dark ? "dark" : ""}>
            <nav>

                <div className="nav-div1">
                    <img className="nav-logo" src={BookSvg} alt="Book" />
                    <h1>Meros<span>Blog</span></h1>
                </div>

                <img
                    ref={burgerRef}
                    className="nav-burger"
                    onClick={() => setOpen(!open)}
                    src={Burger}
                    alt="Burger"
                />

                <ul
                    ref={menuRef}
                    className={open ? "show-menu" : ""}
                >
                    <Link to="/" onClick={() => setOpen(false)}>
                        <li>Home<span></span></li>
                    </Link>

                    <Link to="/about" onClick={() => setOpen(false)}>
                        <li>About<span></span></li>
                    </Link>

                    <Link to="/books" onClick={() => setOpen(false)}>
                        <li>Books<span></span></li>
                    </Link>

                    <Link to="/contact" onClick={() => setOpen(false)}>
                        <li>Contact<span></span></li>
                    </Link>
                </ul>

                <button
                    onClick={() => setDark(!dark)}
                    className="dark-btn"
                >
                    {dark
                        ? <img className="sun-svg" src={SunSvg} alt="Light Mode" />
                        : <img className="moon-svg" src={MoonSvg} alt="Dark Mode" />
                    }
                </button>

            </nav>

            <Outlet />
        </div>
    )
}

export default NavbarLayout
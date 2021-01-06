import "./style.css"
import { ReactComponent as Logo } from '../../Images/logo.svg'

function Navbar(): JSX.Element {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">
                DS Delivery
            </a>
        </nav>
    );
}

export default Navbar;
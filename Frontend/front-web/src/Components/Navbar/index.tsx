import "./style.css"
import { ReactComponent as Logo } from '../../Images/logo.svg'
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">
                DS Delivery
            </Link>
        </nav>
    );
}

export default Navbar;
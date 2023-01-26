import {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";

function Header(){

    const [activeHam, setAtiveHam] = useState(false);

    const menuItems = (
        <ul className="menu-items">
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
            <li><a href="/#">Portfolio</a></li>
        </ul>
    );

    return(<div className="navbar-container">
        <nav className="nav">
            <div className="nav-container">
                <button className={activeHam ? "hambuger active-hamburger" : "hambuger"} onClick={() => setAtiveHam(!activeHam)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                <div className="logo">FamilysHome</div>
                <>{menuItems}</>
                <div><FaShoppingCart className="cart"/></div>
            </nav>
            </div>
        </nav>
        {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>)
}

export default Header;
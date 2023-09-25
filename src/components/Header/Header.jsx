import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="pt-10 container mx-auto">
            <nav className="flex justify-between header-nav">
                <img src="Logo.png" alt="" />
                <ul className="flex gap-10 text-xl font-semibold justify-center items-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink>Donation</NavLink>
                    <NavLink>Statistics</NavLink>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="pt-10 container mx-auto">
            <nav className="md:flex justify-between header-nav">
                <div className="flex md:block justify-center mb-4 md:mb-0">
                <img src='https://i.ibb.co/KrPvdZT/Logo.png' alt="" />
                </div>
                <ul className="flex gap-10 text-xl font-semibold justify-center items-center">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/donation'>Donation</NavLink></li>
                    <li><NavLink to='/statistics'>Statistics</NavLink></li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
import { NavLink } from "react-router-dom";
import { navItems } from "../../constant";

const Navbar = () => {


    return (
        <nav className="space-x-6">
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        isActive
                            ? "text-green font-semibold"
                            : "text-white hover:text-hover"
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;

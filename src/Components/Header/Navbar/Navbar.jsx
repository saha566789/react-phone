import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div>
             <nav className="flex justify-between items-center py-6 shadow-md px-5">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-green-400 underline"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        
                        <NavLink
                            to="/fevorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-green-400 underline"
                            }
                        >
                           Favorites
                        </NavLink>
                    </li>
                    <li>
                        
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-green-400 underline"
                            }
                        >
                          Login
                        </NavLink>
                    </li>
                </ul>
             </nav>
        </div>
    );
};

export default Navbar;
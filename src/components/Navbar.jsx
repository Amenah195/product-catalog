import { NavLink } from "react-router-dom";

export default function Navbar() {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    };

    return (
        <nav className="navbar" style={{ marginBottom: "20px" }}>
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/products" style={({ isActive }) => isActive ? activeStyle : undefined}>
                Products
            </NavLink>
        </nav>
    );
}
import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
    return (
        <div className="products-layout">
            <h1>Products</h1>
            <p>Explore our instruments below:</p>
            <Outlet />
        </div>
    );
}
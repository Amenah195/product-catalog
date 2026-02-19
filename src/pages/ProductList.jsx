import { products } from "../data/Products";
import { Link } from "react-router-dom";

export default function ProductList() {
    return (
        <div className="product-grid">
            {products.map(product => (
                <div className="product-card" key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                    <img src={product.image} alt="{product.name}" />
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
            ))
            }
        </div >
    );
}
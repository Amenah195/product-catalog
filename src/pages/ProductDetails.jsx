import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/Products";


export default function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div>
                <h2>Product not found</h2>
                <button onClick={() => navigate("/products")}>
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} className="product-detail-img" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>

            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}
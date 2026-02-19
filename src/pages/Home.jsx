
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="hero">
                <h1>🎵 Welcome to Music Store</h1>
                <p>
                    Discover high-quality musical instruments for beginners and professionals.
                </p>

                <button onClick={() => navigate("/products")}>
                    Browse Products
                </button>
            </div>

            <div className="about">
                <h2>Why Choose Us?</h2>
                <p>
                    We provide premium musical instruments with affordable prices.
                    Whether you're a beginner or a professional musician,
                    we have something for you.
                </p>
            </div>
        </div>
    );
}

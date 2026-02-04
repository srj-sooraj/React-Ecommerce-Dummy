import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../cartSlice";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector(state =>
    state.products.products.find(p => p.id === Number(id))
  );

  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product?.id);

  if (!product) return <p>Loading...</p>;

  return (
   <div className="details-container">
  <div className="details-card">
    <div className="details-image">
      <img src={product.thumbnail} />
    </div>

    <div className="details-info">
      <h1>{product.title}</h1>
      <p className="desc">{product.description}</p>

      <div className="price-box">
        <span className="price">${product.price}</span>
      </div>

      {!isInCart ? (
        <button
          className="btn primary"
          onClick={() => dispatch(addToCart(product))}
        >
          🛒 Add to Cart
        </button>
      ) : (
        <button
          className="btn outline"
          onClick={() => navigate("/cart")}
        >
          👀 View Cart
        </button>
      )}
    </div>
  </div>
</div>

  );
}

export default ProductDetails;

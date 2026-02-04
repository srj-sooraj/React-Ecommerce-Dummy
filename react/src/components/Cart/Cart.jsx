import { useSelector } from "react-redux";
import "./Cart.css";
function Cart() {
  const items = useSelector(state => state.cart.items);

  if (items.length === 0) {
    return <h2 style={{ padding: 40 }}>Cart is empty</h2>;
  }

  return (
    <div className="cart-container">
  <h1 className="cart-title">🛒 Your Cart</h1>

  <div className="cart-grid">
    {items.map(item => (
      <div key={item.id} className="cart-card">
        <img src={item.thumbnail} />

        <div className="cart-info">
          <h3>{item.title}</h3>
          <p className="cart-price">${item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Cart;

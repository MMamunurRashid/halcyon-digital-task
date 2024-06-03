import React, { useState, useEffect } from "react";
import "./CartPage.css";
import img1 from '../../assets/Frame 33.png';
import img2 from '../../assets/Frame 33 (2).png';
import img3 from '../../assets/Frame 33 (1).png';

const CartPage = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      quantity: 1,
      price: 145,
      size: "M",
      color: "Red",
      imageUrl: img1 ,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      quantity: 1,
      price: 240,
      size: "L",
      color: "Blue",
      imageUrl: img2,
    },
    {
      id: 3,
      name: "Checkered Shirt",
      quantity: 1,
      price: 180,
      size: "L",
      color: "Blue",
      imageUrl: img3,
    },
  ]);

  // State for order summary
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    discount: 0,
    shipping: 15.0,
    promoDiscount: 0,
    total: 0,
  });

  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  useEffect(() => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discount = subtotal * 0.2; 
    const total = subtotal - discount - orderSummary.promoDiscount + orderSummary.shipping;
    setOrderSummary({ ...orderSummary, subtotal, discount, total });
  }, [cartItems, orderSummary.promoDiscount, orderSummary]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const applyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setOrderSummary({ ...orderSummary, promoDiscount: orderSummary.subtotal * 0.1 });
      setIsPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  return (
    <div>
      <h1 className="cart-page-title">YOUR CART</h1>
      <div className="cart-page">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <p className="product-price">${item.price}</p>
              </div>
              <div className="cart-item-actions">
                <span
                  className="remove-icon"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </span>
                <div className="quantity-controls">
                  <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal</span>
            <span className="summary-item-span">${orderSummary.subtotal}</span>
          </div>
          <div className="summary-item">
            <span>Discount (-20%)</span>
            <span className="discount summary-item-span">-${orderSummary.discount}</span>
          </div>
          <div className="summary-item">
            <span>Delivery Fee</span>
            <span className="summary-item-span">${orderSummary.shipping}</span>
          </div>
          <hr />
          <div className="summary-item total">
            <span>Total</span>
            <span className="total-amount">${orderSummary.total}</span>
          </div>
          <div className="promo-code">
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={isPromoApplied}
            />
            <button onClick={applyPromoCode} disabled={isPromoApplied}>
              Apply
            </button>
          </div>
          <button className="checkout-button">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

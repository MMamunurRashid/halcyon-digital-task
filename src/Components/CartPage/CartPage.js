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
  }, [cartItems, orderSummary.promoDiscount]);

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
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z" fill="#FF3333"/>
</svg>

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
        <div className="order-summary-div">
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
    </div>
  );
};

export default CartPage;

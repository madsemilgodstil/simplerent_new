"use client";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import Link from "next/link";

const CartItem = memo(({ item, onRemove, onUpdateQuantity }) => (
  <li className="flex flex-col py-2 border-b border-gray-200">
    {/* Top row: item name and price/remove button */}
    <div className="flex justify-between items-center">
      <span className="font-medium truncate max-w-[140px] text-black">
        {item.name} {/* Item name, truncated if too long */}
      </span>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">{item.price} DKK</span>{" "}
        {/* Price per unit */}
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-600 transition-colors"
          aria-label="Remove item"
        >
          {/* SVG icon for removing the item */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    {/* Bottom row: quantity controls and total price */}
    <div className="flex justify-between items-center mt-1">
      <div className="flex items-center bg-gray-100 rounded-md border border-gray-200">
        <button
          onClick={() =>
            onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
          }
          className="px-2 py-1 text-gray-600 hover:text-black transition-colors"
          aria-label="Decrease quantity"
        >
          - {/* Decrease quantity, minimum 1 */}
        </button>
        <span className="px-2 text-black">{item.quantity}</span>{" "}
        {/* Current quantity */}
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 text-gray-600 hover:text-black transition-colors"
          aria-label="Increase quantity"
        >
          + {/* Increase quantity */}
        </button>
      </div>
      <span className="font-semibold text-black">
        {item.price * item.quantity} DKK {/* Total price for this item */}
      </span>
    </div>
  </li>
));

// Main Cart component to manage and display the shopping cart
const Cart = () => {
  // State to store cart items with initial example data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Allen & Heath SQ5 Mixer", price: 950, quantity: 1 },
    { id: 2, name: "Shure SM58 Microphone", price: 150, quantity: 2 },
  ]);
  // State to control cart panel visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to trigger animation on cart button when items change
  const [isAnimating, setIsAnimating] = useState(false);

  // useEffect to close cart when clicking outside the panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      const cartPanel = document.getElementById("cart-panel");
      const cartButton = document.getElementById("cart-button");

      // Check if click is outside both cart panel and button, then close cart
      if (
        isOpen &&
        cartPanel &&
        !cartPanel.contains(event.target) &&
        cartButton &&
        !cartButton.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup: remove event listener on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]); // Dependency: re-run when isOpen changes

  // useEffect to animate cart button when item count changes
  useEffect(() => {
    if (cartItems.length > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500); // Animation lasts 500ms
      return () => clearTimeout(timer); // Cleanup timeout on unmount or re-run
    }
  }, [cartItems.length]); // Dependency: re-run when cart item count changes

  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const removeItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const itemCount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const total = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Cart Button */}
      <button
        id="cart-button"
        className={`flex items-center justify-center bg-white text-black px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-lime-100 transition-all ${
          isAnimating ? "scale-110" : "" // Scale up briefly when items change
        }`}
        onClick={toggleCart}
        aria-expanded={isOpen}
        aria-controls="cart-panel"
      >
        {/* Cart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        {/* Display item count badge if there are items */}
        {itemCount > 0 && (
          <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </button>

      {/* Floating Cart Panel */}
      <div
        id="cart-panel"
        className={`absolute bottom-16 right-0 w-80 bg-white text-black rounded-lg shadow-xl transition-all duration-300 overflow-hidden border border-gray-300 ${
          isOpen
            ? "opacity-100 translate-y-0" // Visible and in position when open
            : "opacity-0 translate-y-4 pointer-events-none" // Hidden and shifted down when closed
        }`}
      >
        {/* Header with title and clear button */}
        <div className="p-4 bg-gray-50 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg text-lime-600 font-bold">Your Cart</h2>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-gray-500 hover:text-black transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Cart items list or empty state */}
        <div className="max-h-96 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="py-8 text-center">
              {/* Empty cart icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto text-gray-400 mb-2"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Subtotal and checkout button (shown only if cart has items) */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-lg font-bold text-black">{total} DKK</span>
            </div>

            {/* Checkout Button */}
            <Link href="/pages/checkout">
              <button className="w-full bg-lime text-black py-2 px-4 rounded-md hover:bg-transparent border hover:border-black transition-colors font-medium flex items-center justify-center">
                Proceed to Checkout
                {/* Arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

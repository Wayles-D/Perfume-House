import React, { useState } from "react";
import { productDetails } from "../JavascriptFolders/Carts"; 
import OrderConfirmation from "./OrderConfirmation"; 
const CartItem = ({ item }) => {
  return (
    <div className="flex items-center gap-4 pb-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <button className="bg-gray-300 px-2 rounded">-</button>
          <span className="font-semibold">{item.quantity}</span>
          <button className="bg-purple-500 text-white px-2 rounded">+</button>
        </div>
        <p className="font-bold text-lg mt-1">₦{item.price.toLocaleString()}</p>
      </div>
      <button className="border border-red-500 text-red-500 px-3 py-1 rounded cursor-pointer">
        Remove
      </button>
    </div>
  );
};

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const cartItems = productDetails.filter((item) => item.quantity > 0); 
  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 2000;
  const total = subTotal + delivery;

  return (
    <div className="border rounded-lg p-6 max-w-sm shadow-md">
      <h2 className="text-xl font-bold mb-4">My Cart Preview</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="mt-4">
        <div className="flex justify-between font-medium">
          <span>Sub Total</span>
          <span className="font-bold">₦{subTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-medium mt-1">
          <span>Delivery</span>
          <span className="font-bold">₦{delivery.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>

        
        <button
          className="bg-purple-500 text-white font-bold text-center w-full py-2 rounded-lg mt-4 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Confirm Order
        </button>
      </div>

      {isModalOpen && <OrderConfirmation onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Cart;

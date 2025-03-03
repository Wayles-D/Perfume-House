import React from "react";
import Cancle from "../assets/CancleX.svg";
import Success from "../assets/SuccessImg.png";

const OrderConfirmation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
      <div className="rounded-2xl shadow-lg p-6 w-96">
        {/* Header */}
        <div className="flex justify-between items-center">
          <img src={Success} alt="Success" className="w-10 h-10" />
          <button onClick={onClose}>
            <img src={Cancle} alt="Close" className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-2">Order Confirmed</h2>
        <p className="text-white-500 text-sm">We hope you enjoy your order</p>

        {/* Order Items */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <img
              src="https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Elegance_Essence_ah22rz.jpg"
              alt="Product"
              className="w-12 h-12 rounded"
            />
            <div className="flex-1 ml-2">
              <p className="font-semibold">Franck Oliver Oud Touch</p>
              <p className="text-sm text-purple-500">2x ₦5,600</p>
            </div>
            <p className="font-bold">₦11,200</p>
          </div>

          <div className="flex items-center justify-between">
            <img
              src="https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Elegance_Essence_ah22rz.jpg"
              alt="Product"
              className="w-12 h-12 rounded"
            />
            <div className="flex-1 ml-2">
              <p className="font-semibold">Franck Oliver Oud Touch</p>
              <p className="text-sm text-purple-500">1x ₦5,600</p>
            </div>
            <p className="font-bold">₦5,600</p>
          </div>

          <div className="flex items-center justify-between">
            <img
              src="https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Elegance_Essence_ah22rz.jpg"
              alt="Product"
              className="w-12 h-12 rounded"
            />
            <div className="flex-1 ml-2">
              <p className="font-semibold">Franck Oliver Oud Touch</p>
              <p className="text-sm text-purple-500">1x ₦5,600</p>
            </div>
            <p className="font-bold">₦5,600</p>
          </div>
        </div>

        {/* Order Total (Without Divider Line) */}
        <div className="mt-4 flex justify-between">
          <p className="text-black-500">Order Total</p>
          <p className="font-bold text-black-600">₦5,600</p>
        </div>

        {/* Button */}
        <button className="mt-4 bg-purple-600 text-white w-full py-2 rounded-lg">
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;

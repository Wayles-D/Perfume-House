import React from "react";
import productDetails from "../JavascriptFolders/product";

const Products = () => {
  const handleAddToCart = (product) => {
    console.log(`${product.title} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
      {productDetails.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg md:text-xl mt-2">{product.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="rating rating-sm text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name={`rating-${product.id}`}
                  className="mask mask-star-2 bg-orange-500"
                  aria-label={`${i + 1} star`}
                />
              ))}
            </span>
            <span className="text-gray-500 text-sm md:text-base">({product.rateCount})</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-purple-500">₦{product.price}</span>
            <span className="text-gray-500 line-through text-sm md:text-base">
              ₦{product.discountPrice}
            </span>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-3 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-all"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

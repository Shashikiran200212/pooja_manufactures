import React from "react";
import Link from "next/link";
import { products } from "@/lib/products";

const ProductsGrid = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg p-4 flex flex-col shadow-sm hover:scale-105 transition-all duration-300">
              
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {product.description}
                </p>

                <div className="text-yellow-500 text-sm">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>

                <p className="text-sm font-medium text-green-600">
                  Rs {product.price}
                  <span className="ml-2 text-gray-500 line-through">
                    Rs {product.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;

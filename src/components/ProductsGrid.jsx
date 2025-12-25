import React from "react";
import Link from "next/link";
import { products } from "@/lib/products";

const ProductsGrid = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          // ✅ Safely get first variant image
          const thumbnail = product.variants?.[0]?.image;

          return (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg p-4 flex flex-col shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer">

                {/* IMAGE */}
                <div className="w-full h-48 overflow-hidden rounded-md bg-white flex items-center justify-center">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">
                      No image
                    </span>
                  )}
                </div>

                {/* DETAILS */}
                <div className="mt-3 flex flex-col gap-1">
                  <h3 className="font-semibold text-lg text-neutral-900">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  {/* RATING */}
                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>

                  {/* PRICE */}
                  <p className="text-sm font-medium text-green-600">
                    ₹{product.price}
                    <span className="ml-2 text-gray-500 line-through">
                      ₹{product.oldPrice}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;

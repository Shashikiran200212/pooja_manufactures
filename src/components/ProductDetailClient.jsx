"use client";

import { useState } from "react";

export default function ProductDetailClient({ product }) {
  const variants = product.variants ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (variants.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="flex flex-col gap-4">

      {/* IMAGE WITH LABEL */}
      <div className="relative w-full flex items-center justify-center">
        {/* LABEL ON IMAGE */}
        <span className="absolute top-3 left-3 z-10 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {variants[activeIndex].label}
        </span>

        <img
          src={variants[activeIndex].image}
          alt={product.name}
          className="max-h-[420px] w-full object-contain rounded-lg"
        />
      </div>

      {/* ✅ PRODUCT NAME BELOW IMAGE */}
      <h2 className="text-center text-lg font-semibold text-neutral-900">
        {product.name}
      </h2>

      {/* THUMBNAILS */}
      <div className="flex gap-2 justify-center flex-wrap">
        {variants.map((variant, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`border rounded-md p-1 transition ${
              activeIndex === index
                ? "border-black"
                : "border-gray-300 hover:border-gray-500"
            }`}
          >
            <img
              src={variant.image}
              alt={variant.label}
              className="h-16 w-16 object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

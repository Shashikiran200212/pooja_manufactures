"use client";

import { useState } from "react";

export default function ProductImageCarousel({ variants, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
    onChange?.(variants[index]); // notify parent
  };

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="w-full h-[420px] flex items-center justify-center border rounded-lg mb-4 bg-white">
        <img
          src={variants[activeIndex].image}
          alt={variants[activeIndex].label}
          className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 justify-center">
        {variants.map((v, idx) => (
          <button
            key={idx}
            onClick={() => handleChange(idx)}
            className={`border rounded-md p-1 transition
              ${
                activeIndex === idx
                  ? "ring-2 ring-black"
                  : "opacity-70 hover:opacity-100"
              }
            `}
          >
            <img
              src={v.image}
              alt={v.label}
              className="h-16 w-16 object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

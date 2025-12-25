"use client";

import { useState } from "react";

export default function ProductImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">

      {/* MAIN IMAGE */}
      <div className="w-full h-[420px] flex items-center justify-center border rounded-lg mb-4 bg-white">
        <img
          src={images[activeIndex]}
          alt="Product Image"
          className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 justify-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`border rounded-md p-1 transition
              ${
                activeIndex === index
                  ? "ring-2 ring-black"
                  : "opacity-70 hover:opacity-100"
              }
            `}
          >
            <img
              src={img}
              alt="Thumbnail"
              className="h-16 w-16 object-contain"
            />
          </button>
        ))}
      </div>

    </div>
  );
}

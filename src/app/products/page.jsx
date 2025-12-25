import ProductsGrid from "@/components/ProductsGrid";
import Link from "next/link";
import React from "react";
import ProductImageCarousel from "@/components/ProductImageCarousel";

const page = () => {
  return (
    <div className="min-h-screen px-4 py-4 bg-neutral-50">
      
      {/* 🔹 STICKY HEADER */}
      <div className="sticky top-0 z-50 bg-neutral-50">
        <div className="relative flex items-center py-4">
          
          {/* 🔙 MOBILE BACK ICON (only mobile) */}
          <Link
            href="/"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full bg-neutral-900 text-white active:scale-95 transition"
          >
            {/* SVG ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>

          {/* ⬅ DESKTOP BACK BUTTON (md and above) */}
          <Link
            href="/"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition"
          >
            ← Back to Home
          </Link>

          {/* 🧭 CENTERED TITLE */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
            Products
          </h1>
        </div>
      </div>

      {/* PRODUCTS */}
      <ProductsGrid />
    </div>
  );
};

export default page;

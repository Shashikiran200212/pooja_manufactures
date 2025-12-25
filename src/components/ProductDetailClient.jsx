"use client";

import { useState } from "react";
import ProductImageCarousel from "./ProductImageCarousel";

export default function ProductDetailClient({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);

  return (
    <>
      {/* IMAGE */}
      <ProductImageCarousel
        variants={product.variants}
        onChange={setVariant}
      />

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        {product.name} – {variant.label}
      </h1>
    </>
  );
}

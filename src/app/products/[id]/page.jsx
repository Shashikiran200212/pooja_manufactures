import Link from "next/link";
import { products } from "@/lib/products";
import CopyPhoneButton from "@/components/CopyPhoneButton";
import ProductImageCarousel from "@/components/ProductImageCarousel";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 px-4 py-6">

      {/* BACK */}
      <div className="max-w-7xl mx-auto mb-4">
        <Link
          href="/products"
          className="text-sm font-medium text-neutral-700 hover:underline"
        >
          ← Back to Products
        </Link>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT — IMAGE CAROUSEL */}
        <div className="lg:col-span-1 bg-white rounded-lg p-4 sticky top-6 h-fit">
          <ProductImageCarousel images={product.images} />
        </div>

        {/* CENTER — PRODUCT INFO */}
        <div className="lg:col-span-1 bg-white rounded-lg p-6 flex flex-col gap-4">

          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 text-sm">
            <div className="text-yellow-500">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
            <span className="text-neutral-500">
              ({product.rating} / 5)
            </span>
          </div>

          <hr />

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-green-600">
              ₹{product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="text-sm text-green-700 font-medium">
            Inclusive of all taxes
          </p>

          <hr />

          <div>
            <h2 className="font-semibold mb-1">Product Description</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>High quality motor</li>
            <li>Energy efficient</li>
            <li>Low noise operation</li>
            <li>Durable build</li>
          </ul>
        </div>

        {/* RIGHT — BUY BOX */}
        <div className="lg:col-span-1 bg-white rounded-lg p-6 h-fit flex flex-col gap-4 border">

          <p className="text-lg font-semibold">
            ₹{product.price}
          </p>

          <p className="text-sm text-green-700">
            In stock
          </p>

          <p className="text-sm text-neutral-600">
            Free delivery within 3–5 business days
          </p>

          <a
            href={`https://wa.me/919618423541?text=Hello, I am interested in ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold transition">
              Enquire on WhatsApp
            </button>
          </a>

          <CopyPhoneButton />

          <p className="text-xs text-neutral-500 text-center">
            Sold by Pooja Manufacturing
          </p>
        </div>

      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import Link from "next/link";

/* ---------------- PRODUCT DATA ---------------- */
const products = [
  { id: 1, price: 2500, oldPrice: 3500, image: "/1.jpeg" },
  { id: 2, price: 2500, oldPrice: 3500, image: "/2.jpeg" },
  { id: 3, price: 2500, oldPrice: 3500, image: "/3.jpeg" },
  { id: 4, price: 2500, oldPrice: 3500, image: "/4.jpeg" },
];

export default function HeroSectionOne() {
  return (
    <div className="relative flex flex-col bg-[url('/h2.jpg')] bg-cover bg-center bg-no-repeat">

      <Navbar />

      {/* ================= HERO ================= */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative z-10 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
          {"Evolution in Motion".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 max-w-xl mt-4 text-neutral-200"
        >
          Soothing, consistent air circulation that transforms your space.
        </motion.p>

        <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/products">
            <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 hover:bg-neutral-800 transition">
              View Products
            </button>
          </Link>

          <a
            href="https://wa.me/919618423541?text=Hello%20I%20want%20to%20Enquire%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#252525] flex flex-col md:flex-row items-center"
      >
        <img
          src="/h3.jpg"
          alt="About us"
          className="w-full md:w-1/2 h-[250px] md:h-[400px] object-cover"
        />

        <div className="w-full md:w-1/2 px-6 py-10 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            About Us
          </h2>
          <p className="text-white/80">
            We design premium fans that blend innovation, performance and style.
          </p>
        </div>
      </motion.section>

      {/* ================= PRODUCTS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="bg-neutral-100 p-4"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-center text-2xl md:text-3xl font-semibold my-4"
        >
          Our Recent Products
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-3 hover:scale-105 transition cursor-pointer"
              >
                <img src={p.image} alt="" />
                <p className="text-red-500 text-sm mt-2">
                  Rs {p.price}{" "}
                  <span className="line-through text-neutral-500">
                    Rs {p.oldPrice}
                  </span>
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center my-6">
          <Link
            href="/products"
            className="px-8 py-3 rounded-full border border-black uppercase font-bold hover:bg-black hover:text-white transition"
          >
            View All
          </Link>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-neutral-600 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 text-sm"
      >
        <div>
          <h3 className="text-lg font-bold">Better Air</h3>
          <p>High quality fans and air solutions.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Links</h3>
          <ul>
            <li>Blogs</li>
            <li>Manufactures Hub</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Get in Touch</h3>
          <ul>
            <li>📞 1234567890</li>
            <li>✉️ pooja@gmail.com</li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-4 text-center">
          © 2025 Pooja Manufactures
        </div>
      </motion.footer>
    </div>
  );
}

/* ================= NAVBAR ================= */
const Navbar = () => (
  <nav className="w-full bg-white text-black flex justify-center py-4 sticky top-0 z-50">
    <h1 className="text-lg md:text-2xl font-bold">
      Pooja Manufactures
    </h1>
  </nav>
);

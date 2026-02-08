import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Neon Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-80"></div>

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 blur-[200px] opacity-30 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Kral da biziz,
          <span className="text-indigo-500 block">Kural da.</span>
        </h1>

        <p className="text-white/60 mt-6 max-w-xl mx-auto text-lg">
          Modern, hızlı ve profesyonel web çözümleri.
          Lovesxim ile sınırları kaldır.
        </p>

        <div className="mt-8 space-x-4">
          <button className="px-8 py-3 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500 transition">
            Başla
          </button>

          <button className="px-8 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition">
            Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}

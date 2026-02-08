import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <h1 className="text-2xl font-bold text-indigo-500">lovesxim.dev</h1>

      <div className="space-x-6 text-white/70">
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

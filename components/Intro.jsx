"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  function handleClose() {
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-200 via-amber-100 to-white">
      <div className="text-center p-10">
        <div className="text-6xl">🍦</div>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-pink-600">
          Welcome to Chill & Swirl
        </h1>
        <p className="mt-2 text-slate-600">The sweetest spot in town</p>
        <button onClick={handleClose} className="mt-6 btn-primary">
          Enter Shop
        </button>
      </div>
    </div>
  );
}

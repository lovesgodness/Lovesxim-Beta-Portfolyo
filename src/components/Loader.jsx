import { useEffect, useState, useMemo } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Yıldızları sadece bir kere oluştur (performans)
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 1 + 0.5, // 0.5–1.5 saniye (hızlı)
    }));
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center overflow-hidden z-50">

      {/* Hızlandırılmış yıldızlar */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-pulse"
            style={{
              top: star.top + "%",
              left: star.left + "%",
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* İçerik */}
      <div className="text-center z-10">

        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/30">
          {"</>"}
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          lovesxim
        </h1>

        <div className="w-72 h-1 bg-white/10 rounded-full mt-6 mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/60 mt-2">
          Yükleniyor... {Math.floor(progress)}%
        </p>

        <p className="text-indigo-400 mt-6 text-lg font-semibold">
          Kral da biziz, kural da.
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:.15s]" />
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:.3s]" />
        </div>

      </div>
    </div>
  );
}

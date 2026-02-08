import { useState } from "react";
import Footer from "../components/footer.jsx";
const features = [
  {
    icon: "💻",
    title: "Temiz Kod Yapısı",
    desc: "Modern standartlara uygun ve sürdürülebilir kod."
  },
  {
    icon: "⚡",
    title: "Yüksek Performans",
    desc: "Optimize edilmiş hızlı uygulamalar."
  },
  {
    icon: "🔒",
    title: "Güvenlik",
    desc: "Güncel güvenlik standartları."
  },
  {
    icon: "📱",
    title: "Responsive",
    desc: "Tüm cihazlarda uyumlu."
  },
  {
    icon: "👨‍💻",
    title: "Uzman Ekip",
    desc: "Deneyimli geliştiriciler."
  },
  {
    icon: "🕐",
    title: "7/24 Destek",
    desc: "Kesintisiz destek."
  }
];

export default function Home() {
  const [yearly, setYearly] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#050816] text-white relative overflow-hidden">

      {/* Background Glow (tıklama engellemez) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30 pointer-events-none" />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center font-bold">
              {"</>"}
            </div>
            <span className="text-xl font-bold">lovesxim</span>
          </div>

          <div className="hidden md:flex gap-8 text-white/70">
            <button className="nav-link" onClick={() => scrollTo("hero")}>Ana Sayfa</button>
            <button className="nav-link" onClick={() => scrollTo("features")}>Özellikler</button>
            <button className="nav-link" onClick={() => scrollTo("pricing")}>Fiyatlandırma</button>
          </div>

          <div className="flex gap-3">
            <button className="btn-glow px-5 py-2 rounded-full border border-cyan-400 text-cyan-400">
              Giriş Yap
            </button>
            <button className="btn-glow btn-gradient px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500">
              Üye Ol
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-10 pt-20 relative">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl w-full">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Profesyonel Yazılım
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Çözümleri
              </span>
            </h1>

            <p className="text-white/60 mt-6 max-w-xl">
              Modern ve yüksek performanslı yazılım çözümleri.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => scrollTo("pricing")}
                className="btn-glow btn-gradient px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500"
              >
                Hemen Başla
              </button>

              <button className="btn-glow px-8 py-3 rounded-full border border-white/20">
                Demo
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Özellikler</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0f172a]/70 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all hover:-translate-y-2"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-white/60 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Fiyatlandırma
        </h2>

        <p className="text-white/60 mb-12">
          İhtiyacınıza uygun planı seçin ve hemen kullanmaya başlayın.
        </p>

        {/* Aylık / Yıllık Switch */}
        <div className="flex justify-center mb-14">
          <div className="bg-[#0f172a]/80 border border-white/10 rounded-full p-1 flex backdrop-blur-md">

            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`px-6 py-2 rounded-full text-sm cursor-pointer transition-all ${
                !yearly
                  ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Aylık
            </button>

            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`px-6 py-2 rounded-full text-sm cursor-pointer transition-all ${
                yearly
                  ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Yıllık (%20 indirim)
            </button>

          </div>
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ================= Starter ================= */}
          <div className="p-8 rounded-2xl bg-[#0f172a]/70 border border-white/10 hover:border-cyan-400/40 transition-all">

            <h3 className="text-xl font-semibold">Başlangıç</h3>

            <p className="text-4xl font-bold mt-4">
              ₺{yearly ? Math.floor(299 * 12 * 0.8) : 299}
              <span className="text-sm text-white/60">
                {yearly ? " /yıl" : " /ay"}
              </span>
            </p>

            <ul className="text-white/70 mt-6 space-y-3 text-sm text-left">
              <li>✔ 5 Proje</li>
              <li>✔ 10 GB Depolama</li>
              <li>✔ Temel Analiz</li>
              <li>✔ Standart Performans</li>
              <li>✔ Email Destek</li>
            </ul>

            <button className="btn-glow mt-8 w-full py-2 rounded-full border border-white/20 hover:bg-white/5">
              Başla
            </button>
          </div>


          {/* ================= Pro (En Popüler) ================= */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-cyan-500/20 to-pink-500/20 border border-cyan-400/60 scale-105 shadow-[0_0_40px_rgba(34,211,238,0.25)]">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 font-semibold">
              EN POPÜLER
            </div>

            <h3 className="text-xl font-semibold mt-2">Profesyonel</h3>

            <p className="text-4xl font-bold mt-4">
              ₺{yearly ? Math.floor(799 * 12 * 0.8) : 799}
              <span className="text-sm text-white/60">
                {yearly ? " /yıl" : " /ay"}
              </span>
            </p>

            {yearly && (
              <div className="text-green-400 text-xs mt-1">
                2 ay ücretsiz
              </div>
            )}

            <ul className="text-white/80 mt-6 space-y-3 text-sm text-left">
              <li>✔ Sınırsız Proje</li>
              <li>✔ 100 GB Depolama</li>
              <li>✔ Gelişmiş Analiz</li>
              <li>✔ API Erişimi</li>
              <li>✔ Öncelikli Destek</li>
              <li>✔ Performans İzleme</li>
            </ul>

            <button className="btn-glow btn-gradient mt-8 w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500">
              Hemen Al
            </button>
          </div>


          {/* ================= Enterprise ================= */}
          <div className="p-8 rounded-2xl bg-[#0f172a]/70 border border-white/10 hover:border-cyan-400/40 transition-all">

            <h3 className="text-xl font-semibold">Kurumsal</h3>

            <p className="text-4xl font-bold mt-4">
              ₺{yearly ? Math.floor(1999 * 12 * 0.8) : 1999}
              <span className="text-sm text-white/60">
                {yearly ? " /yıl" : " /ay"}
              </span>
            </p>

            <ul className="text-white/70 mt-6 space-y-3 text-sm text-left">
              <li>✔ Sınırsız Her Şey</li>
              <li>✔ Özel Sunucu</li>
              <li>✔ SLA Garantisi</li>
              <li>✔ Özel Entegrasyon</li>
              <li>✔ 7/24 Destek</li>
              <li>✔ Teknik Danışman</li>
            </ul>

            <button className="btn-glow mt-8 w-full py-2 rounded-full border border-white/20 hover:bg-white/5">
              Başla
            </button>
          </div>

        </div>

      </section>

      {/* ================= REGISTER / COMMUNITY ================= */}
      <section id="register" className="py-32 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Sol taraf */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Topluluğa Katıl
            </h2>

            <p className="text-white/60 mb-10 max-w-lg">
              Binlerce profesyonel yazılımcının tercih ettiği platformumuza katılın.
              Projelerinizi yönetin, ekibinizle işbirliği yapın ve kariyerinizi bir üst seviyeye taşıyın.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="p-6 rounded-xl bg-[#0f172a]/70 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">15K+</div>
                <div className="text-white/60 text-sm">Aktif Kullanıcı</div>
              </div>

              <div className="p-6 rounded-xl bg-[#0f172a]/70 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-white/60 text-sm">Tamamlanan Proje</div>
              </div>

              <div className="p-6 rounded-xl bg-[#0f172a]/70 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">98%</div>
                <div className="text-white/60 text-sm">Müşteri Memnuniyeti</div>
              </div>

              <div className="p-6 rounded-xl bg-[#0f172a]/70 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">7/24</div>
                <div className="text-white/60 text-sm">Destek Hizmeti</div>
              </div>

            </div>
          </div>


          {/* Sağ taraf – Form */}
          <div className="bg-[#0f172a]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-bold mb-6 text-center">
              Ücretsiz Hesap Oluştur
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                placeholder="E-posta Adresi"
                className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="password"
                placeholder="Şifre"
                className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="password"
                placeholder="Şifre Tekrar"
                className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/10 focus:border-cyan-400 outline-none"
              />

              <label className="flex items-center gap-2 text-sm text-white/60">
                <input type="checkbox" className="accent-cyan-400" />
                Kullanım şartlarını kabul ediyorum
              </label>

              <button
                type="button"
                className="btn-glow btn-gradient w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 font-semibold"
              >
                Hesap Oluştur
              </button>

              <p className="text-center text-sm text-white/60">
                Zaten hesabın var mı? <span className="text-cyan-400 cursor-pointer">Giriş Yap</span>
              </p>

            </form>

          </div>

        </div>

      </section>
      
      <Footer />


    </div>
  );
}

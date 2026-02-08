import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-white/5 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* LOGO + AÇIKLAMA */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center font-bold">
                {"</>"}
              </div>
              <span className="text-xl font-bold text-white">lovesxim</span>
            </div>

            <p className="text-white/60 text-sm mb-6">
              Modern teknolojilerle güçlendirilmiş, profesyonel yazılım çözümleri sunuyoruz.
            </p>

            {/* Sosyal */}
            <div className="flex gap-4 text-white/70">
              <Icon><FaGithub /></Icon>
              <Icon><FaTwitter /></Icon>
              <Icon><FaLinkedin /></Icon>
              <Icon><FaDiscord /></Icon>
              <Icon><FaYoutube /></Icon>
            </div>
          </div>

          {/* ÜRÜN */}
          <FooterCol
            title="ÜRÜN"
            items={[
              "Özellikler",
              "Fiyatlandırma",
              "Güvenlik",
              "Entegrasyonlar",
              "API Dokümantasyonu",
            ]}
          />

          {/* ŞİRKET */}
          <FooterCol
            title="ŞİRKET"
            items={[
              "Hakkımızda",
              "Blog",
              "Kariyer",
              "Basın Kiti",
              "İletişim",
            ]}
          />

          {/* DESTEK + BÜLTEN (aynı kolon, sağ hizalı görünür) */}
          <div>
            <FooterCol
              title="DESTEK"
              items={[
                "Yardım Merkezi",
                "Topluluk",
                "Durum",
                "Geri Bildirim",
                "SSS",
              ]}
            />

            {/* BÜLTEN */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-2">Bülten</h4>

              <p className="text-white/60 text-sm mb-3">
                Güncellemelerden haberdar olun.
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="bg-[#0f172a] border border-white/10 px-4 py-2 rounded-l-lg outline-none text-sm w-full focus:border-cyan-400"
                />

                <button className="px-4 rounded-r-lg bg-gradient-to-r from-cyan-400 to-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
                  →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ALT BAR */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">

          <div>© 2025 lovesxim. Tüm hakları saklıdır.</div>

          <div className="flex gap-6 my-4 md:my-0">
            <span className="hover:text-white cursor-pointer">Gizlilik</span>
            <span className="hover:text-white cursor-pointer">Kullanım</span>
            <span className="hover:text-white cursor-pointer">Çerez</span>
          </div>

          <div className="text-cyan-400">
            Created by lovesxim
          </div>

        </div>

      </div>
    </footer>
  );
}

/* Küçük componentler */

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-white/60 text-sm">
        {items.map((item, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Icon({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-cyan-400 cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
      {children}
    </div>
  );
}

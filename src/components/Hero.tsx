import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-navy-900 pt-6 md:pt-20">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden md:block absolute top-0 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" aria-hidden="true"></div>
        <div className="hidden md:block absolute top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" aria-hidden="true"></div>
        <div className="hidden md:block absolute -bottom-40 left-20 w-[600px] h-[600px] bg-emerald-700/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" aria-hidden="true"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-32 w-full z-10 mt-16 md:mt-0">
        <div className="flex flex-col items-center text-center">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-emerald-400 font-semibold text-xs sm:text-base mb-6 md:mb-8 shadow-[0_0_20px_rgba(0,230,118,0.1)]">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-emerald-500"></span>
              </span>
              73-84% de sucesso contra o SUS
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-4 md:mb-8">
              Sua saúde <br className="hidden sm:block" />
              <span className="relative whitespace-nowrap">
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 bg-emerald-500/30 -z-10 transform -rotate-1"></span>
                <span className="text-gradient">não pode</span>
              </span>
              <br className="hidden sm:block" /> esperar na fila.
            </h1>

            <p className="text-lg sm:text-2xl text-white/70 leading-relaxed mb-6 md:mb-10 max-w-2xl font-light mx-auto">
              Chega de descaso. Avaliamos seu caso <strong className="text-white font-semibold">gratuitamente</strong> e conectamos você a advogados que exigem seus direitos na justiça.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-full bg-emerald-500 text-navy-900 font-black text-base md:text-lg overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10">Exigir Meu Direito Agora</span>
              </a>
              <button
                onClick={() => handleScroll("como-funciona")}
                className="inline-flex items-center justify-center px-8 py-4 md:py-5 rounded-full text-white font-bold text-base md:text-lg border-2 border-white/20 hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                Entenda o Processo
              </button>
            </div>

            <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-10 border-t border-white/10 max-w-2xl mx-auto">
              {[
                { title: "Consulta 100% Gratuita", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Retorno em 24 horas", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Especialistas OAB/SC", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-white/80 font-medium text-sm leading-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 hidden md:block">Role para baixo</span>
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 w-full leading-[0]">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

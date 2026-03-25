import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "1.3M", suffix: "+", label: "Pacientes na fila do SUS" },
  { value: "634", suffix: "dias", label: "De espera média por procedimento" },
  { value: "460K", suffix: "", label: "Ações de saúde anuais no Brasil" },
  { value: "84", suffix: "%", label: "Taxa de sucesso nas ações" },
];

export default function Numeros() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-32 bg-navy-900 relative overflow-hidden pt-24 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900"></div>
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CjxwYXRoIGQ9Ik0wIDBoODB2ODBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMjBoODBNMjAgMHY4ME0wIDQwaDgwTTQwIDB2ODBNMCA2MGg4ME02MCAwdjgwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            A realidade do sistema <br className="hidden md:block"/>
            <span className="text-emerald-400">em números.</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Os dados mostram por que você não deve apenas esperar. A justiça tem sido a única saída para milhares de brasileiros.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-[2rem] glass-card-dark text-center transition-all duration-1000 transform group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-[2rem] -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 w-full rounded-[2rem] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-700 ease-in-out"></div>
              </div>
              
              <div className="flex items-baseline justify-center font-black mb-2 text-white relative">
                <span className="text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter text-shadow-md">
                  {stat.value}
                </span>
                <span className="text-3xl md:text-5xl text-emerald-400 ml-1 font-bold">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-white/70 text-lg font-medium tracking-wide uppercase leading-snug relative">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm font-medium">
            Fontes de dados: CNJ, DATASUS, Ministério da Saúde (2024-2025)
          </p>
        </div>
      </div>
    </section>
  );
}

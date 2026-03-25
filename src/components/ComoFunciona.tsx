const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Contato Via WhatsApp",
    desc: "Você nos conta sua situação pelo WhatsApp. É rápido, sem burocracia e totalmente gratuito.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Análise Especializada",
    desc: "Nossa equipe avalia seu caso sem custo para confirmar a viabilidade jurídica do pedido.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Reunião de Documentos",
    desc: "Orientamos sobre os laudos médicos e comprovantes necessários para fundamentar o pedido.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Ação Judicial Direta",
    desc: "Encaminhamos tudo para um advogado especialista agir na justiça e garantir sua cirurgia.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-16 md:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-navy-900/[0.02] rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4 border border-emerald-500/20">
            Jornada Simplificada
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 mb-6 tracking-tight">
            Como garantimos o seu <br className="hidden sm:block" />
            <span className="text-gradient">direito à saúde</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Esqueça a burocracia. Desenhamos um processo ágil e direto ao ponto para tirar você da fila de espera o mais rápido possível.
          </p>
        </div>

        <div className="relative mt-16 md:mt-24">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-100 -translate-y-1/2 z-0 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 mt-8 md:mt-0">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="group relative bg-white rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(0,230,118,0.2)] border border-gray-100 mt-6 md:mt-0"
              >
                {/* Huge Number Background */}
                <div className="absolute -top-8 md:-top-12 -right-2 md:-right-4 text-[6rem] md:text-[8rem] font-black text-gray-50/80 group-hover:text-emerald-50/50 transition-colors duration-500 select-none z-0 pointer-events-none">
                  {step.num}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-navy-900 text-emerald-400 flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-navy-900 transition-all duration-500 -mt-12 md:-mt-16">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave transition bottom to match dark Numeros section */}
      <div className="absolute bottom-0 w-full leading-[0] rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#0A1128"></path>
        </svg>
      </div>
    </section>
  );
}

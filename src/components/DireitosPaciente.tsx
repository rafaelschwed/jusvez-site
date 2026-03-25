import { WHATSAPP_URL } from "@/lib/constants";

const rights = [
  {
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    title: "Direito Constitucional à Saúde",
    desc: "A Constituição Federal é clara: saúde é direito de todos e dever absoluto do Estado. Você não está pedindo um favor.",
    tag: "CF/88, Art. 196",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Prazo Máximo para Cirurgias",
    desc: "A lei estipula que cirurgias eletivas devem ser realizadas em até 180 dias. Ultrapassou esse prazo? É hora de agir.",
    tag: "Enunciado 98, CNJ",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "Consultas em até 100 dias",
    desc: "Aguardando um especialista? O prazo legal é de 100 dias. A ineficiência do sistema não pode custar a sua saúde.",
    tag: "Enunciado 98, CNJ",
    color: "from-amber-500 to-orange-400"
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Tutela de Urgência (Liminar)",
    desc: "Em casos graves, o juiz pode emitir uma ordem imediata (liminar) obrigando o SUS a realizar o procedimento em dias.",
    tag: "Ação Imediata",
    color: "from-rose-500 to-red-400"
  },
];

export default function DireitosPaciente() {
  return (
    <section id="seus-direitos" className="py-16 md:py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          <div className="lg:w-1/3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-navy-900 text-white font-bold text-sm tracking-widest uppercase mb-4 md:mb-6 shadow-md">
              A Lei Está do Seu Lado
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-tight mb-4 md:mb-8">
              Conheça as suas <br/>
              <span className="text-emerald-500">armas.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-10 leading-relaxed">
              O sistema público conta com a sua desinformação e desistência. Quando você conhece as leis, a balança do poder muda de lado.
            </p>
            
            <div className="hidden lg:block">
              <p className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-4">Seus direitos foram violados?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 text-navy-900 font-black text-lg shadow-[0_4px_20px_-4px_rgba(0,230,118,0.5)] transition-all hover:scale-105 hover:bg-emerald-400"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Agir Agora
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-navy-900/5 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 group"
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${right.color} text-white shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={right.icon} />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-black text-navy-900 mb-3">{right.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {right.desc}
                </p>
                
                <span className="inline-block bg-gray-100 text-navy-800 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide">
                  {right.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden w-full text-center mt-8">
            <p className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-4">Seus direitos foram violados?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 rounded-full bg-emerald-500 text-navy-900 font-black text-lg shadow-xl"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Agir Agora
            </a>
          </div>

        </div>
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

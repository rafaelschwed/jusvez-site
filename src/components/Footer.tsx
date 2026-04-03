export default function Footer() {
  const handleNavLink = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050A18] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="mb-6">
              <img
                src="/jusvez-logo.png"
                alt="JusVez"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-base leading-relaxed mb-6 font-light pr-4">
              Consultoria administrativa que organiza a documentação e orienta pacientes do SUS sobre seus direitos. Sua saúde tratada com a prioridade e urgência que a lei determina.
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <span className="text-white/40 text-sm font-medium">Sede: Florianópolis, SC</span>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Navegação</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "Como Funciona", id: "como-funciona" },
                { label: "Seus Direitos", id: "seus-direitos" },
                { label: "Dúvidas Frequentes", id: "faq" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLink(link.id)}
                  className="text-white/50 hover:text-emerald-400 text-base text-left transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a href="#" className="text-white/50 hover:text-emerald-400 text-base transition-colors font-medium">
                Política de Privacidade
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Fale Conosco</h4>
            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/5548998168948"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-white font-semibold text-lg">(48) 99816-8948</div>
                </div>
              </a>
              
              <a
                href="mailto:contato@jusvez.com.br"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">E-mail</div>
                  <div className="text-white/80 font-medium">contato@jusvez.com.br</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} JusVez. Consultoria em gestão empresarial (CNAE 7020-4/00). Todos os direitos reservados.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded text-white/50 text-xs font-bold uppercase tracking-wider">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Site Seguro
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded text-white/50 text-xs font-bold uppercase tracking-wider">
                Advogados OAB/SC
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded text-white/50 text-xs font-bold tracking-wider">
                Florianópolis/SC
              </span>
            </div>
          </div>
          <p className="text-white/30 text-xs font-medium max-w-xl">
            Aviso Legal: A JusVez é uma empresa de consultoria administrativa (CNAE 7020-4/00) — não é escritório de advocacia e não presta serviços jurídicos. Os serviços jurídicos são prestados exclusivamente por advogados independentes inscritos na OAB, sem captação de clientela pela plataforma, em conformidade com o Estatuto da Advocacia (Lei 8.906/94) e o Provimento 205/2021 do CFOAB.
          </p>
        </div>
      </div>
    </footer>
  );
}

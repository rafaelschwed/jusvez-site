import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const faqs = [
  {
    q: "Quanto custa a consulta inicial?",
    a: "A análise inicial é gratuita — verificamos se você se enquadra nos critérios sem custo. Se optar por seguir, temos dois caminhos acessíveis: a Mini Defesa (via administrativa, a partir de R$ 119,90) e a Ação no Juizado Especial (sem advogado, a partir de R$ 289,90). Para casos que exigem representação jurídica, os honorários são combinados diretamente com o advogado.",
  },
  {
    q: "Preciso de advogado para entrar com ação?",
    a: "Depende do caminho. A Mini Defesa (via administrativa) e a Ação no Juizado Especial não exigem advogado — você mesmo protocola. Para casos mais complexos, preparamos toda a documentação para que um advogado especialista em saúde possa agir imediatamente, sem precisar começar do zero.",
  },
  {
    q: "Quanto tempo demora o processo judicial?",
    a: "Depende do caso. Ações com pedido de tutela de urgência (liminar) podem conseguir uma decisão em dias ou semanas. O processo completo pode levar de 3 a 12 meses, mas o importante é que a liminar já garante o atendimento enquanto o processo tramita.",
  },
  {
    q: "Quais documentos vou precisar?",
    a: "Os principais são: documento de identidade, comprovante de residência, cartão SUS, laudos médicos, comprovante de entrada na fila do SUS (protocolo/posição), e receitas ou pedidos médicos. Nós orientamos você em cada etapa.",
  },
  {
    q: "Funciona para plano de saúde (convênio) também?",
    a: "Sim. Quando o plano de saúde nega um procedimento, exame ou cirurgia prescrito pelo médico, também é possível buscar a via judicial. Verificamos sua situação e organizamos a documentação necessária.",
  },
  {
    q: "E se eu perder a ação?",
    a: "Antes de recomendar qualquer caminho, verificamos se o seu caso se enquadra nos critérios legais. Os dados do CNJ mostram que ações de saúde têm alta taxa de êxito — mas trabalhamos apenas com casos bem fundamentados para maximizar suas chances.",
  },
  {
    q: "Preciso entrar com processo judicial?",
    a: "Não necessariamente. Verificamos os critérios do seu caso e indicamos o caminho mais rápido. Muitos casos resolvem pela via administrativa (Mini Defesa) — sem processo e sem advogado. Se não resolver, passamos para a Ação no Juizado Especial (também sem advogado). Só indicamos o processo judicial completo quando os casos anteriores não são suficientes ou quando o caso exige representação.",
  },
  {
    q: "A JusVez é um escritório de advocacia?",
    a: "Não. A JusVez é uma empresa de consultoria administrativa (CNAE 7020-4/00). Organizamos a documentação e orientamos sobre os critérios legais. Os serviços jurídicos são prestados exclusivamente por advogados independentes inscritos na OAB.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-black text-xl mb-4">
            {faqs.length}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
            Respostas para <br className="sm:hidden"/>
            <span className="text-emerald-500">suas dúvidas.</span>
          </h2>
          <p className="text-lg text-gray-500">Tire suas dúvidas e entenda como funciona nossa atuação.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-navy-900 shadow-2xl shadow-navy-900/20" 
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-6"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={`font-black text-lg sm:text-xl pr-4 transition-colors ${
                    isOpen ? "text-white" : "text-navy-900"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen ? "bg-emerald-500 rotate-180" : "bg-white text-navy-900 shadow-sm"
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`px-8 pb-8 text-base md:text-lg leading-relaxed ${
                    isOpen ? "text-white/80" : "text-gray-600"
                  }`}>
                    <div className="h-px w-full bg-white/10 mb-6"></div>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-black text-navy-900 mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Nossa equipe está pronta para verificar sua situação e indicar o melhor caminho — sem compromisso.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 text-navy-900 font-black text-lg shadow-[0_4px_20px_-4px_rgba(0,230,118,0.5)] transition-all hover:scale-105 hover:bg-emerald-400"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  );
}

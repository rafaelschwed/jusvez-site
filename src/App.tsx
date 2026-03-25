import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Numeros from "@/components/Numeros";
import DireitosPaciente from "@/components/DireitosPaciente";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function App() {
  return (
    <div className="font-sans antialiased text-navy-900 bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ComoFunciona />
        <Numeros />
        <DireitosPaciente />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

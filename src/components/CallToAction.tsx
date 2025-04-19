
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Comece Sua Transformação Hoje
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Invista em você e descubra como emagrecer de forma saudável e sustentável
        </p>
        <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg transition-all">
          Garantir Meu E-book Por R$ 97,00
        </Button>
        <p className="text-sm text-white/80 mt-4">
          Garantia de 7 dias ou seu dinheiro de volta
        </p>
      </div>
    </div>
  );
}

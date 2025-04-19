
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Emagreça 5kg em 30 Dias
            <span className="block text-green-600">Sem Passar Fome</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra como reeducar sua alimentação e transformar sua relação com a comida de forma saudável e sustentável
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all">
            Quero Começar Agora - R$ 97,00
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Cardápio Completo</h3>
            <p className="text-gray-600">Receitas práticas e deliciosas para todas as refeições do dia</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Reeducação Alimentar</h3>
            <p className="text-gray-600">Aprenda a fazer escolhas inteligentes sem restrições severas</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Suporte Contínuo</h3>
            <p className="text-gray-600">Dicas e estratégias para manter a motivação durante o processo</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

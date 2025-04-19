
import { Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Cardápio semanal completo e flexível",
    "Mais de 30 receitas práticas e saborosas",
    "Dicas de lanches inteligentes",
    "Orientações para reeducação alimentar",
    "Planejamento de refeições simplificado",
    "Estratégias para manter a motivação"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Você Vai Encontrar Neste E-book
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

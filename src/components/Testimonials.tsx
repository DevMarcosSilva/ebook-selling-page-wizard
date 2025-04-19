
import { Card, CardContent } from "@/components/ui/card";
import { Star, UserRound } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Com este e-book, consegui emagrecer 6kg em apenas 30 dias seguindo o plano alimentar. O melhor é que não precisei passar fome!",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "As receitas são deliciosas e muito práticas. Perdi peso de forma saudável e consegui manter. Recomendo muito!",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      text: "Excelente guia! As dicas de reeducação alimentar mudaram minha relação com a comida. Os resultados são incríveis.",
      rating: 5,
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <UserRound className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

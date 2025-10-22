import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import hidraliso1 from "@/assets/hidraliso-1.png";
import hidraliso2pack from "@/assets/hidraliso-2pack.png";
import hidraliso3pack from "@/assets/hidraliso-3pack-promo.png";
import hidraliso4pack from "@/assets/hidraliso-4pack.png";

const packages = [
  {
    id: 1,
    title: "Kit Iniciante",
    subtitle: "Experimente o Hidraliso",
    image: hidraliso1,
    units: "1 Unidade",
    price: "R$ 147,00",
    wasPrice: "R$ 197,00",
    discount: "25% OFF",
    features: ["250ml", "Uso diário", "Resultados em 7 dias"],
    popular: false,
  },
  {
    id: 2,
    title: "Kit Completo",
    subtitle: "Leve 3 e Pague 2",
    image: hidraliso2pack,
    units: "2 Unidades + 1 Grátis",
    price: "R$ 197,00",
    wasPrice: "R$ 441,00",
    discount: "55% OFF",
    features: ["3x 250ml", "Tratamento completo", "Frete Grátis"],
    popular: true,
  },
  {
    id: 3,
    title: "Kit Transformação",
    subtitle: "Leve 4 e Pague 3",
    image: hidraliso3pack,
    units: "3 Unidades + 1 Grátis",
    price: "R$ 247,00",
    wasPrice: "R$ 588,00",
    discount: "58% OFF",
    features: ["4x 250ml", "Máximo resultado", "Frete Grátis", "Brinde exclusivo"],
    popular: false,
  },
  {
    id: 4,
    title: "Kit Família",
    subtitle: "Leve 5 e Pague 4",
    image: hidraliso4pack,
    units: "4 Unidades + 1 Grátis",
    price: "R$ 297,00",
    wasPrice: "R$ 735,00",
    discount: "60% OFF",
    features: ["5x 250ml", "Melhor custo-benefício", "Frete Grátis", "2 Brindes"],
    popular: false,
  },
];

const Packages = () => {
  const handleBuyNow = () => {
    window.open("https://app.monetizze.com.br/r/AWW11504208", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="ofertas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Escolha Seu Kit Ideal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quanto mais você leva, mais você economiza! Aproveite nossas ofertas especiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-card rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-purple ${
                pkg.popular
                  ? "border-primary shadow-purple scale-105 lg:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-primary text-white px-4 py-1 text-sm font-bold rounded-bl-xl flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  MAIS VENDIDO
                </div>
              )}

              <div className="p-6">
                {/* Image */}
                <div className="relative mb-4 h-48 flex items-center justify-center">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-auto object-contain"
                  />
                  {pkg.discount && (
                    <div className="absolute -top-2 -left-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.discount}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {pkg.subtitle}
                  </p>
                  <div className="text-sm text-muted-foreground mb-2">
                    {pkg.units}
                  </div>
                  {pkg.wasPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      {pkg.wasPrice}
                    </div>
                  )}
                  <div className="text-3xl font-bold text-primary mb-4">
                    {pkg.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={handleBuyNow}
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent"
                      : "bg-primary hover:bg-primary/90"
                  } text-white rounded-xl h-12 font-semibold transition-all duration-300 hover:scale-105`}
                >
                  Comprar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            🔒 Compra 100% segura | 📦 Entrega para todo Brasil | ✅ Garantia de satisfação
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;

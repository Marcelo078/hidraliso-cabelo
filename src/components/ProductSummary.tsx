import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ProductSummary = () => {
  const handleCTA = () => {
    window.open("https://app.monetizze.com.br/r/AWW11504208", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl border-2 border-primary/20 p-8 md:p-12 shadow-purple">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resumo do Hidraliso
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo o que você precisa saber em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                O Que É
              </h3>
              <p className="text-muted-foreground mb-4">
                Hidraliso é um alisante de chuveiro revolucionário que
                proporciona cabelos lisos e disciplinados sem necessidade de
                chapinha ou químicas agressivas. Aplicado durante o banho, ele
                transforma seus fios de forma prática e eficaz.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Como Funciona
              </h3>
              <p className="text-muted-foreground mb-4">
                Com uma fórmula desenvolvida especialmente para alinhar e
                controlar os fios, o Hidraliso age durante o banho,
                proporcionando resultados visíveis desde as primeiras
                aplicações. Simples de usar, basta aplicar, massagear e
                enxaguar.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary text-center">
              Principais Benefícios
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Cabelos lisos e alinhados naturalmente",
                "Elimina o frizz e disciplina os fios",
                "Dispensa o uso diário de chapinha",
                "Fórmula que respeita seus cabelos",
                "Praticidade - aplique durante o banho",
                "Resultados visíveis em poucos dias",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Para Quem É Indicado
            </h3>
            <p className="text-muted-foreground">
              Ideal para quem busca praticidade sem abrir mão de cabelos
              impecáveis. Funciona em todos os tipos de cabelo - lisos,
              ondulados, cacheados e crespos. Perfeito para quem quer economizar
              tempo e dinheiro com salões, além de proteger os fios dos danos
              causados pelo calor excessivo de chapinhas.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleCTA}
              className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white text-lg px-12 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              🎁 Quero Aproveitar a Oferta Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Estoque limitado - Garanta o seu com desconto especial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;

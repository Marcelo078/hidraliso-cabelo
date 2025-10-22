import { Sparkles, Heart, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Cabelos Lisos e Disciplinados",
    description: "Transforme seus fios durante o banho. Sem necessidade de chapinha ou químicas agressivas.",
  },
  {
    icon: Heart,
    title: "Fórmula Desenvolvida",
    description: "Ingredientes selecionados que respeitam seus cabelos e proporcionam resultados visíveis.",
  },
  {
    icon: Shield,
    title: "Sem Frizz",
    description: "Diga adeus ao frizz! Cabelos controlados e sedosos por muito mais tempo.",
  },
  {
    icon: Zap,
    title: "Praticidade",
    description: "Aplique durante o banho e veja a transformação. Simples, rápido e eficaz.",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por Que Escolher o Hidraliso?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A solução completa para cabelos lisos e sem frizz que você sempre sonhou
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-purple group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

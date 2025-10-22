import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o Hidraliso?",
    answer:
      "O Hidraliso é um alisante de chuveiro que você aplica durante o banho. Sua fórmula desenvolvida age nos fios, promovendo alinhamento e disciplina sem necessidade de química agressiva ou chapinha. Basta aplicar, massagear e enxaguar conforme as instruções.",
  },
  {
    question: "Vale a pena investir no Hidraliso?",
    answer:
      "Com certeza! O Hidraliso oferece praticidade incomparável: você economiza tempo, dispensa visitas frequentes ao salão e evita danos causados por calor excessivo. Além disso, os kits promocionais oferecem excelente custo-benefício, especialmente o kit com 3 ou 4 unidades.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "A maioria das pessoas nota diferença já nas primeiras aplicações. Para resultados mais evidentes e duradouros, recomendamos uso contínuo por pelo menos 7 a 14 dias. Os cabelos ficam mais lisos, disciplinados e com menos frizz a cada uso.",
  },
  {
    question: "Funciona em todos os tipos de cabelo?",
    answer:
      "Sim! O Hidraliso foi desenvolvido para funcionar em diversos tipos de cabelo - lisos, ondulados, cacheados e crespos. A intensidade do efeito pode variar conforme a textura natural dos fios, mas todos os tipos se beneficiam do controle de frizz e da disciplina.",
  },
  {
    question: "Posso usar junto com outros produtos?",
    answer:
      "Sim, o Hidraliso pode ser usado junto com sua rotina capilar habitual. Para melhores resultados, recomendamos usar também o shampoo e o termo spray da linha Hidraliso, que potencializam os efeitos do alisamento.",
  },
  {
    question: "Quanto tempo dura cada frasco?",
    answer:
      "Cada frasco de 250ml dura aproximadamente 30 a 45 dias, dependendo do comprimento e volume dos seus cabelos. Por isso, os kits com múltiplas unidades são mais vantajosos - você garante o tratamento completo e ainda economiza.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim! Todos os produtos Hidraliso são acompanhados de garantia de satisfação. Se você não ficar satisfeita com os resultados, entre em contato com nossa equipe de atendimento conforme as políticas da loja.",
  },
  {
    question: "Como é feita a entrega?",
    answer:
      "Enviamos para todo o Brasil! Nos kits a partir de 2 unidades, o frete é grátis. O prazo de entrega varia conforme sua região, mas geralmente leva de 7 a 15 dias úteis. Você receberá o código de rastreamento para acompanhar seu pedido.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o Hidraliso
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

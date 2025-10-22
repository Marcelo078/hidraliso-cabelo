import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import ProductSummary from "@/components/ProductSummary";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hidraliso - Alisante de Chuveiro",
    description:
      "Alisante de chuveiro que transforma seus cabelos em fios lisos e disciplinados sem necessidade de chapinha. Resultados visíveis, sem química agressiva.",
    brand: {
      "@type": "Brand",
      name: "Hidraliso",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "147.00",
      highPrice: "297.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2847",
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Hero />
        <Benefits />
        <Packages />
        <ProductSummary />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;

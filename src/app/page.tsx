import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Escolha seu plano"
          description="Simples, transparente e sem fidelidade"
        >
          <Pricing />
        </Section>

       <Section
        id="testimonials"
        title="O que nossos clientes dizem"
        description="Veja o que quem já trabalhou com a gente tem a dizer."
      >
        <Testimonials />
      </Section>


        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;

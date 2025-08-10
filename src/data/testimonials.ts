import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: 'Carlos Andrade',
    role: 'Gerente de Operações na Hering',
    message: `${siteDetails.siteName} otimizou nossa comunicação via WhatsApp e reduziu significativamente o risco de bloqueio dos nossos números. Hoje, conseguimos manter campanhas ativas com muito mais estabilidade.`,
    avatar: '/images/testimonial-1.webp',
  },
  {
    name: 'Fernanda Lima',
    role: 'Coordenadora de Marketing na Centauro',
    message: `A automação de aquecimento do ${siteDetails.siteName} nos ajudou a aumentar a taxa de entrega das mensagens e manter nossos contatos ativos sem interrupções. É uma solução indispensável para grandes operações.`,
    avatar: '/images/testimonial-2.webp',
  },
  {
    name: 'Rafael Souza',
    role: 'Analista de Relacionamento na Unimed',
    message: `Com o ${siteDetails.siteName}, conseguimos manter a saúde dos números de atendimento e evitar bloqueios, garantindo um suporte rápido e eficaz para nossos clientes todos os dias.`,
    avatar: '/images/testimonial-3.webp',
  },
//   {
//     name: 'Mariana Torres',
//     role: 'Supervisora de Atendimento na Petz',
//     message: `O painel de monitoramento do ${siteDetails.siteName} nos dá controle total sobre o aquecimento e desempenho dos números. É fácil de usar e trouxe muito mais segurança para nossa operação.`,
//     avatar: '/images/testimonial-4.webp',
//   },
];

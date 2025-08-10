import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `É seguro usar o ${siteDetails.siteName}?`,
    answer: `Sim! Utilizamos encriptação de nível bancário e não armazenamos seus dados de login. Além disso, oferecemos monitoramento contínuo e intervenção automática caso detectemos risco de bloqueio.`,
  },
  {
    question: `Quanto tempo leva para “aquecer” um chip com segurança?`,
    answer: `Em geral, o processo leva de 7 a 14 dias, com interações graduais e variadas. Nossos clientes relatam estabilidade já a partir da primeira semana de uso — e você pode testar isso com nossa garantia de 7 dias grátis.`,
  },
  {
    question: `Posso re-utilizar ou revender os chips após o aquecimento?`,
    answer: `Sim, mas com cautela. É possível reaquecer um chip depois de um uso interno — e, sim, você pode revender aqueles que se mantêm saudáveis, mas aconselhamos sempre monitorar a reputação deles com nosso painel antes de transferir.`,
  },
  {
    question: `Quantas mensagens posso enviar por dia sem correr risco de bloqueio?`,
    answer: `Comece com 20–50 mensagens diárias por chip e aumente gradualmente conforme nossa recomendação no painel. Essa abordagem evita que o número seja marcado como suspeito.`,
  },
  {
    question: `E se meu número for bloqueado durante o uso?`,
    answer: `Você conta com suporte imediato dentro da plataforma para reverter bloqueios. A maioria dos casos é solucionada com nossa política de apelação rápida e templates de defesa prontos para envio.`,
  },
  {
    question: `Vocês oferecem serviços complementares, como consultoria ou equipe para gerenciar os chips?`,
    answer: `Claro! Além do app, oferecemos planos com consultoria estratégica e gerenciamento completo dos chips — ideal para equipes que desejam escalar sem complicação.`,
  },
];

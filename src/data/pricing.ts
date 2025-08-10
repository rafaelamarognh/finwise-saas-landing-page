import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Solo',
        price: 127,
        features: [
            '1 número em aquecimento automático',
            'Recebimento e envio automático de mensagens',
            'Painel de monitoramento em tempo real',
            'Simulação humanizada para evitar bloqueios',
            'Suporte prioritário via chat',
            '+ 2 chips para disparos',
            '+ 1 agente de IA (200 interações/mês)',
            '+ 2 atendentes no multiatendimento',
            '+ 1 fluxo de resposta automática',
            'Teste grátis por 7 dias',
        ],
    },
    {
        name: 'Profissional',
        price: 297,
        features: [
            '6 números em aquecimento simultâneo',
            'Recebimento e envio automático de mensagens',
            'Painel de monitoramento em tempo real',
            'Simulação humanizada para evitar bloqueios',
            'Suporte prioritário via chat e e-mail',
            '+ 2 chips para disparos',
            '+ 1 agente de IA (200 interações/mês)',
            '+ 2 atendentes no multiatendimento',
            '+ 1 fluxo de resposta automática',
            'Teste grátis por 7 dias',
        ],
    },
    {
        name: 'Enterprise',
        price: 697,
        features: [
            'Números ilimitados em aquecimento simultâneo',
            'Recebimento e envio automático de mensagens',
            'Painel de monitoramento avançado',
            'Simulação humanizada + respostas inteligentes',
            'Acompanhamento diário da saúde do número',
            'Suporte VIP 24/7',
            '+ 2 chips para disparos',
            '+ 1 agente de IA (200 interações/mês)',
            '+ 2 atendentes no multiatendimento',
            '+ 1 fluxo de resposta automática',
            'Teste grátis por 7 dias',
        ],
    },
]

import { IBenefit } from "@/types"

import selesCard from '../../public/images/vendas.png'
import sadDoll from '../../public/images/boneca-triste.png'
import factory from '../../public/images/fabrica.png'

export const benefits: IBenefit[] = [
   {
        title: "Venda em Escala e Sem Bloqueio",
        description: "Transforme qualquer número em uma máquina de vendas no WhatsApp. O Zapfy aquece automaticamente quantos chips você quiser, reduz drasticamente o risco de bloqueio e elimina o custo absurdo por chip aquecido.",
        bullets: [
            {
            title: "Venda Qualquer Produto em Alta Escala",
            description: "Aquecimento inteligente que simula padrões humanos, aumenta a confiança do algoritmo e mantém sua taxa de entrega no topo — sem pausas, sem interrupções, apenas vendas constantes.",
            image: selesCard
            },
            {
            title: "Pare de Pagar R$200 por Chip",
            description: "Chega de gastar com ‘chip aquecido’ de terceiros. Com o Zapfy, você aquece seus próprios chips de forma contínua, ilimitada e previsível — reduzindo seu custo próximo de zero.",
            image: sadDoll
            },
            {
            title: "Vire Sua Própria Fábrica e Até Revenda Chips",
            description: "Automatize o aquecimento de dezenas ou centenas de números em paralelo. Acompanhe status, horas aquecidas e prontidão em tempo real — e, se quiser, venda chips prontos para outros e transforme isso em uma nova fonte de renda.",
            image: factory
            }
        ],
        imageSrc: "/images/telaZapfy.png"
    },

    // {
    //     title: "Seamless Investing",
    //     description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
    //     bullets: [
    //         {
    //             title: "Micro-Investing",
    //             description: "Begin with as little as $1 and watch your money grow.",
    //             icon: <FiDollarSign size={26} />
    //         },
    //         {
    //             title: "Expert Portfolios",
    //             description: "Choose from investment strategies tailored to your risk tolerance.",
    //             icon: <FiBriefcase size={26} />
    //         },
    //         {
    //             title: "Real-Time Performance",
    //             description: "Track your investments with easy-to-understand metrics and visuals.",
    //             icon: <FiPieChart size={26} />
    //         }
    //     ],
    //     imageSrc: "/images/mockup-2.webp"
    // },
    // {
    //     title: "Bank-Grade Security",
    //     description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
    //     bullets: [
    //         {
    //             title: "Military-Grade Encryption",
    //             description: "Your information is safeguarded with the highest level of encryption.",
    //             icon: <FiLock size={26} />
    //         },
    //         {
    //             title: "Biometric Authentication",
    //             description: "Access your account securely with fingerprint or facial recognition.",
    //             icon: <FiUser size={26} />
    //         },
    //         {
    //             title: "Real-Time Fraud Detection",
    //             description: "Our system constantly monitors for suspicious activity to keep your money safe.",
    //             icon: <FiShield size={26} />
    //         }
    //     ],
    //     imageSrc: "/images/mockup-1.webp"
    // },
]
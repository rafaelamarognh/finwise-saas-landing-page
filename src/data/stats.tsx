import { BsFillLightningChargeFill, BsFillChatDotsFill, BsFillHeartFill } from "react-icons/bs";
import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "50.000+",
    icon: <BsFillLightningChargeFill size={34} className="text-green-500" />,
    description: "Horas de aquecimento realizadas com segurança para manter números ativos e livres de bloqueio."
  },
  {
    title: "3.200+",
    icon: <BsFillChatDotsFill size={34} className="text-green-500" />,
    description: "Chips ativos sendo monitorados em tempo real, garantindo máxima taxa de entrega."
  },
  {
    title: "98%",
    icon: <BsFillHeartFill size={34} className="text-green-500" />,
    description: "Taxa de sucesso na manutenção da saúde dos números, mesmo em operações de alto volume."
  }
];

import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Mantendo seus números de WhatsApp ativos e livres de bloqueio, com tecnologia de ponta.",
    quickLinks: [
        {
            text: "Recursos",
            url: "#features"
        },
        {
            text: "Planos",
            url: "#pricing"
        },
        {
            text: "Depoimentos",
            url: "#testimonials"
        }
    ],
    email: 'contatodatadrivenlab@gmail.com',
    telephone: '+55 (47) 9 9247-9009',
    socials: {
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}

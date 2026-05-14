import { assets } from "@/assets";
import { TrendUpIcon, UsersIcon } from "@phosphor-icons/react";

export const statics = [
  {
    id: 1,
    logo: <img src={assets.medal} alt="clients" className="w-11.5 h-11.5" />,
    number: 100,
    symbol: "%",
    description: "Qualidade",
  },
  {
    id: 2,
    logo: <UsersIcon size={46} weight="fill" color="#0088EB" />,
    number: 500,
    symbol: "+",
    description: "Clientes",
  },
  {
    id: 3,
    logo: <TrendUpIcon size={46} color="#0088EB" />,
    number: 1200,
    symbol: "+",
    description: "Projetos",
  },
];

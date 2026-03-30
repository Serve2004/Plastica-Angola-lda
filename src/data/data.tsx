import { assets } from "@/assets";
import {
  ChefHatIcon,
  EnvelopeIcon,
  FacebookLogoIcon,
  GearIcon,
  InstagramLogoIcon,
  LeafIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  RecycleIcon,
  TreeEvergreenIcon,
  TrendUpIcon,
  UsersIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

export const service = [
  {
    id: 1,
    logo: <ChefHatIcon size={32} color="#0088EB" />,
    name: "Utensílios de cozinha",
    description:
      "Produtos funcionais e duraveis para o dia a dia da sua cozinha.",
  },
  {
    id: 2,
    logo: <img src={assets.box} alt="box" className="w-8 h-8" />,
    name: "Embalagens Plasticas",
    description:
      "Soluções seguras e eficientes para acondicionamento e transporte.",
  },
  {
    id: 3,
    logo: <img src={assets.eco} alt="box" className="w-8 h-8" />,
    name: "Soluções Industriais",
    description:
      "Peças de componentes para os mais diversos setores indutriais.",
  },
  {
    id: 4,
    logo: <GearIcon size={32} color="#0088EB" />,
    name: "Produção Personalizada",
    description: "Desenvolvemos produtos sob medida para as suas necessdades.",
  },
];

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
    description: "clientes",
  },
  {
    id: 3,
    logo: <TrendUpIcon size={46} color="#0088EB" />,
    number: 1200,
    symbol: "+",
    description: "Projetos",
  },
];

export const products = [
  {
    id: 1,
    logo: <ChefHatIcon size={50} color="#0088EB" />,
    name: "Utensílios de cozinha",
    image: assets.utencilios,
    products: ["Tigelas", "Tabuleiros", "Escorredores", "Recipientes"],
  },
  {
    id: 2,
    logo: <img src={assets.box} alt="box" className="w-12.5 h-12.5" />,
    name: "Embalagens",
    image: assets.embalagem,
    products: [
      "Caixa alimentares",
      "Sacos plásticos",
      "Filmes stretch",
      "Embalagens personalizadas",
    ],
  },
  {
    id: 3,
    logo: <img src={assets.cubos} alt="box" className="w-12.5 h-12.5" />,
    name: "Brinquedos",
    image: assets.toy,
    products: [
      "Brinquedos educativos",
      "Jogos de encaixe",
      "Bonecos e figuras",
      "Brinquedos de praia",
    ],
  },
  {
    id: 4,
    logo: <img src={assets.eco} alt="box" className="w-12.5 h-12.5" />,
    name: "Soluções Industriais",
    image: assets.tubos,
    products: ["Tubos e conexões", "Paletes", "Contentores", "Peças Técnicas"],
  },
  {
    id: 5,
    logo: <img src={assets.chave} alt="box" className="w-12.5 h-12.5" />,
    name: "Produção Personalizada",
    image: assets.material,
    products: [
      "Modelos exclusivos",
      "Protótipos",
      "Peças sob medida",
      "Projetos especiais",
    ],
  },
];

export const about = [
  {
    id: 1,
    name: "Produtos de alta qualidade",
    description:
      "Materiais selecionados e processos controlados para garantir excelência.",
  },
  {
    id: 2,
    name: "Atendimento personalizado",
    description:
      "Cada cliente recebe atenção exclusiva para soluções à medida.",
  },
  {
    id: 3,
    name: "Entregas rápidas e seguras",
    description: "Logísticas eficiente para cumprir prazos com seguraça.",
  },
  {
    id: 4,
    name: "Equipa experiente e dedicada",
    description: "Profissionais qualificados com anos de experiência no setor.",
  },
];

export const sustainability = [
  {
    id: 1,
    logo: <RecycleIcon size={32} color="#1BC69A" />,
    name: "Reciclagem",
  },
  {
    id: 2,
    logo: <LeafIcon size={32} color="#1BC69A" />,
    name: "Eco-friendly",
  },
  {
    id: 3,
    logo: <TreeEvergreenIcon size={32} color="#1BC69A" />,
    name: "Futuro Verde",
  },
];

export const contact = [
  {
    id: 1,
    logo: <PhoneIcon size={32} color="#25D366" />,
    name: "+244 999 999 999",
  },
  {
    id: 2,
    logo: <EnvelopeIcon size={32} color="#25D366" />,
    name: "plastangola@gmail.com",
  },
  {
    id: 3,
    logo: <MapPinIcon size={32} color="#25D366" />,
    name: "Luanda, Angola",
  },
  {
    id: 4,
    logo: <WhatsappLogoIcon size={32} color="#25D366" />,
    name: "WhatsApp",
    fill: true,
  },
];

export const media = [
  {
    id: 1,
    logo: <FacebookLogoIcon size={32} />,
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    logo: <InstagramLogoIcon size={32} />,
    link: "https://www.instagram.com",
  },
  {
    id: 3,
    logo: <LinkedinLogoIcon size={32} />,
    link: "https://www.linkedin.com",
  },
];

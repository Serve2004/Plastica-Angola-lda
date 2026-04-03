import { assets } from "@/assets";
import {
  ChefHatIcon,
  EnvelopeIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  TrendUpIcon,
  UsersIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

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

export const carouselImages = [
  { image: assets.carousel1, name: "Carousel 1" },
  { image: assets.carousel2, name: "Carousel 2" },
  { image: assets.carousel3, name: "Carousel 3" },
  { image: assets.carousel4, name: "Carousel 4" },
  { image: assets.carousel5, name: "Carousel 5" },
  { image: assets.carousel6, name: "Carousel 6" },
  { image: assets.carousel7, name: "Carousel 7" },
  { image: assets.carousel8, name: "Carousel 8" },
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

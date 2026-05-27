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

export const slides = [
  { image: assets.slide1, name: "Slide 1" },
  { image: assets.slide2, name: "Slide 2" },
  { image: assets.slide3, name: "Slide 3" },
  { image: assets.slide4, name: "Slide 4" },
  { image: assets.slide5, name: "Slide 5" },
];

export const slidesMobile = [
  { image: assets.slideMobile1, name: "SlideMobile 1" },
  { image: assets.slideMobile2, name: "SlideMobile 2" },
  { image: assets.slideMobile3, name: "SlideMobile 3" },
  { image: assets.slideMobile4, name: "SlideMobile 4" },
  { image: assets.slideMobile5, name: "SlideMobile 5" },
];
export const slidesTablet = [
  { image: assets.slideTablet1, name: "SlideTablet 1" },
  { image: assets.slideTablet2, name: "SlideTablet 2" },
  { image: assets.slideTablet3, name: "SlideTablet 3" },
  { image: assets.slideTablet4, name: "SlideTablet 4" },
  { image: assets.slideTablet5, name: "SlideTablet 5" },
];

export const products = [
  {
    id: 1,
    slug: "utensilios-de-cozinha",
    banner: assets.productDom35,
    name: "Utensílios de cozinha",
  },
  {
    id: 2,
    slug: "enxoval",
    banner: assets.productDom4,
    name: "Enxoval",
  },
  {
    id: 3,
    slug: "embalagens",
    banner: assets.productemb,
    name: "Embalagens",
  },
  {
    id: 4,
    slug: "brinquedos",
    banner: assets.productbr,
    name: "Brinquedos",
  },
  {
    id: 5,
    slug: "solucoes-industriais",
    banner: assets.productDom26,
    name: "Soluções Industriais",
  },
  {
    id: 6,
    slug: "produtos-domesticos",
    banner: assets.productDom34,
    name: "Produtos Domésticos",
  },
];

export const seeMoreProducts = [
  {
    id: 1,
    slug: "utensilios-de-cozinha",
    name: "Utensílios de cozinha",
    logo: <ChefHatIcon size={48} color="#FF6400" />,
    label:
      "Soluções práticas e duráveis para o dia a dia na cozinha, produzidas com materiais de alta qualidade e design ergonómico.",
    products: [
      {
        id: 1,
        img: assets.productcoz,
      },
      {
        id: 2,
        img: assets.productDom35,
      },
      {
        id: 3,
        img: assets.productDom36,
      },
    ],
  },
  {
    id: 2,
    slug: "embalagens",
    name: "Embalagens",
    logo: <img src={assets.box} alt="box" className="w-10 h-10" />,
    label:
      "Embalagens plásticas para diferentes indústrias, com foco em segurança, durabilidade e personalização conforme a necessidade do cliente.",
    products: [
      {
        id: 1,
        img: assets.productemb,
      },
    ],
  },
  {
    id: 3,
    slug: "brinquedos",
    logo: <img src={assets.cubos} alt="box" className="w-10 h-10" />,
    name: "Brinquedos",
    label:
      "Brinquedos seguros, coloridos e divertidos, produzidos com materiais não tóxicos e testados para a diversão e aprendizagem das crianças.",
    products: [
      {
        id: 1,
        img: assets.productbr,
      },
    ],
  },
  {
    id: 4,
    slug: "solucoes-industriais",
    logo: <img src={assets.eco} alt="box" className="w-10 h-10" />,
    name: "Soluções Industriais",
    label:
      "Produtos plásticos técnicos e de alta performance para o setor industrial, com resistência e precisão dimensional.",
    products: [
      {
        id: 1,
        img: assets.productDom26,
      },
      {
        id: 2,
        img: assets.productDom27,
      },
      {
        id: 3,
        img: assets.productDom28,
      },
      {
        id: 4,
        img: assets.productDom29,
      },
    ],
  },
  {
    id: 5,
    slug: "produtos-domesticos",
    logo: <img src={assets.casa} alt="box" className="w-10 h-10" />,
    name: "Produtos Domésticos",
    label:
      "Artigos plásticos para o lar, práticos e duráveis, que facilitam a organização, limpeza e o dia a dia em casa.",
    products: [
      {
        id: 1,
        img: assets.productDom1,
      },
      {
        id: 2,
        img: assets.productDom2,
      },
      {
        id: 3,
        img: assets.productDom3,
      },
      {
        id: 4,
        img: assets.productDom7,
      },
      {
        id: 5,
        img: assets.productDom8,
      },
      {
        id: 6,
        img: assets.productDom9,
      },
      {
        id: 7,
        img: assets.productDom10,
      },
      {
        id: 8,
        img: assets.productDom11,
      },
      {
        id: 9,
        img: assets.productDom12,
      },
      {
        id: 10,
        img: assets.productDom13,
      },
      {
        id: 11,
        img: assets.productDom14,
      },
      {
        id: 12,
        img: assets.productDom15,
      },
      {
        id: 13,
        img: assets.productDom16,
      },
      {
        id: 14,
        img: assets.productDom17,
      },
      {
        id: 15,
        img: assets.productDom18,
      },
      {
        id: 16,
        img: assets.productDom19,
      },
      {
        id: 17,
        img: assets.productDom20,
      },
      {
        id: 18,
        img: assets.productDom21,
      },
      {
        id: 19,
        img: assets.productDom22,
      },
      {
        id: 20,
        img: assets.productDom23,
      },
      {
        id: 21,

        img: assets.productDom24,
      },
      {
        id: 22,
        img: assets.productDom25,
      },
      {
        id: 23,
        img: assets.productDom26,
      },
      {
        id: 24,
        img: assets.productDom27,
      },
      {
        id: 25,
        img: assets.productDom28,
      },
      {
        id: 26,
        img: assets.productDom29,
      },
      {
        id: 27,
        img: assets.productDom31,
      },
      {
        id: 28,
        img: assets.productDom32,
      },
      {
        id: 29,
        img: assets.productDom33,
      },
      {
        id: 30,
        img: assets.productDom34,
      },
    ],
  },
  {
    id: 5,
    slug: "enxoval",
    logo: <img src={assets.enxoval} alt="box" className="w-10 h-10" />,
    name: "Enxoval",
    label:
      "Produtos plásticos seguros e práticos para o conforto e bem-estar do seu bebé, com materiais atóxicos e design pensado para os pequenos.",
    products: [
      {
        id: 1,
        img: assets.productDom5,
      },
      {
        id: 2,
        img: assets.productDom6,
      },
      {
        id: 3,
        img: assets.productDom30,
      },
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

export const links = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre Nós" },
  { id: "products", label: "Produtos" },
  { id: "partners", label: "Parceiros" },
  { id: "contact", label: "Contactos" },
];

export const contact = [
  {
    id: 1,
    logo: <WhatsappLogoIcon size={32} />,
    color: "#25D366",
    name: "WhatsApp",
    label: "Fale conosco via WhatsApp",
    description: "+244 923 456 789",
    fill: true,
  },
  {
    id: 2,
    logo: <EnvelopeIcon size={32} />,
    color: "#0088EB",
    name: "Email",
    label: "Envie-nos um email",
    description: "geral@plasticaangola.ao",
  },
  {
    id: 3,
    logo: <PhoneIcon size={32} />,
    color: "#8A38F5",
    name: "Telefone",
    label: "Ligue para nós",
    description: "+244 222 123 456",
  },
  {
    id: 4,
    logo: <MapPinIcon size={32} />,
    color: "#EF3E3E",
    name: "Localização",
    label: "Visite-nos",
    description: "Luanda, Angola",
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

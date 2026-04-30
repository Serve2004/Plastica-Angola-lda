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
    slug: "utencilios-de-cozinha",
    name: "Utensílios de cozinha",
    image: assets.utencilios,
    products: ["Tigelas", "Tabuleiros", "Escorredores", "Recipientes"],
  },
  {
    id: 2,
    slug: "embalagens",
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
    slug: "brinquedos",
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
    slug: "solucoes-industriais",
    name: "Soluções Industriais",
    image: assets.tubos,
    products: ["Tubos e conexões", "Paletes", "Contentores", "Peças Técnicas"],
  },
  {
    id: 5,
    slug: "producao-personalizada",
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

export const seeMoreProducts = [
  {
    id: 1,
    slug: "utencilios-de-cozinha",
    name: "Utensílios de cozinha",
    logo: <ChefHatIcon size={48} color="#FF6400" />,
    label:
      "Soluções práticas e duráveis para o dia a dia na cozinha, produzidas com materiais de alta qualidade e design ergonómico.",
    products: [
      {
        id: 1,
        name: "Tigela",
        label:
          "Diversos tamanhos e cores, ideais para servir e armazenar alimentos.",
        img: assets.tigela,
      },
      {
        id: 2,
        name: "Recipiente",
        label: "Herméticos e empilháveis para conservação de alimentos.",
        img: assets.recipiente,
      },
      {
        id: 3,
        name: "Copos",
        label: "Copos reutilizáveis e descartáveis para festas e eventos.",
        img: assets.copos,
      },
      {
        id: 4,
        name: "Baú Transparente",
        label: "Prático e resistente para armazenar com seguraça.",
        img: assets.bauTransparente,
      },
      {
        id: 5,
        name: "Cesto",
        label: "Leve e resistente para organização e transporte.",
        img: assets.cesto,
      },
      {
        id: 6,
        name: "Tigela",
        label: "Ideal para preparar, servir e armazenar alimentos.",
        img: assets.tigela1,
      },
    ],
  },
  {
    id: 2,
    slug: "embalagens",
    name: "Embalagens",
    logo: <img src={assets.box} alt="box" className="w-15 h-15" />,
    label:
      "Embalagens plásticas para diferentes indústrias, com foco em segurança, durabilidade e personalização conforme a necessidade do cliente.",
    products: [
      {
        id: 1,
        name: "Caixa alimentar",
        label: "Certificadas para contacto com alimentos, em vários formatos.",
        img: assets.caixaAlimentar,
      },
      // {
      //   id: 2,
      //   name: "Saco plástico",
      //   label: "Saco plástico para resíduos",
      //   img: assets.saco,
      // },
      // {
      //   id: 3,
      //   name: "Filme stretch",
      //   label: "Filme stretch para embalagem",
      //   img: assets.filme,
      // },
      // {
      //   id: 4,
      //   name: "Embalagem personalizada",
      //   label: "Embalagem personalizada conforme a necessidade do cliente",
      //   img: assets.embalagemPersonalizada,
      // },
    ],
  },
  {
    id: 3,
    slug: "brinquedos",
    logo: <img src={assets.cubos} alt="box" className="w-15 h-15" />,
    name: "Brinquedos",
    label:
      "Brinquedos seguros, coloridos e divertidos, produzidos com materiais não tóxicos e testados para a diversão e apredizagem das crianças.",
    products: [
      {
        id: 1,
        name: "Brinquedos educativos",
        label: "Estimulam o raciocínio e a coordenação motora",
        img: assets.toy,
      },
      {
        id: 2,
        name: "Jogos de encaixe",
        label: "Peças coloridas que incentivam a criatividade.",
        img: assets.toy,
      },
      {
        id: 3,
        name: "Bonecos e figuras",
        label: "Personagens variados em plástico resistente.",
        img: assets.toy,
      },
      {
        id: 4,
        name: "Brinquedos de praia",
        label: "Pás, baldes e formas para brincar ao ar livre.",
        img: assets.toy,
      },
    ],
  },
  {
    id: 4,
    slug: "solucoes-industriais",
    logo: <img src={assets.eco} alt="box" className="w-15 h-15" />,
    name: "Soluções Industriais",
    label:
      "Produtos plásticos técnicos e de alta performance para o setor industrial, com resistência e precisão dimensional.",
    products: [
      {
        id: 1,
        name: "Tubos e conexões",
        label: "Para sistemas hidráulicos e industriais.",
        img: assets.tuboConexao,
      },
      {
        id: 2,
        name: "Paletes",
        label: "Resistentes, leves e reutilizáveis para logística.",
        img: assets.tubos,
      },
      {
        id: 3,
        name: "Contentores",
        label: "Armazenamento e transporte em grande escala.",
        img: assets.tubos,
      },
      {
        id: 4,
        name: "Peças técnicas",
        label: "Componentes específicos para linhas de produção.",
        img: assets.tubos,
      },
    ],
  },
  {
    id: 5,
    slug: "producao-personalizada",
    logo: <img src={assets.chave} alt="box" className="w-15 h-15" />,
    name: "Produção Personalizada",
    label:
      "Desenvolvemos projetos exclusivos do conceito à produção, com moldes dedicados e acompanhamento em todas as etapas.",
    products: [
      {
        id: 1,
        name: "Caixa alimentar",
        label: "Certificadas para contacto com alimentos, em vários formatos.",
        img: assets.caixaAlimentar,
      },
      {
        id: 2,
        name: "Recipiente",
        label: "Herméticos e empilháveis para conservação de alimentos.",
        img: assets.recipiente,
      },
      {
        id: 3,
        name: "Copos",
        label: "Copos reutilizáveis e descartáveis para festas e eventos.",
        img: assets.copos,
      },
      {
        id: 4,
        name: "Baú Transparente",
        label: "Prático e resistente para armazenar com seguraça.",
        img: assets.bauTransparente,
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
  { id: "contact", label: "Contatos" },
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
    name: "E-mail",
    label: "Envie-nos e-mail",
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

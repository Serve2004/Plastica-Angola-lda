import { assets } from "@/assets";
import { ChefHatIcon } from "@phosphor-icons/react";

export const products = [
  {
    id: 1,
    slug: "utensilios-de-cozinha",
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
      "Caixas alimentares",
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
    slug: "produtos-domesticos",
    name: "Produtos Domésticos",
    image: assets.material,
    products: [
      "Baldes e bacias",
      "Cadeiras",
      "Baldes de lixo",
      "Artigos de limpeza",
    ],
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
        label: "Prático e resistente para armazenar com segurança.",
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
      "Brinquedos seguros, coloridos e divertidos, produzidos com materiais não tóxicos e testados para a diversão e aprendizagem das crianças.",
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
    slug: "produtos-domesticos",
    logo: <img src={assets.chave} alt="box" className="w-15 h-15" />,
    name: "Produtos Domésticos",
    label:
      "Artigos plásticos para o lar, práticos e duráveis, que facilitam a organização, limpeza e o dia a dia em casa.",
    products: [
      {
        id: 1,
        name: "Baldes",
        label: "Resistentes e em vários tamanhos para uso doméstico.",
        img: assets.baldes,
      },
      {
        id: 2,
        name: "Bacias",
        label: "Resistentes e em vários tamanhos para uso doméstico.",
        img: assets.bacia,
      },
      {
        id: 3,
        name: "Caixa de arrumação",
        label: "Empilháveis para organizar qualquer divisão da casa.",
        img: assets.caixaArrumacao,
      },
      {
        id: 4,
        name: "Artigos de limpeza",
        label: "Apanhadores, vassouras e acessórios práticos.",
        img: assets.artigosLimpeza,
      },
      {
        id: 5,
        name: "Baldes de lixo",
        label:
          "Resistentes e práticos, em vários tamanhos para casa e escritório.",
        img: assets.baldesLixo,
      },
      {
        id: 6,
        name: "Cadeiras",
        label: "Leves, resistentes e confortáveis para uso interior e exterior.",
        img: assets.cadeiras,
      },
    ],
  },
];

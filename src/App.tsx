// import { Header } from "./components/header";

import {
  CaretRightIcon,
  CheckCircleIcon,
  ChefHatIcon,
  GearIcon,
  LeafIcon,
  RecycleIcon,
  TreeEvergreenIcon,
  TrendUpIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { assets } from "./assets";
import { Button } from "./components/ui/button";
import { Counter } from "./components/ui/counter/counter";

export function App() {
  const service = [
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
      description:
        "Desenvolvemos produtos sob medida para as suas necessdades.",
    },
  ];
  const statics = [
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
  const products = [
    {
      id: 1,
      logo: <ChefHatIcon size={50} color="#0088EB" />,
      name: "Utensílios de cozinha",
      products: ["Tigelas", "Tabuleiros", "Escorredores", "Recipientes"],
    },
    {
      id: 2,
      logo: <img src={assets.box} alt="box" className="w-12.5 h-12.5" />,
      name: "Embalagens",
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
      products: [
        "Tubos e conexões",
        "Paletes",
        "Contentores",
        "Peças Técnicas",
      ],
    },
    {
      id: 5,
      logo: <img src={assets.chave} alt="box" className="w-12.5 h-12.5" />,
      name: "Produção Personalizada",
      products: [
        "Caixa alimentares",
        "Sacos plásticos",
        "Filmes stretch",
        "Embalagens personalizadas",
      ],
    },
  ];
  const about = [
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
      description:
        "Profissionais qualificados com anos de experiência no setor.",
    },
  ];
  const sustainability = [
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
  return (
    <div>
      <section className="px-33.5 py-10 bg-[#D9D9D9] h-dvh" id="home">
        <header className="flex items-center justify-between">
          <h1 className="text-4xl poppins-extrabold tracking-tight bg-linear-to-r from-[#1BC69A] to-[#FF6400] bg-clip-text text-transparent">
            Plastica <span className="text-[13px]">Angola LDA</span>
          </h1>
          <nav>
            <ul className="nav-list flex gap-4">
              <li>
                <a href="#home">início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#service">Serviços</a>
              </li>
              <li>
                <a href="#products">Produtos</a>
              </li>
              <li>
                <a href="#sustainability">Sustentabilidade</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
          <Button className="p-4.5 rounded-[35px] bg-[#FF6400] text-lg">
            <img
              src={assets.social}
              alt="Social Media"
              className="w-7.5 h-7.5"
            />{" "}
            Fale conosco
          </Button>
        </header>
        <div className="flex flex-col items-center justify-center gap-6 mt-27 h-100">
          <h1 className="poppins-bold text-5xl text-center leading-tight">
            Soluções em plástico que se adaptam à sua realidade
          </h1>
          <p className="poppins-medium text-2xl w-184.75 text-center">
            Produzimos qualidade, inovação e versatilidade para empresas e
            particulares.
          </p>

          <Button className="p-4.5 rounded-[35px] bg-[#FF6400] mt-15 text-lg">
            Solicitar orçamento <CaretRightIcon size={32} />
          </Button>
        </div>
      </section>
      <section
        className="px-33.5 py-10 h-dvh flex flex-col items-center justify-center "
        id="service"
      >
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Os Nossos Serviços
        </h1>
        <p className="poppins-medium text-2xl w-184.75 text-center text-[#777777]">
          Oferecemos uma gama de soluções em plático para todos os segmentos.
        </p>
        <div className="flex items-center  gap-6 mt-10">
          {service.map((item) => (
            <div
              className="flex flex-col items-center gap-1 bg-[#0088EB]/10 p-6 mt-10 rounded-[8px] 
  shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
  hover:-translate-y-1 
  transition-all duration-300"
              key={item.id}
            >
              <div className="p-0.5 rounded-[8px] bg-[#0088EB]/20">
                {item.logo}
              </div>
              <h2 className="poppins-bold text-[18px] text-center">
                {item.name}
              </h2>
              <p className="poppins-medium text-[13px] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-33.5 py-10 h-dvh flex flex-col items-start justify-center "
        id="about"
      >
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Sobre a Plástica Angola
        </h1>
        <p className="poppins-medium text-xl w-184.75 text-[#777777] mt-5">
          Somos uma empresa especializa na produção e fornecimento de soluções
          em plástico para diferentes áreas do mercado. Atuamos com foco na
          qualidade, inovação e compromisso com os nossos clientes.
        </p>
        <p className="poppins-medium text-xl w-184.75 text-[#777777] mt-5">
          Trabalhamos desde utensílios domésticos até soluções indudtriais,
          sempre com atenção aos detalhes e às necessidades específicas de cada
          projeto.
        </p>
        <div className="flex items-center gap-10 ml-25">
          {statics.map((item) => (
            <div className="flex flex-col items-center gap-1 p-6" key={item.id}>
              <div className="p-0.5">{item.logo}</div>
              <h2 className="poppins-bold text-[32px]  w-20 text-[#0088EB] text-center">
                <Counter
                  end={item.number}
                />
                {item.symbol}
              </h2>
              <p className="poppins-medium text-[13px] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-33.5 py-10 h-dvh flex flex-col items-center justify-center "
        id="products"
      >
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Os Nossos Produtos
        </h1>
        <p className="poppins-medium text-2xl w-184.75 text-center text-[#777777]">
          Conheça as nossas categorias de produtos, desenvolvidos com qualidade
          e inovação.
        </p>
        <div className="flex items-center  gap-6 mt-10">
          {products.map((item) => (
            <div
              className="flex flex-col items-center rounded-2xl 
  shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
  hover:-translate-y-1 
  transition-all duration-300 mt-10 h-72.5 w-50"
              key={item.id}
            >
              <div className="p-0.5 bg-[#0088EB]/20 rounded-t-[8px] h-32 w-50 flex items-center justify-center">
                {item.logo}
              </div>
              <div>
                <h2 className="poppins-semibold text-[15px]">{item.name}</h2>
                <div className="flex flex-col items-start ">
                  {item.products.map((product, index) => (
                    <p
                      key={index}
                      className="poppins-medium text-[13px] text-[#777777]"
                    >
                      <span className="poppins-bold text-[15px] text-[#1BC69A]">
                        •
                      </span>{" "}
                      {product}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-33.5 py-10 h-dvh flex flex-col items-center justify-center "
        id="f"
      >
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Porquê Escolher a Plástica Angola?
        </h1>
        <p className="poppins-medium text-2xl w-184.75 text-center text-[#777777]">
          Os nossos diferenciais fazem de nós a melhor escolha para as suas
          soluções em plástico.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-20">
          {about.map((item) => (
            <div
              className="rounded-[20px] p-6 
  shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
  hover:-translate-y-1 
  transition-all duration-300
  w-125 border-[#C3BBBBE5] border
  flex items-start gap-1
  "
              key={item.id}
            >
              <CheckCircleIcon size={32} color="#1BC69A" />
              <div>
                <h2 className="poppins-semibold text-xl flex">{item.name}</h2>
                <p className="poppins-medium text-[14px] text-[#777777]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-33.5 py-10 h-dvh flex flex-col items-center justify-center "
        id="sustainability"
      >
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Sustentabilidade
        </h1>
        <p className="poppins-medium w-257 text-2xl  text-center text-[#777777] mt-5">
          Estamos comprometidos com práticas sustentáveis, promovendo o uso
          resnposável de materiais e incentivando processos de reciclagem.
          Trabalhamos para reduzir o impacto ambiental e contribuir para um
          futuro melhor.
        </p>

        <div className="flex justify-center items-center gap-20 mt-15">
          {sustainability.map((item) => (
            <div className="flex flex-col items-center gap-1" key={item.id}>
              <div className="p-5 rounded-full bg-[#1BC69A]/30">
                {item.logo}
              </div>
              <p className="poppins-medium text-[13px] text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-33.5 py-10 h-full flex flex-col items-center justify-center "
        id="contact"
      >
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Precisa de soluções em plásticos?
        </h1>
        <p className="poppins-medium text-2xl w-184.75 text-center text-[#777777]">
          Entre em contacto conosco e descubra como podemos ajudar o seu
          negócio.
        </p>
        <Button className="px-10 py-5 rounded-[35px] bg-[#FF6400] text-lg mt-5">
          <img src={assets.social} alt="Social Media" className="w-7.5 h-7.5" />{" "}
          Fale conosco
        </Button>
      </section>
      <div className="flex  gap-4 bg-[#343434] h-80 w-full mt-10">
        <h1 className="text-4xl poppins-extrabold tracking-tight bg-linear-to-r from-[#1BC69A] to-[#FF6400] bg-clip-text text-transparent">
          Plastica <span className="text-[13px]">Angola LDA</span>
        </h1>

        <div className="flex flex-col items-center justify-end gap-2 flex-1">
          <p className="poppins-medium text-sm text-[#D9D9D9]">
            © 2024 Plástica Angola. Todos os direitos reservados.
          </p>
          <p className="poppins-medium text-sm text-[#D9D9D9]">
            Desenvolvido por Seve.io
          </p>
        </div>
      </div>
    </div>
  );
}

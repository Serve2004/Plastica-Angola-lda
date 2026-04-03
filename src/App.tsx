import { CaretRightIcon } from "@phosphor-icons/react";
import { assets } from "./assets";
import { Button } from "./components/ui/button";
import { Counter } from "./components/ui/counter/counter";
import { contact, media, products, statics } from "./data/data";
import { Header } from "./components/header";
import { Product } from "./components/product";
import { Carousel } from "./components/carrosel";

export function App() {
  return (
    <div>
      <Header />
      <section className="px-13.75 pt-50 h-dvh hero overflow-hidden" id="home">
        <div className="flex flex-col gap-6 h-100 text-white  border border-red-500">
          <h1 className="poppins-bold text-5xl flex flex-col leading-tight">
            Transformamos Ideias em{" "}
            <span className="text-[#FF6400]">Produtos Plásticos</span>
          </h1>
          <p className="poppins-medium text-lg flex flex-col text-[#EFEFEF]">
            <span>
              Há mais de uma década a fornecer soluções inovadoras em plásticos
              para Angola.
            </span>
            <span>
              Qualidade excepcional, tecnologia avançada e compromisso com a
              excelência.
            </span>
          </p>
          <div className="flex items-center gap-6 mt-5">
            <Button className=" w-63.75 h-13.25 px-11.25 py-2.5 rounded-[12px] bg-[#FF6400] hover:bg-[#CD5304]  text-lg">
              Solicitar orçamento <CaretRightIcon size={32} />
            </Button>
            <Button className="w-63.75 h-13.25 px-11.25 py-2.5 rounded-[12px] bg-transparent hover:bg-[#0089eb49] border border-white  text-lg">
              Ver Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION ABOUT */}
      <section
        className="px-13.75 pt-20 h-dvh flex items-center justify-center gap-2 mt-10  overflow-hidden"
        id="about"
      >
        <div className="flex  items-start border border-red-500">
          <div>
            <h1 className="poppins-bold text-4xl text-[#343434]">
              Excelência em Soluções Plásticas para Angola
            </h1>
            <p className="poppins-medium text-[13px] text-[#777777] mt-2">
              A PLASTICA ANGOLA é uma empresa angolana líder no fornecimento de
              produtos e soluções em plásticos. Com mais de 15 anos de
              experiência, especializamo-nos em oferecer uma ampla gama de
              artigos plásticos de alta qualidade.
            </p>
            <p className="poppins-medium text-[13px] text-[#777777] mt-5">
              Trabalhamos com os melhores materiais e tecnologias para garantir
              produtos duráveis, funcionais e esteticamente superiores,
              atendendo às necessidades dos setores residencial, comercial e
              industrial.
            </p>
            <div className="flex items-center gap-10 ">
              {statics.map((item) => (
                <div
                  className="flex flex-col items-center gap-1 p-6"
                  key={item.id}
                >
                  <div className="p-0.5">{item.logo}</div>
                  <h2 className="poppins-bold text-[20px]  w-20 text-[#0088EB] text-center">
                    <Counter end={item.number} />
                    {item.symbol}
                  </h2>
                  <p className="poppins-medium text-[12px] text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img src={assets.about} alt="Sobre a Plástica Angola" />
        </div>
      </section>

      {/* SECTION PRODUCTS */}
      <section
        className="px-13.75 pt-20 flex items-center justify-center  h-dvh  mt-10 overflow-hidden"
        id="products"
      >
        <div className="flex flex-col items-center justify-center border border-red-500">
          <h1 className="poppins-bold text-5xl text-center text-[#343434] ">
            Soluções Completas em Plásticos
          </h1>
          <p className="poppins-medium text-lg w-220 text-center text-[#777777]">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="flex items-center  gap-2 mt-10">
            {products.map((item) => (
              <Product
                id={item.id}
                logo={item.logo}
                name={item.name}
                image={item.image}
                products={item.products}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION PARTNERS */}
      <section
        className="px-13.75 pt-20 flex items-center justify-center  h-[70vh] overflow-hidden"
        id="partners"
      >
        <div className="flex flex-col items-center justify-center border border-red-500">
          <h1 className="poppins-bold text-5xl text-center text-[#343434] ">
            Trabalhamos com os Melhores
          </h1>
          <p className="poppins-medium text-lg w-220 text-center text-[#777777]">
            Orgulhamo-nos de colaborar com empresas líderes em Angola,
            fornecendo soluções plásticas de excelência
          </p>
          <Carousel />
        </div>
      </section>
      <section className="px-13.75  h-118.5 flex flex-col items-center justify-center hero2">
        <h1 className="poppins-bold text-5xl text-center text-[#343434]">
          Quer ser nosso parceiro?
        </h1>
        <p className="poppins-medium text-lg w-184.75 text-center text-[#777777]">
          Estamos sempre à procura de novas parcerias estratégicas para crescer
          juntos e oferecer as melhores soluções ao mercado angolano.
        </p>
        <Button className="px-10 py-5 rounded-[35px] bg-[#FF6400] hover:bg-[#CD5304] text-lg mt-5">
          <img src={assets.social} alt="Social Media" className="w-7.5 h-7.5" />{" "}
          Fale conosco
        </Button>
      </section>

      {/* SECTION CONTACT */}
      <section
        className="px-13.75 pt-20 flex items-center justify-center  h-dvh  mt-10 overflow-hidden"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center border border-red-500">
          <h1 className="poppins-bold text-5xl text-center text-[#343434] ">
            Vamos Conversar
          </h1>
          <p className="poppins-medium text-lg w-220 text-center text-[#777777]">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="flex items-center  gap-2 mt-10">
            {products.map((item) => (
              <Product
                id={item.id}
                logo={item.logo}
                name={item.name}
                image={item.image}
                products={item.products}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center px-13.75 gap-6 bg-[#343434]">
        <div className="flex pb-20 pt-5 gap-10 w-full border-b border-[#6C6B6B80]">
          <div className="flex flex-col items-start gap-1 overflow-hidden">
            <div className="flex relative right-9 items-center justify-center gap-2 mb-2 overflow-hidden  h-17.5">
              <img src={assets.footer} alt="Footer Logo" />
            </div>
            <p className="text-[#E9E2E2E5] text-[15px]">
              Moldando soluções para o seu dia a dia. Qualidade, inovação e
              versatilidade em produto.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 mt-11">
            <h2 className="text-white font-bold">CONTACTOS</h2>
            {contact.map((item) => (
              <div className="flex items-center gap-2 text-[15px]">
                {item.logo}
                <p
                  key={item.id}
                  className={
                    !item.fill ? "text-[#E9E2E2E5] " : "text-[#1BC69A]"
                  }
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-11">
            <h2 className="text-white font-bold mb-2">REDES SOCIAIS</h2>
            <div className="flex items-center gap-2">
              {media.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white w-9 h-9 rounded-full bg-[#6C6B6B80]/30 p-2"
                >
                  {item.logo}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#E9E2E2E5] text-center">
            © 2023 Plástica Angola. Todos os direitos reservados.
          </p>
          <p className="text-[#E9E2E2E5] text-center">
            Desenvolvido por Serve.io
          </p>
        </div>
      </div>
    </div>
  );
}

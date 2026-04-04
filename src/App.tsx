import {
  CaretRightIcon,
  CheckFatIcon,
  EnvelopeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { assets } from "./assets";
import { Button } from "./components/ui/button";
import { Counter } from "./components/ui/counter/counter";
import { contact, products, statics } from "./data/data";
import { Header } from "./components/header";
import { Product } from "./components/product";
import HeroCarousel, { Carousel } from "./components/carrosel";
import { ContactInfo } from "./components/about";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div>
      <Header />
      <section className=" h-dvh hero overflow-hidden" id="home">
        <HeroCarousel>
          <div className="px-13.75 pt-50 flex flex-col gap-6 h-100 text-white  ">
            <h1 className="poppins-bold text-5xl flex flex-col leading-tight">
              Transformamos Ideias em{" "}
              <span className="text-[#FF6400]">Produtos Plásticos</span>
            </h1>
            <p className="poppins-medium text-lg flex flex-col text-[#EFEFEF]">
              <span>
                Há mais de uma década a fornecer soluções inovadoras em
                plásticos para Angola.
              </span>
              <span>
                Qualidade excepcional, tecnologia avançada e compromisso com a
                excelência.
              </span>
            </p>
            <div className="flex items-center gap-6 mt-5">
              <Button className=" w-63.75 h-13.25 px-11.25 py-2.5 rounded-[12px] bg-[#FF6400] hover:bg-[#CD5304]  text-lg cursor-pointer">
                Solicitar orçamento <CaretRightIcon size={32} />
              </Button>
              <Button className="w-63.75 h-13.25 px-11.25 py-2.5 rounded-[12px] bg-transparent hover:bg-[#0089eb49] border border-white  text-lg cursor-pointer">
                Ver Produtos
              </Button>
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* SECTION ABOUT */}
      <section
        className="px-13.75 pt-20 h-dvh flex items-center justify-center gap-2 mt-10  overflow-hidden"
        id="about"
      >
        <div className="flex  items-start ">
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
        <div className="flex flex-col items-center justify-center ">
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
        <div className="flex flex-col items-center justify-center ">
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
        className="px-13.75 pt-30 flex flex-col items-center justify-center  mt-10"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center ">
          <h1 className="poppins-bold text-5xl text-center text-[#343434] ">
            Vamos Conversar
          </h1>
          <p className="poppins-medium text-lg w-220 text-center text-[#777777]">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-13.75">
            {contact.map((item) => (
              <ContactInfo
                id={item.id}
                name={item.name}
                description={item.description}
                label={item.label}
                logo={item.logo}
                color={item.color}
              />
            ))}
          </div>
        </div>

        <div className="flex h-87.25 w-257.5 p-3 rounded-[25px] bg-linear-to-r from-[#FF6400] to-[#CD5304] border border-red-500 mt-10 items-center justify-center mb-15">
          <div className="flex flex-col w-117.5">
            <h2 className="poppins-bold text-5xl text-white">
              Pronto para começar?
            </h2>
            <p className="poppins-medium text-lg text-[#E9E2E2E5] mt-4">
              Entre em contacto connosco hoje mesmo e descubra como podemos
              ajudar o seu negócio com as melhores soluções em plásticos.
            </p>
            <div className="flex flex-col items-start justify-center gap-2 mt-5">
              <span className="flex items-center justify-center ">
                <CheckFatIcon
                  size={27}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-1 mr-2"
                />
                Resposta rápida em 24 horas
              </span>
              <span className="flex items-center justify-center">
                <CheckFatIcon
                  size={27}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-1 mr-2"
                />
                Consultoria gratuita
              </span>
              <span className="flex items-center justify-center">
                <CheckFatIcon
                  size={27}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-1 mr-2"
                />
                Orçamento sem compromisso
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className=" w-105.75 h-17.75 px-11.25 py-2.5 rounded-[12px] bg-white hover:bg-[#FFEDD8]  text-xl text-[#FF6400]">
              <WhatsappLogoIcon size={37} className="w-9.5 h-9.5" />
              Contactar via WhatsApp
            </Button>
            <Button className="w-105.75 h-17.75 px-11.25 py-2.5 rounded-[12px] bg-[#FF8800] hover:bg-[#FF9925]   text-xl text-white">
              <EnvelopeIcon size={37} />
              Enviar Email
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

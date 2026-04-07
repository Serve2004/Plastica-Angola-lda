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
      <section className="min-h-screen hero overflow-hidden" id="home">
        <HeroCarousel>
          <div className="px-4 md:px-8 xl:px-10 pt-12 flex flex-col justify-center gap-4 md:gap-6 h-full text-white">
            <h1 className="poppins-bold text-3xl md:text-4xl lg:text-5xl flex flex-col leading-tight ">
              Transformamos Ideias em{" "}
              <span className="text-[#FF6400]">Produtos Plásticos</span>
            </h1>
            <p className="poppins-medium text-sm md:text-base lg:text-lg flex flex-col text-[#EFEFEF]">
              <span>
                Há mais de uma década a fornecer soluções inovadoras em
                plásticos para Angola.
              </span>
              <span>
                Qualidade excepcional, tecnologia avançada e compromisso com a
                excelência.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-5">
              <Button className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-sm md:text-lg cursor-pointer">
                Solicitar orçamento{" "}
                <CaretRightIcon size={24} className="md:w-8 md:h-8" />
              </Button>
              <Button className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 py-2 rounded-lg bg-transparent hover:bg-[#0089eb49] border border-white text-sm md:text-lg cursor-pointer">
                Ver Produtos
              </Button>
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* SECTION ABOUT */}
      <section
        className="px-4 md:px-8 xl:px-10 pt-10 md:pt-20 min-h-screen w-full flex flex-wrap items-center justify-center gap-4 mt-10"
        id="about"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div className="flex-1">
            <h1 className="poppins-bold text-2xl md:text-3xl lg:text-4xl text-[#343434]">
              Excelência em Soluções Plásticas para Angola
            </h1>
            <p className="poppins-medium text-xs md:text-sm text-[#777777] mt-2">
              A PLASTICA ANGOLA é uma empresa angolana líder no fornecimento de
              produtos e soluções em plásticos. Com mais de 15 anos de
              experiência, especializamo-nos em oferecer uma ampla gama de
              artigos plásticos de alta qualidade.
            </p>
            <p className="poppins-medium text-xs md:text-sm text-[#777777] mt-5">
              Trabalhamos com os melhores materiais e tecnologias para garantir
              produtos duráveis, funcionais e esteticamente superiores,
              atendendo às necessidades dos setores residencial, comercial e
              industrial.
            </p>
            <div className="flex flex-row md:flex-wrap items-center justify-between md:justify-center lg:justify-start  md:gap-10 mt-3">
              {statics.map((item) => (
                <div
                  className="flex flex-col items-center gap-1 p-4 md:p-6"
                  key={item.id}
                >
                  <div className="p-0.5">{item.logo}</div>
                  <h2 className="poppins-bold text-lg md:text-xl w-20 text-[#0088EB] text-center">
                    <Counter end={item.number} />
                    {item.symbol}
                  </h2>
                  <p className="poppins-medium text-xs md:text-sm text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={assets.about}
            alt="Sobre a Plástica Angola"
            className="w-full lg:max-w-md xl:max-w-135 rounded-2xl"
          />
        </div>
      </section>

      {/* SECTION PRODUCTS */}
      <section
        className="px-4 md:px-8 xl:px-10 pt-10 md:pt-20 flex items-center justify-center min-h-screen mt-10 overflow-hidden"
        id="products"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="poppins-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
            Soluções Completas em Plásticos
          </h1>
          <p className="poppins-medium text-sm md:text-lg max-w-md lg:max-w-2xl text-center text-[#777777] mt-4">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
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
        className="px-4 md:px-8 xl:px-10 pt-10 md:pt-20 flex items-center justify-center min-h-[70vh] overflow-hidden"
        id="partners"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="poppins-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
            Trabalhamos com os Melhores
          </h1>
          <p className="poppins-medium text-sm md:text-lg max-w-md lg:max-w-2xl text-center text-[#777777] mt-4">
            Orgulhamo-nos de colaborar com empresas líderes em Angola,
            fornecendo soluções plásticas de excelência
          </p>
          <Carousel />
        </div>
      </section>
      <section className="px-4 md:px-8 xl:px-10 min-h-120 flex flex-col items-center justify-center hero2">
        <h1 className="poppins-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
          Quer ser nosso parceiro?
        </h1>
        <p className="poppins-medium text-sm md:text-lg max-w-md lg:max-w-lg text-center text-[#777777] mt-4">
          Estamos sempre à procura de novas parcerias estratégicas para crescer
          juntos e oferecer as melhores soluções ao mercado angolano.
        </p>
        <Button className="px-8 py-4 rounded-full bg-[#FF6400] hover:bg-[#CD5304] text-sm md:text-lg mt-5">
          <img
            src={assets.social}
            alt="Social Media"
            className="w-6 h-6 md:w-8 md:h-8"
          />{" "}
          Fale conosco
        </Button>
      </section>

      {/* SECTION CONTACT */}
      <section
        className="px-4 md:px-8 xl:px-10 pt-12 md:pt-20 flex flex-col items-center justify-center mt-10"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="poppins-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
            Vamos Conversar
          </h1>
          <p className="poppins-medium text-sm md:text-lg max-w-md lg:max-w-2xl text-center text-[#777777] mt-4">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-16">
            {contact.map((item) => (
              <ContactInfo
                key={item.id}
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

        <div className="flex flex-col lg:flex-row h-auto lg:h-96 w-full max-w-4xl p-4 rounded-2xl bg-linear-to-r from-[#FF6400] to-[#CD5304] border border-red-500 mt-10 items-center justify-center mb-16 gap-6">
          <div className="flex flex-col flex-1">
            <h2 className="poppins-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
              Pronto para começar?
            </h2>
            <p className="poppins-medium text-sm md:text-lg text-[#E9E2E2E5] mt-4">
              Entre em contacto connosco hoje mesmo e descubra como podemos
              ajudar o seu negócio com as melhores soluções em plásticos.
            </p>
            <div className="flex flex-col items-start justify-center gap-2 mt-5">
              <span className="flex items-center justify-center text-sm md:text-base">
                <CheckFatIcon
                  size={20}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-1 mr-2 md:w-6.75 md:h-6.75"
                />
                Resposta rápida em 24 horas
              </span>
              <span className="flex items-center justify-center text-sm md:text-base">
                <CheckFatIcon
                  size={20}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-1 mr-2 md:w-6.75 md:h-6.75"
                />
                Consultoria gratuita
              </span>
              <span className="flex items-center justify-center text-sm md:text-base">
                <CheckFatIcon
                  size={20}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-1 mr-2 md:w-6.75 md:h-6.75"
                />
                Orçamento sem compromisso
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="w-full lg:w-auto h-12 md:h-16 px-6 md:px-8 py-2 rounded-lg bg-white hover:bg-[#FFEDD8] text-lg md:text-xl text-[#FF6400]">
              <WhatsappLogoIcon
                size={28}
                className="w-6 h-6 md:w-10 md:h-10 "
              />
              Contactar via WhatsApp
            </Button>
            <Button className="w-full lg:w-auto h-12 md:h-16 px-6 md:px-8 py-2 rounded-lg bg-[#FF8800] hover:bg-[#FF9925] text-lg md:text-xl text-white">
              <EnvelopeIcon size={28} className="md:w-9.25 md:h-9.25" />
              Enviar Email
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

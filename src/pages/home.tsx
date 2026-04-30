import { assets } from "@/assets";
import { ContactInfo } from "@/components/about";
import HeroCarousel, { Carousel } from "@/components/carrosel";
import { Product } from "@/components/product";
import { Counter } from "@/components/ui/counter/counter";
import { statics, products, contact } from "@/data/data";
import {
  CaretRightIcon,
  CheckFatIcon,
  WhatsappLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";

export function HomePage() {
  return (
    <div>
      <section className="min-h-screen overflow-hidden" id="home">
        <HeroCarousel>
          <div className="px-2 sm:px-4 md:px-8 xl:px-10 pt-12 flex flex-col justify-center gap-2 sm:gap-4 md:gap-6 h-full text-white">
            <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col leading-tight ">
              Transformamos Ideias em{" "}
              <span className="text-[#FF6400]">Produtos Plásticos</span>
            </h1>
            <p className="poppins-medium text-xs sm:text-sm md:text-base lg:text-lg flex flex-col text-[#EFEFEF]">
              <span>
                Há mais de uma década a fornecer soluções inovadoras em
                plásticos para Angola.
              </span>
              <span>
                Qualidade excepcional, tecnologia avançada e compromisso com a
                excelência.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 mt-3 sm:mt-5">
              <a
                href={`#contact`}
                className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-xs sm:text-sm md:text-lg cursor-pointer"
              >
                Fale conosco{" "}
                <CaretRightIcon
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </a>
              <a
                href={`#products`}
                className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-transparent hover:bg-[#0089eb49] border border-white text-xs sm:text-sm md:text-lg cursor-pointer"
              >
                Ver Produtos
              </a>
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* SECTION ABOUT */}
      <section
        className="px-2 sm:px-4 md:px-8 xl:px-10 pt-6 sm:pt-10 md:pt-20 min-h-screen w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-10 bg-[#EFEFEF]"
        id="about"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
          <div className="flex-1 max-w-136.5">
            <h1 className="poppins-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#343434]">
              Excelência em Soluções Plásticas para Angola
            </h1>
            <p className="poppins-medium text-[11px] sm:text-xs md:text-sm lg:text-[17px] text-[#777777] mt-2">
              A PLASTICA ANGOLA é uma empresa angolana líder no fornecimento de
              produtos e soluções em plásticos. Com mais de 15 anos de
              experiência, especializamo-nos em oferecer uma ampla gama de
              artigos plásticos de alta qualidade.
            </p>
            <p className="poppins-medium text-[11px] sm:text-xs md:text-sm lg:text-[17px] text-[#777777] mt-3 sm:mt-5">
              Trabalhamos com os melhores materiais e tecnologias para garantir
              produtos duráveis, funcionais e esteticamente superiores,
              atendendo às necessidades dos setores residencial, comercial e
              industrial.
            </p>
            <div className="flex flex-row md:flex-wrap items-center justify-between md:justify-center lg:justify-start md:gap-10 mt-2 sm:mt-3">
              {statics.map((item) => (
                <div
                  className="flex flex-col items-center gap-1 p-2 sm:p-4 md:p-6"
                  key={item.id}
                >
                  <div className="p-0.5 text-sm sm:text-base">{item.logo}</div>
                  <h2 className="poppins-bold text-sm sm:text-lg md:text-xl lg:text-[32px] w-16 sm:w-20 text-[#0088EB] text-center">
                    <Counter end={item.number} />
                    {item.symbol}
                  </h2>
                  <p className="poppins-medium text-[10px] sm:text-xs md:text-sm text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={assets.about}
            alt="Sobre a Plástica Angola"
            className="w-full lg:max-w-141 xl:max-w-135 rounded-xl sm:rounded-2xl"
          />
        </div>
      </section>

      {/* SECTION PRODUCTS */}
      <section
        className="px-2 sm:px-4 md:px-8 xl:px-10 pt-6 sm:pt-10 md:pt-20 flex items-center justify-center min-h-screen mt-6 sm:mt-10 overflow-hidden"
        id="products"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
            Soluções Completas em Plásticos
          </h1>
          <p className="poppins-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center text-[#777777] mt-3 sm:mt-4">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-10">
            {products.map((item) => (
              <Product
                id={item.id}
                name={item.name}
                image={item.image}
                slug={item.slug}
                products={item.products}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION PARTNERS */}
      <section
        className="px-2 sm:px-4 md:px-8 xl:px-10 pt-6 sm:pt-10 md:pt-20 flex items-center justify-center min-h-[70vh] overflow-hidden"
        id="partners"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
            Trabalhamos com os Melhores
          </h1>
          <p className="poppins-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center text-[#777777] mt-3 sm:mt-4">
            Orgulhamo-nos de colaborar com empresas líderes em Angola,
            fornecendo soluções plásticas de excelência
          </p>
          <Carousel />
        </div>
      </section>
      <section className="px-2 sm:px-4 md:px-8 xl:px-10 min-h-80 sm:min-h-100 md:min-h-120 flex flex-col items-center justify-center hero2">
        <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
          Quer ser nosso parceiro?
        </h1>
        <p className="poppins-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-lg text-center text-[#777777] mt-3 sm:mt-4">
          Estamos sempre à procura de novas parcerias estratégicas para crescer
          juntos e oferecer as melhores soluções ao mercado angolano.
        </p>
        <a
          href={`#contact`}
          className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-xs sm:text-sm md:text-lg cursor-pointer text-white gap-2 mt-3 sm:mt-5"
        >
          <img
            src={assets.social}
            alt="Social Media"
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />{" "}
          Fale conosco agora
        </a>
      </section>

      {/* SECTION CONTACT */}
      <section
        className="px-2 sm:px-4 md:px-8 xl:px-10 pt-8 sm:pt-12 md:pt-20 flex flex-col items-center justify-center mt-6 sm:mt-10"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
            Vamos Conversar
          </h1>
          <p className="poppins-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center text-[#777777] mt-3 sm:mt-4">
            Oferecemos uma vasta gama de produtos e serviços para atender todas
            as suas necessidades em artigos plásticos
          </p>
          <div className="flex flex-wrap justify-center w-full max-w-257.5 gap-3 sm:gap-6 mt-6 sm:mt-10 md:mt-16">
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

        <div className="flex flex-col lg:flex-row h-auto lg:h-96 w-full max-w-257.5  p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-linear-to-b from-[#FF6400] to-[#CD5304] border border-red-500 mt-25 items-center justify-center mb-12 sm:mb-16 gap-4 sm:gap-6 text-white">
          <div className="flex flex-col flex-1 w-full lg:w-117.5">
            <h2 className="poppins-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Pronto para começar?
            </h2>
            <p className="poppins-medium text-xs sm:text-sm md:text-lg  mt-2 sm:mt-4">
              Entre em contacto connosco hoje mesmo e descubra como podemos
              ajudar o seu negócio com as melhores soluções em plásticos.
            </p>
            <div className="flex flex-col items-start justify-center gap-2 mt-3 sm:mt-5">
              <span className="flex items-center justify-center text-xs sm:text-sm md:text-base">
                <CheckFatIcon
                  size={16}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-0.5 mr-2 sm:w-6.75 sm:h-6.75"
                />
                Resposta rápida em 24 horas
              </span>
              <span className="flex items-center justify-center text-xs sm:text-sm md:text-base">
                <CheckFatIcon
                  size={16}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-0.5 mr-2 sm:w-6.75 sm:h-6.75"
                />
                Consultoria gratuita
              </span>
              <span className="flex items-center justify-center text-xs sm:text-sm md:text-base">
                <CheckFatIcon
                  size={16}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-0.5 mr-2 sm:w-6.75 sm:h-6.75"
                />
                Orçamento sem compromisso
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-105.75">
            <button className="flex justify-center items-center  h-10 sm:h-12 md:h-16 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-white hover:bg-[#FFEDD8] text-sm sm:text-lg md:text-xl text-[#FF6400] cursor-pointer gap-2">
              <WhatsappLogoIcon
                size={20}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10"
              />
              Contactar via WhatsApp
            </button>
            <button className="flex justify-center items-center  h-10 sm:h-12 md:h-16 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF8800] hover:bg-[#FF9925] text-sm sm:text-lg md:text-xl text-white cursor-pointer gap-2">
              <EnvelopeIcon
                size={20}
                className="sm:w-6 sm:h-6 md:w-9.25 md:h-9.25"
              />
              Enviar Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

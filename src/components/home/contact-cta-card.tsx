import {
  CheckFatIcon,
  EnvelopeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

const contactBenefits = [
  "Resposta rápida em 24 horas",
  "Consultoria gratuita",
  "Orçamento sem compromisso",
];

export function ContactCtaCard() {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-96  p-10 rounded-xl sm:rounded-2xl bg-linear-to-b from-[#FF6400] to-[#CD5304] border border-red-500 mt-40 items-center justify-center mb-12 sm:mb-16 text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6">
        <div className="flex flex-col flex-1 w-full lg:w-149.5">
          <h2 className="poppins-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Pronto para começar?
          </h2>
          <p className="montserrat text-xs sm:text-sm md:text-lg mt-2 sm:mt-4">
            Entre em contacto connosco hoje mesmo e descubra como podemos ajudar
            o seu negócio com as melhores soluções em plásticos.
          </p>
          <div className="flex flex-col items-start justify-center gap-2 mt-3 sm:mt-5">
            {contactBenefits.map((benefit) => (
              <span
                className="flex items-center justify-center montserrat text-xs sm:text-sm md:text-base"
                key={benefit}
              >
                <CheckFatIcon
                  size={16}
                  weight="fill"
                  color="white"
                  className="bg-[#FF8800] rounded-full p-0.5 mr-2 sm:w-6.75 sm:h-6.75"
                />
                {benefit}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-105.75">
          <a className="flex justify-center items-center h-10 sm:h-12 md:h-16 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-white hover:bg-[#FFEDD8] text-sm sm:text-lg md:text-xl text-[#FF6400] cursor-pointer gap-2"
          href="https://wa.me/244937785909?text=Olá!+Vi+o+site+da+vossa+fábrica+e+gosto+da+qualidade+do+vosso+plástico.+Gostaria+de+falar+com+as+Vendas"
          >
            <WhatsappLogoIcon
              size={20}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10"
            />
            Contactar via WhatsApp
          </a>
          <button className="flex justify-center items-center h-10 sm:h-12 md:h-16 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF8800] hover:bg-[#FF9925] text-sm sm:text-lg md:text-xl text-white cursor-pointer gap-2">
            <EnvelopeIcon
              size={20}
              className="sm:w-6 sm:h-6 md:w-9.25 md:h-9.25"
            />
            Enviar Email
          </button>
        </div>
      </div>
    </div>
  );
}

import { assets } from "@/assets";
import { StatsList } from "./stats-list";

export function AboutSection() {
  return (
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
            experiência, especializamo-nos em oferecer uma ampla gama de artigos
            plásticos de alta qualidade.
          </p>
          <p className="poppins-medium text-[11px] sm:text-xs md:text-sm lg:text-[17px] text-[#777777] mt-3 sm:mt-5">
            Trabalhamos com os melhores materiais e tecnologias para garantir
            produtos duráveis, funcionais e esteticamente superiores, atendendo
            às necessidades dos setores residencial, comercial e industrial.
          </p>
          <StatsList />
        </div>
        <img
          src={assets.about}
          alt="Sobre a Plástica Angola"
          className="w-full lg:max-w-141 xl:max-w-135 rounded-xl sm:rounded-2xl"
        />
      </div>
    </section>
  );
}

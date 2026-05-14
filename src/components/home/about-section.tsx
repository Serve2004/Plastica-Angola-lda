import { assets } from "@/assets";
import { StatsList } from "./stats-list";

export function AboutSection() {
  return (
    <section
      className="px-2 sm:px-4 md:px-8 xl:px-10 pt-6 sm:pt-10 md:pt-20 min-h-screen w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-[#EFEFEF]"
      id="about"
    >
      <div className="flex-1 flex flex-col lg:flex-row justify-around items-center lg:items-start">
        <div className="flex-1 max-w-150">
          <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl ">
            Excelência em Soluções Plásticas para Angola
          </h1>
          <p className="montserrat-medium text-[11px] sm:text-xs md:text-[19px] text-[#777777] mt-2 text-justify">
            A PLASTICA ANGOLA é uma empresa angolana líder no fornecimento de
            produtos e soluções em plásticos. Com mais de 15 anos de
            experiência, especializamo-nos em oferecer uma ampla gama de artigos
            plásticos de alta qualidade.
          </p>
          <p className="montserrat-medium text-[11px] sm:text-xs md:text-[19px] text-[#777777] mt-3 sm:mt-5 text-justify">
            Trabalhamos com os melhores materiais e tecnologias para garantir
            produtos duráveis, funcionais e esteticamente superiores, atendendo
            às necessidades dos setores residencial, comercial e industrial.
          </p>
          <StatsList />
        </div>
        <img
          src={assets.about}
          alt="Sobre a Plástica Angola"
          className="w-full sm:max-w-171  rounded-xl sm:rounded-2xl"
        />
      </div>
    </section>
  );
}

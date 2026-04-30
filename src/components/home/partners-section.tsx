import { Carousel } from "@/components/carrosel";

export function PartnersSection() {
  return (
    <section
      className="px-2 sm:px-4 md:px-8 xl:px-10 pt-6 sm:pt-10 md:pt-20 flex items-center justify-center min-h-[70vh] overflow-hidden"
      id="partners"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
          Trabalhamos com os Melhores
        </h1>
        <p className="poppins-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center text-[#777777] mt-3 sm:mt-4">
          Orgulhamo-nos de colaborar com empresas líderes em Angola, fornecendo
          soluções plásticas de excelência
        </p>
        <Carousel />
      </div>
    </section>
  );
}

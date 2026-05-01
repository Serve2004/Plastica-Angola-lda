import { SeeProductsButton, TalkToUsButton } from "@/components/buttons";
import HeroCarousel from "@/components/carrosel";

export function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden" id="home">
      <HeroCarousel>
        <div className="px-2 sm:px-4 md:px-8 xl:px-10 lg:pt-12 flex flex-col justify-center gap-2 sm:gap-4 md:gap-6 h-full text-white">
          <h1 className="poppins-bold text-[34px] sm:text-[56px] md:text-5xl lg:text-6xl flex flex-col leading-tight ">
            Transformamos Ideias em{" "}
            <span className="text-[#FF6400]">Produtos Plásticos</span>
          </h1>
          <p className="montserrat-medium text-[17px] lg:text-[19px] flex flex-col text-[#EFEFEF]">
            <span>
              Há mais de uma década a fornecer soluções inovadoras em plásticos
              para Angola.
            </span>
            <span>
              Qualidade excepcional, tecnologia avançada e compromisso com a
              excelência.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 mt-3 sm:mt-5">
            <TalkToUsButton />
            <SeeProductsButton />
          </div>
        </div>
      </HeroCarousel>
    </section>
  );
}

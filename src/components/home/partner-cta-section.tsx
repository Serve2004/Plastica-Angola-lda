import { TalkToUsButton } from "@/components/buttons";

export function PartnerCtaSection() {
  return (
    <section className="px-2 sm:px-4 md:px-8 xl:px-10 min-h-80 sm:min-h-100 md:min-h-120 flex flex-col items-center justify-center hero2">
      <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
        Quer ser nosso parceiro?
      </h1>
      <p className="montserrat-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-lg text-center text-[#777777] mt-3 sm:mt-4">
        Estamos sempre à procura de novas parcerias estratégicas para crescer
        juntos e oferecer as melhores soluções ao mercado angolano.
      </p>
      <TalkToUsButton type="secondary" />
    </section>
  );
}

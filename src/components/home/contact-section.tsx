import { contact } from "@/data/data";
import { ContactCtaCard } from "./contact-cta-card";
import { ContactInfo } from "@/components/contactInfo";

export function ContactSection() {
  return (
    <section
      className="px-2 sm:px-4 md:px-8 xl:px-10 pt-8 sm:pt-12 md:pt-40 flex flex-col items-center justify-center mt-6 sm:mt-10"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
          Vamos Conversar
        </h1>
        <p className="montserrat-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center text-[#777777] mt-3 sm:mt-4">
          Oferecemos uma vasta gama de produtos e serviços para atender todas as
          suas necessidades em artigos plásticos
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

      <ContactCtaCard />
    </section>
  );
}

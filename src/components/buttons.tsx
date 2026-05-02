import { CaretRightIcon } from "@phosphor-icons/react";
import { useScroll } from "./navigateHook";
import { assets } from "@/assets";

export const TalkToUsButton = ({ type="primary" }: { type?: string }) => {
  const handleScroll = useScroll();
  return (
    <>
      {type === "primary" ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("contact");
          }}
          className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-xs sm:text-sm md:text-lg cursor-pointer"
        >
          Fale conosco{" "}
          <CaretRightIcon size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </a>
      ) : (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("contact");
          }}
          className="w-auto flex justify-center items-center  h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-xs sm:text-sm md:text-lg cursor-pointer text-white gap-2 mt-3 sm:mt-5"
        >
          <img
            src={assets.social}
            alt="Social Media"
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />{" "}
          Fale conosco agora
        </a>
      )}
    </>
  );
};

export const SeeProductsButton = () => {
  const handleScroll = useScroll();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleScroll("products");
      }}
      className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-transparent border border-white hover:border-[#FF6400] hover:bg-[#FF6400] hover:text-white text-xs sm:text-sm md:text-lg cursor-pointer"
    >
      Ver Produtos
    </a>
  );
};

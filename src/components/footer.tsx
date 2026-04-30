import { assets } from "@/assets";
import { contact, links, media, products } from "@/data/data";
import { useScroll } from "./navigateHook";

export function Footer() {
  const handleScroll = useScroll();
  
  return (
    <div className="flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 xl:px-10 py-8 sm:py-14.5 md:py-2.25 gap-4 sm:gap-6 bg-[#343434]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full pb-12 sm:pb-20 pt-3 sm:pt-5 border-b border-[#6C6B6B80]">
        <div className="flex flex-col items-start gap-1 overflow-hidden">
          <div className="flex items-center justify-center w-20 sm:w-25 md:w-35">
            <img src={assets.footer} alt="Footer Logo" />
          </div>
          <p className="text-[#E9E2E2E5] text-[13px] sm:text-[15px] w-full max-w-xs">
            Líder angolano em soluções plásticas de alta qualidade para todos os
            setores.
          </p>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-white font-bold text-sm sm:text-base">LINKS</h2>
          {links.map((item) => (
            <div
              key={item.id}
              className="text-white font-bold text-[13px] sm:text-[15px]"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  e.currentTarget.blur();
                  handleScroll(item.id);
                }}
                className="transition-all duration-300 hover:text-[#FF6400] cursor-pointer"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-white font-bold text-sm sm:text-base">
            PRODUTOS
          </h2>
          {products.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 text-[13px] sm:text-[15px]"
            >
              <p className="text-[#E9E2E2E5]/90">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-white font-bold text-sm sm:text-base">
            CONTACTOS
          </h2>
          <div className="flex flex-col">
            {contact
              .slice()
              .reverse()
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center text-[13px] sm:text-[15px]"
                >
                  <span className="flex items-center gap-2 text-[#FF6400] w-8 sm:w-9 h-8 sm:h-9 rounded-full  p-1.5 sm:p-2">
                    {item.logo}
                  </span>
                  <p
                    className={
                      !item.fill ? "text-[#E9E2E2E5]/90" : "text-[#FF6400]"
                    }
                  >
                    {!item.fill ? item.description : item.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full md:items-start gap-3 sm:gap-4">
        <div className="flex flex-col">
          <p className="text-[#E9E2E2E5] text-xs sm:text-sm">
            © {new Date().getFullYear()} Plástica Angola. Todos os direitos
            reservados.
          </p>
          <p className="text-[#E9E2E2E5] text-xs sm:text-sm">
            Desenvolvido por Serve.io
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            {media.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-[#6C6B6B80]/30 p-1.5 sm:p-2"
              >
                {item.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

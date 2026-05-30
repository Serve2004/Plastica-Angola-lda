import { assets } from "@/assets";
import { useEffect, useState } from "react";
import { links } from "@/data/navigation-links";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useScroll } from "../navigateHook";
import { ContactDialog } from "../contactDialog";

export function Header() {
  const [active, setActive] = useState("home");
  const [bgWhite, setBgWhite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavigate = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((id) => {
        const section = document.getElementById(id.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(id.id);
        }
      });

      setBgWhite(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-2 sm:px-4 md:px-8 xl:px-10 py-8 sm:py-10 md:py-2.25 flex items-center justify-between z-30 overflow-hidden h-14 sm:h-16 transition-all duration-300  ${bgWhite ? "bg-white" : "bg-transparent"} ${menuOpen && "bg-white"}`}
    >
      <h1 className="flex items-center justify-center w-20 sm:w-25 md:w-35">
        <img src={assets.logo} alt="Logo" />
      </h1>

      <nav className="flex items-center gap-2 sm:gap-4">
        <ul
          className={`nav-list flex gap-2 sm:gap-4 transition-all duration-1000 ${bgWhite ? "text-black" : "text-white"} hidden md:flex`}
        >
          {links.map((id) => (
            <li key={id.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  e.currentTarget.blur();
                  handleNavigate(id.id);
                }}
                className={`text-[16px] transition-all duration-1000 focus:text-[#FF6400] focus:font-bold hover:text-[#FF6400]
              ${active === id.id ? "focus:text-[#FF6400] text-[#FF6400] font-bold" : bgWhite ? "text-black" : "text-white"}
              
              `}
              >
                {id.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col justify-between bg-transparent border-none focus:outline-none ${bgWhite ? "text-black" : "text-white"}`}
          aria-label="Abrir menu"
        >
          {!menuOpen ? (
            <ListIcon size={24} />
          ) : (
            <XIcon size={24} color="#000" />
          )}
        </button>
      </nav>
      {menuOpen && (
        <div
          className={`fixed top-14 sm:top-16 left-0 w-full bg-white shadow-md z-50 md:hidden ${
            menuOpen ? "slide-down-animation" : "slide-up-animation"
          }`}
        >
          <ul className="flex flex-col items-start gap-2 p-2 sm:p-3">
            {links.map((id) => (
              <li key={id.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.currentTarget.blur();
                    handleNavigate(id.id);
                    setMenuOpen(false);
                  }}
                  className={`text-[16px] transition-all duration-1000 focus:text-[#FF6400] focus:font-bold hover:text-[#FF6400]
              ${active === id.id ? "focus:text-[#FF6400] text-[#FF6400] font-bold" : "text-black"}
              `}
                >
                  {id.label}
                </a>
              </li>
            ))}
          </ul>
          <ContactDialog className="max-w-full rounded-none py-5"/>
        </div>
      )}

      <ContactDialog className="hidden md:flex">
        <img
                    src={assets.social}
                    alt="Social Media"
                    className="w-5 sm:w-7.5 h-5 sm:h-7.5"
                  />{" "}
                  Fale conosco
      </ContactDialog>
    </header>
  );
}

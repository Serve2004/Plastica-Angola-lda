import { assets } from "@/assets";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { links } from "@/data/data";
import { ListIcon, XIcon } from "@phosphor-icons/react";

export function Header() {
  const [active, setActive] = useState("home");
  const [bgWhite, setBgWhite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 px-4 md:px-8 xl:px-10  py-10 md:py-2.25 flex items-center justify-between z-100 overflow-hidden h-16 transition-all duration-1000 ${bgWhite ? "bg-white" : "bg-transparent"}`}
    >
      <h1 className="flex items-center justify-center w-25 md:w-35">
        <img src={assets.logo} alt="Logo" />
      </h1>

      <nav className="flex items-center gap-4">
        <ul
          className={`nav-list flex gap-4 transition-all duration-1000 ${bgWhite ? "text-black" : "text-white"} hidden md:flex`}
        >
          {links.map((id) => (
            <li key={id.id}>
              <a
                href={`#${id.id}`}
                className={`transition-all duration-1000 focus:text-[#FF6400] focus:font-bold hover:text-[#FF6400]
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
          className={`md:hidden flex flex-col justify-between  bg-transparent border-none focus:outline-none ${bgWhite ? "text-black" : "text-white"}`}
          aria-label="Abrir menu"
        >
          {!menuOpen ? <ListIcon size={32} /> : <XIcon size={32} />}
        </button>
      </nav>
      {menuOpen && (
        <div
          className={`fixed top-16 left-0 w-full bg-white shadow-md z-50 md:hidden transform transition-all duration-500 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-start gap-2 p-3">
            {links.map((id) => (
              <li key={id.id}>
                <a
                  href={`#${id.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-all duration-1000 focus:text-[#FF6400] focus:font-bold hover:text-[#FF6400]
        ${active === id.id ? "focus:text-[#FF6400] text-[#FF6400] font-bold" : "text-black"}
        `}
                >
                  {id.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full rounded-[8px] bg-[#FF6400] hover:bg-[#CD5304] text-lg">
            <img
              src={assets.social}
              alt="Social Media"
              className="w-7.5 h-7.5"
            />{" "}
            Fale conosco
          </Button>
        </div>
      )}

      <Button className="p-4.5 rounded-[35px] bg-[#FF6400] hover:bg-[#CD5304] text-lg hidden md:flex">
        <img src={assets.social} alt="Social Media" className="w-7.5 h-7.5" />{" "}
        Fale conosco
      </Button>
    </header>
  );
}

import { assets } from "@/assets";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const links = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre Nós" },
  { id: "products", label: "Produtos" },
  { id: "partners", label: "Parceiros" },
  { id: "contact", label: "Contatos" },
];

export function Header() {
  const [active, setActive] = useState("home");
  const [bgWhite, setBgWhite] = useState(false);

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 px-13.75 py-10 flex items-center justify-between z-50 overflow-hidden h-16 border border-red-500 transition-all duration-1000 ${bgWhite ? "bg-white" : "bg-transparent"}`}
    >
      <h1 className=" flex items-center justify-center border border-red-500">
        <img src={assets.logo} alt="Logo" />
      </h1>

      <nav>
        <ul
          className={`nav-list flex gap-4 transition-all duration-500 ${bgWhite ? "text-black" : "text-white"}`}
        >
          {links.map((id) => (
            <li key={id.id}>
              <a
                key={id.id}
                href={`#${id.id}`}
                className={`transition focus:text-[#FF6400] focus:font-bold hover:text-[#FF6400]
          ${active === id.id ? "focus:text-[#FF6400] text-[#FF6400]  font-bold" : bgWhite ? "text-black" : "text-white"}
          `}
              >
                {id.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="p-4.5 rounded-[35px] bg-[#FF6400] hover:bg-[#CD5304] text-lg">
        <img src={assets.social} alt="Social Media" className="w-7.5 h-7.5" />{" "}
        Fale conosco
      </Button>
    </header>
  );
}

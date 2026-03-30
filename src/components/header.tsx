import { assets } from "@/assets";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const links = [
  { id: "home", label: "Início" },
  { id: "service", label: "Serviços" },
  { id: "about", label: "Sobre" },
  { id: "products", label: "Produtos" },
  { id: "sustainability", label: "Sustentabilidade" },
  { id: "contact", label: "Contato" },
];

export function Header() {
  const [active, setActive] = useState("home");

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
    <header className="fixed top-0 left-0 right-0 px-33.5 py-10 flex items-center justify-between z-50 overflow-hidden h-16">
      <h1 className="w-60 relative top-10 right-1.5 flex items-center justify-center">
        <img src={assets.logo} alt="Logo" />
      </h1>
      <nav>
        <ul className="nav-list flex gap-4 text-white">
          {links.map((id) => (
            <li key={id.id}>
              <a
                key={id.id}
                href={`#${id.id}`}
                className={`transition focus:text-[#FF6400] focus:font-bold hover:text-[#FF6400]
            ${active === id.id ? "focus:text-[#FF6400] text-[#FF6400]  font-bold" : "text-white"}
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

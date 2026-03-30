import { assets } from "@/assets";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 px-33.5 py-10 flex items-center justify-between z-50">
      <h1 className="w-40 flex items-center justify-center">
        <img src={assets.logo} alt="Logo" />
      </h1>
      <nav>
        <ul className="nav-list flex gap-4 text-white">
          <li>
            <a href="#home">início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#service">Serviços</a>
          </li>
          <li>
            <a href="#products">Produtos</a>
          </li>
          <li>
            <a href="#sustainability">Sustentabilidade</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
      <Button className="p-4.5 rounded-[35px] bg-[#FF6400] hover:bg-[#FF6400]/80 text-lg">
        <img src={assets.social} alt="Social Media" className="w-7.5 h-7.5" />{" "}
        Fale conosco
      </Button>
    </header>
  );
}

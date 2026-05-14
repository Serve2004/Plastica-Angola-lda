import { ChairIcon } from "@phosphor-icons/react";
import { PackageIcon, WrenchIcon } from "lucide-react";

export const CATEGORIES = [
  {
    id: "mobiliario",
    icon: <ChairIcon size={26} type="duotone" className="text-[#FF6400] group-hover:text-white transition-colors" />,
    name: "Mobiliário",
    description: "Cadeiras, mesas e mobiliário plático",
  },
  {
    id: "embalagens",
    icon: <PackageIcon size={26} type="duotone" className="text-[#FF6400] group-hover:text-white transition-colors" />,
    name: "Embalagens Industriais",
    description: "Frascos, garrafas e contentores",
  },
  {
    id: "pecas",
    icon: <WrenchIcon size={26} type="duotone" className="text-[#FF6400] group-hover:text-white transition-colors" />,
    name: "Peças por Medida",
    description: "Soluções técnicas personalizadas",
  },
];
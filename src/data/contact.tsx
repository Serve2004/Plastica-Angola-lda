import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

export const contact = [
  {
    id: 1,
    logo: <WhatsappLogoIcon size={32} />,
    color: "#25D366",
    name: "WhatsApp",
    label: "Fale conosco via WhatsApp",
    description: "+244 923 456 789",
    fill: true,
  },
  {
    id: 2,
    logo: <EnvelopeIcon size={32} />,
    color: "#0088EB",
    name: "Email",
    label: "Envie-nos um email",
    description: "geral@plasticaangola.ao",
  },
  {
    id: 3,
    logo: <PhoneIcon size={32} />,
    color: "#8A38F5",
    name: "Telefone",
    label: "Ligue para nós",
    description: "+244 222 123 456",
  },
  {
    id: 4,
    logo: <MapPinIcon size={32} />,
    color: "#EF3E3E",
    name: "Localização",
    label: "Visite-nos",
    description: "Luanda, Angola",
  },
];

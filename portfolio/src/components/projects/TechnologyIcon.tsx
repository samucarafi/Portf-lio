import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

import { SiExpress, SiMercadopago, SiMongodb } from "react-icons/si";

interface TechnologyIconProps {
  icon: string;
  size?: number;
}

export function TechnologyIcon({ icon, size = 14 }: TechnologyIconProps) {
  const icons = {
    react: <FaReact size={size} />,
    node: <FaNodeJs size={size} />,
    express: <SiExpress size={size} />,
    mongodb: <SiMongodb size={size} />,
    mercadopago: <SiMercadopago size={size} />,
    javascript: <FaJs size={size} />,
    html: <FaHtml5 size={size} />,
    css: <FaCss3Alt size={size} />,
  };

  return icons[icon as keyof typeof icons] ?? null;
}

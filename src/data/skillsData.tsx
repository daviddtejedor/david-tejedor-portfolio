import { SkillThemeColor } from "@/config";
import { IconType } from "react-icons";
import { FiServer, FiLayout } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import { RiBrain2Line } from "react-icons/ri";


export type SkillSection = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    Icon: React.ReactNode;
    color: SkillThemeColor;
    variant: "back" | "front" | "software" | "soft";
};

export const SKILLS_SECTIONS: SkillSection[] = [
    {
        id: "backend",
        title: "Backend y Arquitectura",
        subtitle: "Lógica de negocio y escalabilidad.",
        description:
            "Especializado en la creación de APIs eficientes y la gestión de datos relacionales, priorizando siempre la mantenibilidad y la arquitectura limpia.",
        Icon: <FiServer />,
        color: "blue",
        variant: "back",
    },
    {
        id: "frontend",
        title: "Frontend",
        subtitle: "Diseño reactivo e interfaces dinámicas.",
        description:
            "Enfocado en crear experiencias interactivas y fluidas, cuidando cada detalle del diseño responsive y optimizando el rendimiento visual.",
        Icon: <FiLayout />,
        color: "purple",
        variant: "front",
    },
    {
        id: "software",
        title: "Software y Herramientas",
        subtitle: "Entorno de trabajo y diseño.",
        description:
            "Manejo de herramientas clave para el flujo de desarrollo diario, maquetación UI/UX, prototipado y gestión de software.",
        Icon: <IoIosRocket />,
        color: "amber",
        variant: "software",
    },
    {
        id: "soft",
        title: "Habilidades Personales",
        subtitle: "Trabajo en equipo y comunicación.",
        description:
            "Fortalezas interpersonales orientadas a la colaboración efectiva, resolución lógica de problemas y aprendizaje continuo.",
        Icon: <RiBrain2Line />,
        color: "emerald",
        variant: "soft",
    },
];
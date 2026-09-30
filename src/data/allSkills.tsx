
import {
    SiTypescript, SiJavascript, SiPhp, SiMysql, SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiFramer,
    SiBootstrap, SiFigma, SiAdobephotoshop, SiAdobeillustrator,
    SiPostgresql
} from "react-icons/si";


import { FaNodeJs, FaLaravel, FaReact, FaUsers, FaComments, FaRegCalendarAlt, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp, TbBrandOffice } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";

export const allSkillsData = [
    {
        groupName: 'Skills Back',
        items: [
            { icon: SiTypescript, name: 'Typescript' },
            { icon: SiJavascript, name: 'Javascript' },
            { icon: FaNodeJs, name: 'Node.Js' },
            { icon: TbBrandCSharp, name: 'C Sharp' },
            { icon: SiPhp, name: 'Php' },
            { icon: SiPostgresql, name: 'Postgresql' },
            { icon: SiMysql, name: 'Mysql' },
            { icon: SiMongodb, name: 'MongoDB' },
            { icon: DiMsqlServer, name: 'Sql Server' },
        ]
    },
    {
        groupName: 'Skills Front',
        items: [
            { icon: FaReact, name: 'React' },
            { icon: SiHtml5, name: 'Html' },
            { icon: SiCss3, name: 'Css' },
            { icon: SiTypescript, name: 'Typescript' },
            { icon: SiJavascript, name: 'Javascript' },
            { icon: SiTailwindcss, name: 'Tailwindcss' },
            { icon: SiFramer, name: 'Framer Motion' },
            { icon: SiBootstrap, name: 'Bootstrap' },
            { icon: FaLaravel, name: 'Laravel' },
        ]
    },
    {
        groupName: 'Skills Software',
        items: [
            { icon: BiLogoVisualStudio, name: 'VS Code' },
            { icon: DiVisualstudio, name: 'Visual Studio' },
            { icon: SiFigma, name: 'Figma' },
            { icon: SiAdobephotoshop, name: 'Photoshop' },
            { icon: SiAdobeillustrator, name: 'Illustrator' },
            { icon: TbBrandOffice, name: 'Office' },

        ]
    },
    {
        groupName: 'Skills Soft',
        items: [
            { icon: FaUsers, name: 'Trabajo en Equipo' },
            { icon: FaComments, name: 'Comunicación' },
            { icon: FaRegCalendarAlt, name: 'Organización' },
            { icon: FaLightbulb, name: 'Resolución de Problemas' },
            { icon: FaGraduationCap, name: 'Aprendizaje y Adaptación' },
        ]
    }
];

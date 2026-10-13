import { StaticImageData } from "next/image";
import { zinclas, adox, api, mp, pos } from "@/assets/background/index.bg";
import { SITE_CONFIG as cfg } from "@/config";

export type ProjectVariant = "der" | "izq";

export interface Project {
    id: string;
    number: string;
    title: string;
    role: string;
    variant: ProjectVariant;
    tech: string[];
    description: string;
    image: StaticImageData;
    githubUrl?: string;
    demoUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
    {
        id: "zinclas",
        number: "1",
        title: "Zinclas",
        role: "Ganador ExpoProyecto 2025 - UNLaM",
        variant: "der",
        tech: ["C#", "SQL Server", "React", "TypeScript"],
        description: "Gestión de Tareas Administrativas + Chat Interno de comunicación laboral.",
        image: zinclas,
        githubUrl: cfg.repo.Portfolio,
        demoUrl: cfg.demos.demoX,
    },
    {
        id: "crud-page",
        number: "2",
        title: "ACCESS PASS",
        role: "Fullstack Developer",
        variant: "izq",
        tech: ["React", "Node.js", "Express", "MySQL"],
        description: "Página de gestión de empleados realizada durante mi pasantía en Adox S.A.",
        image: adox,
        githubUrl: cfg.repo.AccessPass,
        demoUrl: cfg.demos.demoX,
    },
    {
        id: "rest-api",
        number: "3",
        title: "REST API",
        role: "Backend Developer",
        variant: "der",
        tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
        description: "API para consultar y manipular información de películas.",
        image: api,
        githubUrl: cfg.repo.Portfolio,
    },
    {
        id: "mp-api",
        number: "4",
        title: "MP API",
        role: "Backend Developer",
        variant: "izq",
        tech: ["Node.js", "Mercado Pago API", "Express"],
        description: "Integración de la API de Mercado Pago para compras online.",
        image: mp,
        githubUrl: cfg.repo.Portfolio,
    },
    {
        id: "chacamarket",
        number: "5",
        title: "CHACAMARKET",
        role: "Proyecto Técnico High School",
        variant: "der",
        tech: ["C#", "SQL Server", "Python", "OpenCV"],
        description: "Solución pensada para kioscos: cobranzas fáciles, control de artículos, proveedores y cierre de caja, todo en un mismo lugar.",
        image: pos,
        githubUrl: cfg.repo.Portfolio,
    },
];

/* SITIOS WEB */

export const SITE_CONFIG = {
    name: "David Tejedor",
    role: "Desarrollador Fullstack",
    email: "davidtejedor10@gmail.com",
    cvPath: "/David-Tejedor-CV.pdf",
    socials: {
        github: "https://github.com/daviddtejedor",
        linkedin: "https://www.linkedin.com/in/daviddtejedor",
        instagram: "https://www.instagram.com/daviddtejedor",
    },
    repo: {
        repoX: "https://github.com/daviddtejedor/...",
    },
    demos: {
        demoX: "https.//...",
    }
};

/* lOGROS */

export const ACHIEVEMENTS = [
    "1° Promedio en la Tecnicatura de Programación.",
    "Premio a la Originalidad e Innovación (UNLaM)",
    "Pasantía Profesional en Adox S.A. (+400hs)",
];

/* TEMA DE LA PÁGINA */

export type SkillThemeColor = "blue" | "purple" | "amber" | "emerald" | "yellow";

export interface ThemeStyle {
    border: string;
    gradient: string;
    iconBg: string;
    iconBorder: string;
    iconText: string;
    subtitleText: string;
}

export const THEME_STYLES: Record<SkillThemeColor, ThemeStyle> = {
    blue: {
        border: "border-blue-500/30",
        gradient: "from-blue-900/40 via-zinc-950/80 to-zinc-950/90",
        iconBg: "bg-blue-500/10",
        iconBorder: "border-blue-500/30",
        iconText: "text-blue-500",
        subtitleText: "text-blue-400/80",
    },
    purple: {
        border: "border-purple-500/30",
        gradient: "from-purple-900/40 via-zinc-950/80 to-zinc-950/90",
        iconBg: "bg-purple-500/10",
        iconBorder: "border-purple-500/30",
        iconText: "text-purple-500",
        subtitleText: "text-purple-400/80",
    },
    amber: {
        border: "border-amber-500/30",
        gradient: "from-amber-900/40 via-zinc-950/80 to-zinc-950/90",
        iconBg: "bg-amber-500/10",
        iconBorder: "border-amber-500/30",
        iconText: "text-amber-500",
        subtitleText: "text-amber-400/80",
    },
    emerald: {
        border: "border-emerald-500/30",
        gradient: "from-emerald-900/40 via-zinc-950/80 to-zinc-950/90",
        iconBg: "bg-emerald-500/10",
        iconBorder: "border-emerald-500/30",
        iconText: "text-emerald-500",
        subtitleText: "text-emerald-400/80",
    },
    yellow: {
        border: "border-yellow-500/30",
        gradient: "from-yellow-900/40 via-zinc-950/80 to-zinc-950/90",
        iconBg: "bg-yellow-500/10",
        iconBorder: "border-yellow-500/30",
        iconText: "text-yellow-500",
        subtitleText: "text-yellow-400/80",
    },
};
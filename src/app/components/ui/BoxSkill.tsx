import { allSkillsData } from "@/data/allSkills";
import { motion } from "framer-motion";
import { ElementType } from "react";

type SkillProps = {
    variant: "soft" | "software" | "front" | "back";
    MeOrSkill?: "me" | "skill";
};

export default function Skill({ variant, MeOrSkill = "me" }: SkillProps) {
    let typeSkills: { icon: ElementType; name: string }[] | undefined;

    if (variant === "soft") {
        typeSkills = allSkillsData.find((group) => group.groupName === "Skills Soft")?.items;
    } else if (variant === "software") {
        typeSkills = allSkillsData.find((group) => group.groupName === "Skills Software")?.items;
    } else if (variant === "front") {
        typeSkills = allSkillsData.find((group) => group.groupName === "Skills Front")?.items;
    } else if (variant === "back") {
        typeSkills = allSkillsData.find((group) => group.groupName === "Skills Back")?.items;
    }

    // Definir color de bordes y sombras según la variante
    const getVariantStyles = () => {
        switch (variant) {
            case "back":
                return "border-blue-500/20 bg-blue-950/20 text-blue-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:bg-blue-900/30";
            case "front":
                return "border-purple-500/20 bg-purple-950/20 text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:bg-purple-900/30";
            default:
                return "border-white/20 bg-white/5 text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white/10";
        }
    };

    const cardStyles = getVariantStyles();

    return (
        <div
            className={`grid gap-2.5 ${MeOrSkill === "me"
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                }`}
        >
            {typeSkills?.map((item) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.name}
                        className={`flex flex-col text-center items-center justify-center p-2.5 md:p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${cardStyles}`}
                        initial={{ scale: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                        <Icon className="text-xl md:text-2xl mb-1 shrink-0" />
                        <span className="text-white/90 text-[10px] md:text-xs font-medium select-none text-center leading-tight text-balance w-full px-1">
                            {item.name}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}
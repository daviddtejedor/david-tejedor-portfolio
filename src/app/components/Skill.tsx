import { allSkillsData } from "@/app/data/allSkillsData";
import { motion } from "framer-motion";

type SkillProps = {
    variant: "soft" | "software" | "front" | "back";
    MeOrSkill?: "me" | "skill";
};

export default function Skill({ variant, MeOrSkill = "me" }: SkillProps) {
    let typeSkills: { icon: any; name: string }[] | undefined;

    if (variant === "soft") {
        typeSkills = allSkillsData.find(group => group.groupName === "Skills Soft")?.items;
    } else if (variant === "software") {
        typeSkills = allSkillsData.find(group => group.groupName === "Skills Software")?.items;
    } else if (variant === "front") {
        typeSkills = allSkillsData.find(group => group.groupName === "Skills Front")?.items;
    } else if (variant === "back") {
        typeSkills = allSkillsData.find(group => group.groupName === "Skills Back")?.items;
    }

    return (
        <div className={`grid gap-2 md:gap-4 ${MeOrSkill === "me" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
            {typeSkills?.map(item => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.name}
                        className="flex flex-col text-center items-center justify-center p-4 rounded-xl border
                        border-white/50 transition-all duration-300 hover:bg-black/20 hover:[backdrop-filter:blur(10px)] hover:shadow-md hover:shadow-white/50"
                        initial={{ scale: 1, y: 0 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.1, ease: "backInOut" }}
                    >
                        <Icon className="w-4 md:w-8 h-auto mt-1" />
                        <span className="text-white text-xs md:text-sm font-medium select-none">{item.name}</span>
                    </motion.div>
                );
            })}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { SplitText, CardSkill, BoxSkill } from "@/app/components/ui/index.ui";
import { SKILLS_SECTIONS } from "@/data/skillsData";

export default function Skills() {
    return (
        <section id="habilidades" className="mt-20 md:mt-40 relative pt-20 overflow-clip">
            <SplitText
                text="Habilidades"
                className="text-center text-5xl md:text-9xl font-mont font-extrabold text-white uppercase mb-20"
            />

            <div className="relative flex flex-col gap-20">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-4 justify-center gap-6 md:gap-10 mx-auto items-stretch">
                    {SKILLS_SECTIONS.map((section) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <CardSkill
                                title={section.title}
                                subtitle={section.subtitle}
                                description={section.description}
                                Icon={section.Icon}
                                color={section.color}
                            >
                                <BoxSkill variant={section.variant} MeOrSkill="skill" />
                            </CardSkill>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";

import { SplitText, CardProject } from "@/app/components/ui/index.ui";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function Projects() {
    return (
        <section id="proyectos" className="mt-40 relative pt-20">
            <SplitText
                text="Proyectos"
                className="text-center text-5xl md:text-9xl font-mont font-extrabold text-white uppercase mb-5"
            />

            <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-20">
                {PROJECTS_DATA.map((project) => (
                    <CardProject
                        key={project.id}
                        variant={project.variant}
                        number={project.number}
                        title={project.title}
                        role={project.role}
                        tech={project.tech}
                        description={project.description}
                        image={project.image}
                        githubUrl={project.githubUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </section>
    );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

import MeImage from "@/assets/IMGME.png";
import { SplitText, Btn } from "@/app/components/ui/index.ui";
import { SITE_CONFIG as cfg, ACHIEVEMENTS as achi } from "@/config";

export default function AboutMe() {
    return (
        <section id="sobre_mi" className="relative pt-20 max-w-7xl mx-auto px-4 sm:px-6">
            <SplitText
                text="Sobre Mi"
                className="text-center text-5xl md:text-9xl font-mont font-extrabold text-white uppercase mb-12 tracking-tight"
            />

            <div className="flex flex-col gap-8">
                {/* FILA 1: Presentación + Foto */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="space-y-2">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-mont font-extrabold text-white leading-tight">
                                {cfg.role}
                            </h3>
                        </div>

                        <p className="text-white font-inter text-base md:text-lg leading-relaxed text-pretty font-light text-shadow-lg">
                            Estudiante de Ingeniería Informática enfocado en desarrollar soluciones de software de alto impacto. Me apasiona descomponer problemas complejos para transformarlos en aplicaciones web escalables, combinando arquitecturas backend sólidas con experiencias de usuario cuidadas.
                        </p>

                        <p className="text-white/80 font-inter text-sm md:text-base leading-relaxed text-pretty font-light text-shadow-lg">
                            Mi objetivo es aportar valor real a negocios y equipos tecnológicos mediante un enfoque pragmático, buenas prácticas de código y aprendizaje continuo.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4 items-center">
                            <Btn
                                title="Descargar CV"
                                href={cfg.cvPath}
                                isDownload
                            />
                            <Btn
                                title="Contactame"
                                href={cfg.socials.linkedin}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-5 w-full relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-md shadow-2xl aspect-4/3 lg:aspect-square group"
                    >
                        <Image
                            src={MeImage}
                            alt="David Tejedor - Desarrollador Fullstack"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                {/* FILA 2: Logros & Certificaciones */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="p-8 md:p-10 rounded-[2.5rem] border border-yellow-500/30 bg-linear-to-br from-yellow-900/40 via-zinc-950/80 to-zinc-950/90 backdrop-blur-md flex flex-col justify-between group relative overflow-hidden shadow-2xl space-y-6"
                >
                    <div className="absolute text-yellow-500 -right-10 -top-10 text-[13rem] opacity-[0.08] group-hover:opacity-25 group-hover:scale-110 transition-all duration-500 rotate-12 pointer-events-none">
                        <FaTrophy />
                    </div>

                    <div className="flex items-center gap-4 mb-2 relative z-10">
                        <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/30 shadow-2xl shrink-0">
                            <FaTrophy className="text-3xl text-yellow-500" />
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-white font-mont">
                                Reconocimientos & Certificaciones
                            </h4>
                            <p className="text-yellow-400/80 text-xs md:text-sm font-medium font-mono">
                                Hitos académicos y experiencia profesional.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 relative z-10">
                        {achi.map((achievement, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-4 rounded-2xl border border-yellow-500/20 bg-yellow-950/20 text-yellow-100/90 text-sm font-inter hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.35)] hover:bg-yellow-900/30 transition-all duration-300"
                            >
                                <span className="font-medium">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
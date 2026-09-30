"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Btn from "./Btn";

type Props = {
    variant?: "izq" | "der";
    number: string;
    title: string;
    role?: string;
    description: React.ReactNode;
    tech?: string[];
    image: StaticImageData;
    githubUrl?: string;
    demoUrl?: string;
};

// 1. Variantes de animación para el TEXTO
const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hiddenRight: { opacity: 0, x: 50 },
    visibleRight: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },

    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    exitRight: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

// 2. Variantes de animación para la IMAGEN
const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    hiddenLeft: { opacity: 0, x: -50 },
    visibleLeft: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },

    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
    exitLeft: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

export default function CardProject({
    variant = "izq",
    number,
    title,
    role,
    description,
    tech = [],
    image,
    githubUrl = "#",
    demoUrl,
}: Props) {
    const isTextOnLeft = variant === "izq";

    // Estados de destino (Entrada)
    const enterTextState = isTextOnLeft ? "visible" : "visibleRight";
    const enterImageState = isTextOnLeft ? "visible" : "visibleLeft";

    // Estados de destino (Salida)
    const exitTextState = isTextOnLeft ? "exit" : "exitRight";
    const exitImageState = isTextOnLeft ? "exit" : "exitLeft";

    // Estados Iniciales
    const initialTextState = isTextOnLeft ? "hidden" : "hiddenRight";
    const initialImageState = isTextOnLeft ? "hidden" : "hiddenLeft";

    // Hooks de estado para Framer Motion
    const [animateStateText, setAnimateStateText] = useState(initialTextState);
    const [animateStateImage, setAnimateStateImage] = useState(initialImageState);

    return (
        <div
            className={`relative overflow-x-hidden flex flex-col-reverse items-center justify-between gap-8 md:gap-12 px-4 md:mx-20 ${isTextOnLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Contenido del Proyecto */}
            <motion.div
                variants={textVariants}
                initial={initialTextState}
                animate={animateStateText}
                onViewportEnter={() => setAnimateStateText(enterTextState)}
                onViewportLeave={() => setAnimateStateText(exitTextState)}
                viewport={{ once: false, amount: 0.3 }}
                className={`w-full md:w-1/2 flex flex-col justify-center space-y-4 ${isTextOnLeft ? "text-left items-start" : "text-right items-end"
                    }`}
            >
                {/* Número + Subtítulo / Role */}
                <div className="flex items-center gap-3">
                    <span className="text-[#ff2a40] text-sm md:text-base font-mono font-bold">
                        # {number}
                    </span>
                    {role && (
                        <span className="text-gray-300 text-xs md:text-sm uppercase tracking-widest font-mono">
                            | {role}
                        </span>
                    )}
                </div>

                {/* Título */}
                <h3 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight uppercase font-mont">
                    {title}
                </h3>

                {/* Badges de Tecnologías */}
                {tech.length > 0 && (
                    <div
                        className={`flex flex-wrap gap-2 pt-1 ${isTextOnLeft ? "justify-start" : "justify-end"
                            }`}
                    >
                        {tech.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] font-mono border border-blue-500/30 text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded tracking-widest uppercase"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Descripción / Historia */}
                <div className="text-gray-100 font-inter text-shadow-lg text-sm md:text-base leading-relaxed max-w-xl italic pt-2">
                    {description}
                </div>

                {/* Enlaces a Código / Demo en vivo usando Liquid Glass Btn */}
                <div className={`flex flex-wrap gap-4 pt-4 ${isTextOnLeft ? "justify-start" : "justify-end"}`}>
                    {githubUrl && (
                        <Btn
                            title="Código"
                            href={githubUrl}
                            icon={<FiGithub />}
                        />
                    )}
                    {demoUrl && (
                        <Btn
                            title="Demo en vivo"
                            href={demoUrl}
                            icon={<FiExternalLink />}
                        />
                    )}
                </div>
            </motion.div>

            {/* Imagen con efecto de Hover */}
            <motion.div
                variants={imageVariants}
                initial={initialImageState}
                animate={animateStateImage}
                onViewportEnter={() => setAnimateStateImage(enterImageState)}
                onViewportLeave={() => setAnimateStateImage(exitImageState)}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full md:w-1/2 flex justify-center items-center"
            >
                <div className="w-full group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-video shadow-2xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
}
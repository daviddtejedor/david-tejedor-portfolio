"use client"; // Es fundamental para que los hooks como useState y las funciones de Framer Motion funcionen

import React, { useState } from "react"; // Importa useState
import Image, { StaticImageData } from "next/image";
import { Btn } from "./index.components"; // Asumiendo que Btn está en el mismo nivel o es accesible
import { motion, Variants } from "framer-motion";

type Props = {
    variant?: "izq" | "der";
    number: string;
    title: string;
    description: string;
    image: StaticImageData;
};

// 1. Definición de las variantes de animación para el TEXTO
const textVariants: Variants = {
    // Estado de entrada
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hiddenRight: { opacity: 0, x: 50 },
    visibleRight: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },

    // Nuevo estado de salida (más lento: 0.5s)
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    exitRight: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

// 2. Definición de las variantes de animación para la IMAGEN
const imageVariants: Variants = {
    // Estado de entrada
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    hiddenLeft: { opacity: 0, x: -50 },
    visibleLeft: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },

    // Nuevo estado de salida (más lento: 0.5s)
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
    exitLeft: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};


export default function CardProject({ variant = "izq", number, title, description, image }: Props) {
    const isTextOnLeft = variant === "izq";

    // --- VARIABLES DE ESTADO DE ANIMACIÓN (COINCIDEN CON NOMBRES DE VARIANTS) ---

    // 1. Estados de destino (Entrada)
    // El texto entra desde IZQ si isTextOnLeft=true, o desde DER si isTextOnLeft=false
    const enterTextState = isTextOnLeft ? "visible" : "visibleRight";
    // La imagen entra desde DER si isTextOnLeft=true, o desde IZQ si isTextOnLeft=false
    // (Asumo que cuando el texto está a la IZQ, la imagen está a la DER, y viceversa)
    const enterImageState = isTextOnLeft ? "visible" : "visibleLeft";

    // 2. Estados de destino (Salida)
    const exitTextState = isTextOnLeft ? "exit" : "exitRight";
    const exitImageState = isTextOnLeft ? "exit" : "exitLeft";

    // 3. Estados Iniciales (Antes de entrar al viewport)
    const initialTextState = isTextOnLeft ? "hidden" : "hiddenRight";
    const initialImageState = isTextOnLeft ? "hidden" : "hiddenLeft";

    // --- HOOKS DE ESTADO DE REACT ---
    // Usamos useState para controlar el estado actual de la animación (initial, visible, o exit)
    const [animateStateText, setAnimateStateText] = useState(initialTextState);
    const [animateStateImage, setAnimateStateImage] = useState(initialImageState);

    return (
        <div
            className={`relative overflow-x-hidden flex flex-col-reverse md:flex-col items-center justify-between gap-8 md:gap-12 px-4 md:mx-20 ${isTextOnLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            <motion.div
                variants={textVariants}
                initial={initialTextState}
                animate={animateStateText}
                onViewportEnter={() => setAnimateStateText(enterTextState)}
                onViewportLeave={() => setAnimateStateText(exitTextState)}
                viewport={{ once: false, amount: 0.5 }}
                className={`w-full md:w-3/4 flex flex-col justify-center h-full ${isTextOnLeft ? "text-left items-start" : "text-right items-end"}`}
            >
                <span className="text-[#960000] text-lg font-medium font-mont mb-2"># {number}</span>
                <h2 className="text-white text-5xl md:text-7xl font-bold font-mont mb-2 leading-tight uppercase">{title}</h2>
                <p className="text-white/80 font-inter font-light text-sm max-w-xl mb-5">{description}</p>
                <Btn
                    title="contactame"
                    href="https://www.linkedin.com/in/david-tejedor-0178832b3"
                />
            </motion.div>

            <motion.div
                variants={imageVariants}
                initial={initialImageState}
                animate={animateStateImage}
                onViewportEnter={() => setAnimateStateImage(enterImageState)}
                onViewportLeave={() => setAnimateStateImage(exitImageState)}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full md:w-1/2 flex justify-center items-center"
            >
                <div className="w-sm md:w-xl h-45 md:h-75 relative">
                    <Image src={image} alt={title} fill className="object-cover rounded-md bg-white" />
                </div>
            </motion.div>

        </div>
    );
}
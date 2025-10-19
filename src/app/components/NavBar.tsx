"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
    return (
        <div className="fixed top-0 w-full left-0 z-50 flex justify-center p-6">
            <SlideTabs />
        </div>
    );
}

const SlideTabs = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative flex w-fit rounded-full border border-white bg-black/60 backdrop-blur-xs p-0.5 md:p-1"
        >
            <Tab setPosition={setPosition} href="#inicio">Inicio</Tab>
            <Tab setPosition={setPosition} href="#sobre_mi">Sobre Mi</Tab>
            <Tab setPosition={setPosition} href="#habilidades">Habilidades</Tab>
            <Tab setPosition={setPosition} href="#proyectos">Proyectos</Tab>
            <Tab setPosition={setPosition} href="#contacto">Contacto</Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({
    children,
    setPosition,
    href
}: {
    children: React.ReactNode;
    setPosition: Dispatch<SetStateAction<Position>>;
    href: string;
}) => {
    const ref = useRef<HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            // 💡 CLAVE: El li debe seguir siendo el elemento de referencia
            // Lo hacemos relativo y le quitamos los padding y clases de texto
            // El padding y las clases de texto se van al <a>
            className="relative z-10 mix-blend-difference"
        >
            {/* 💡 CORRECCIÓN 1: El enlace <a> envuelve todo y define la apariencia y área de clic */}
            <a
                href={href}
                // Usamos z-20 para estar encima del cursor (z-0)
                className="block cursor-pointer z-10 text-[8px] uppercase text-white px-2 py-1 md:px-3 md:py-1.5 md:text-xs"
            >
                {/* 💡 CORRECCIÓN 2: El texto va directamente dentro del <a> */}
                {children}
            </a>
        </li>
    );
};

const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={position}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute z-0 h-[20px] md:h-7 rounded-full bg-white" />
    );
};

type Position = {
    left: number;
    width: number;
    opacity: number;
};

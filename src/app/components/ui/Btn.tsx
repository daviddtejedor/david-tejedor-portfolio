"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";

type BtnProps = {
    title: string;
    href: string;
    isDownload?: boolean;
    icon?: React.ReactNode; // <-- Cambiamos IconType por React.ReactNode
};

export default function Btn({
    title,
    href,
    isDownload = false,
    icon,
}: BtnProps) {
    const downloadFileName = isDownload ? "David-Tejedor-CV.pdf" : undefined;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={downloadFileName}
            className="
            group relative inline-flex items-center justify-center gap-2.5
            px-5 py-2.5 rounded-2xl cursor-pointer overflow-hidden
            font-mont font-bold text-xs md:text-sm tracking-wider uppercase text-white
            
            /* EFECTO LIQUID GLASS BASE */
            bg-linear-to-br from-white/10 via-white/3 to-transparent
            backdrop-blur-xl
            border border-white/20
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_32px_0_rgba(0,0,0,0.37)]
            
            /* HOVER Y TRANSICIONES */
            transition-all duration-300 ease-out
            hover:border-red-500/60
            hover:bg-linear-to-br hover:from-red-500/20 hover:via-red-950/30 hover:to-black/40
            hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_0_25px_rgba(239,68,68,0.5)]
          "
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
        >
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Renderizado de ícono personalizado o fallback */}
            {icon ? (
                <span className="relative z-10 text-base text-red-400 group-hover:text-white transition-colors duration-300 shrink-0 flex items-center justify-center">
                    {icon}
                </span>
            ) : isDownload ? (
                <FiDownload className="relative z-10 text-base text-red-400 group-hover:text-white transition-colors duration-300 shrink-0" />
            ) : (
                <FiArrowUpRight className="relative z-10 text-base text-red-400 group-hover:text-white transition-colors duration-300 shrink-0" />
            )}

            <span className="relative z-10 drop-shadow-md">{title}</span>
        </motion.a>
    );
}
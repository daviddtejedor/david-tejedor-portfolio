"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa6";
import { FiGitBranch, FiMapPin } from "react-icons/fi";
import { Network } from "@/app/components/ui/index.ui";
import { SITE_CONFIG as cfg } from "@/config";

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const email = "davidtejedor10@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="relative z-10 border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl mt-32 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* COLUMNA 1: Nombre + Status de Disponibilidad */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                    <h3 className="text-xl font-mont font-extrabold text-white uppercase tracking-wider">
                        David Tejedor
                    </h3>

                    {/* Badge de Disponibilidad */}
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Disponible para nuevos proyectos</span>
                    </div>
                </div>

                {/* COLUMNA 2: Email con botón para copiar + Ubicación */}
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <button
                        onClick={handleCopyEmail}
                        className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-red-500/40 hover:bg-red-950/20 transition-all text-xs font-mono cursor-pointer"
                        title="Copiar email al portapapeles"
                    >
                        <FaEnvelope className="text-red-500" />
                        <span>{email}</span>
                        {copied ? (
                            <FaCheck className="text-emerald-400 text-xs" />
                        ) : (
                            <FaCopy className="text-gray-500 group-hover:text-white transition-colors text-xs" />
                        )}
                    </button>

                    {copied && (
                        <span className="text-[10px] font-mono text-emerald-400 animate-fade-in">
                            ¡Email copiado al portapapeles!
                        </span>
                    )}

                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono pt-1">
                        <FiMapPin className="text-red-400" />
                        <span>Buenos Aires, Argentina</span>
                    </div>
                </div>

                {/* COLUMNA 3: Redes + Link al Repo */}
                <div className="flex flex-col items-center md:items-end justify-center space-y-3">
                    <div className="flex items-center gap-3">
                        <Network
                            Icon={FaGithub}
                            href={cfg.socials.github}
                            label="GitHub Profile"
                        />
                        <Network
                            Icon={FaLinkedin}
                            href={cfg.socials.linkedin}
                            label="LinkedIn Profile"
                        />
                        <Network
                            Icon={FaInstagram}
                            href={cfg.socials.instagram}
                            label="Instagram Profile"
                        />
                    </div>

                    {/* Repo Open Source */}
                    <a
                        href={cfg.repo.Portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        <FiGitBranch className="text-xs text-red-500" />
                        <span>código fuente en GitHub</span>
                    </a>
                </div>

            </div>

            {/* Copyright Limpio */}
            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-gray-600 font-mono">
                © {new Date().getFullYear()} David Tejedor.
            </div>
        </footer>
    );
}
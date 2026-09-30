"use client";

import React from "react";
import { THEME_STYLES, SkillThemeColor } from "@/config/index";

type CardSkillProps = {
    title: string;
    subtitle?: string;
    description?: string;
    Icon: React.ReactNode;
    color?: SkillThemeColor;
    children?: React.ReactNode;
};

export default function CardSkill({
    title,
    subtitle,
    description,
    Icon,
    color = "blue",
    children,
}: CardSkillProps) {
    const theme = THEME_STYLES[color];

    return (
        <div
            className={`p-8 md:p-10 rounded-[2.5rem] border ${theme.border} bg-linear-to-br ${theme.gradient} backdrop-blur-md flex flex-col justify-between group relative overflow-hidden shadow-2xl h-full`}
        >
            {/* Ícono de fondo (marca de agua) */}
            <div
                className={`absolute ${theme.iconText} -right-10 -top-10 text-[13rem] opacity-[0.08] group-hover:opacity-25 group-hover:scale-110 transition-all duration-500 rotate-12 pointer-events-none [&>svg]:w-full [&>svg]:h-full`}
            >
                {Icon}
            </div>

            <div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    {/* Contenedor del ícono principal */}
                    <div
                        className={`p-3 ${theme.iconBg} rounded-2xl border ${theme.iconBorder} shadow-2xl shrink-0 text-3xl ${theme.iconText}`}
                    >
                        {Icon}
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold tracking-tight text-white">{title}</h3>
                        {subtitle && (
                            <p className={`${theme.subtitleText} font-medium text-sm`}>{subtitle}</p>
                        )}
                    </div>
                </div>

                {description && (
                    <p className="text-gray-300 max-w-xl leading-relaxed mb-8 font-light text-sm md:text-base relative z-10">
                        {description}
                    </p>
                )}
            </div>

            <div className="relative z-10">{children}</div>
        </div>
    );
}
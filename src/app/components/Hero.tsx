"use client";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { SplitText, Network } from "@/app/components/ui/index.ui";
import { SITE_CONFIG as cfg } from '@/config/index';

export default function Hero() {
    return (
        <section id="inicio" className="relative">
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                <SplitText
                    text={cfg.role}
                    className="text-[10px] md:text-xs font-inter font-bold tracking-[0.35em] text-red-500 uppercase drop-shadow-[0_0_12px_rgba(255,20,50,0.6)]"
                />

                <h1 className="text-6xl text-center md:text-8xl font-mont font-extrabold text-white leading-none uppercase">
                    {cfg.name}
                </h1>

                <div className="flex flex-row gap-8 mt-4">
                    <Network
                        Icon={AiFillGithub}
                        href={cfg.socials.github}
                        label="GitHub Profile"
                    />
                    <Network
                        Icon={AiFillLinkedin}
                        href={cfg.socials.linkedin}
                        label="LinkedIn Profile"
                    />
                    <Network
                        Icon={AiFillInstagram}
                        href={cfg.socials.instagram}
                        label="Instagram Profile"
                    />
                </div>
            </div>
        </section>
    );
}
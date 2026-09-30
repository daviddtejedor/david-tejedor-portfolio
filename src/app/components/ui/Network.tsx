import { motion } from 'framer-motion';
import React from 'react';
import { IconType } from 'react-icons';

interface SocialIconProps {
    Icon: IconType;
    href: string;
    label: string;
}

export default function Network({ Icon, href, label }: SocialIconProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <motion.div
                className="border border-white/50 p-[5px] rounded-[10px] backdrop-blur-[10px] transition-all duration-300 
                        hover:bg-black/20 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                initial={{ scale: 1, y: 0 }}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.15, ease: "backInOut" }}
            >
                <div className="w-auto h-auto rounded-[10px] flex items-center justify-center bg-transparent">
                    <Icon className="text-white" size={30} />
                </div>
            </motion.div>
        </a>
    );
}
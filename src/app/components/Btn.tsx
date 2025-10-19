// Btn.tsx

import { motion } from 'framer-motion';
import './btn.css'

type BtnProps = {
    title: string;
    href: string;
    isDownload?: boolean;
}

export default function Btn({ title, href, isDownload = false }: BtnProps) {

    const downloadFileName = isDownload ? 'David-Tejedor-CV.pdf' : undefined;

    return (
        <motion.a
            href={href}
            target="_blank"
            download={downloadFileName}

            className="neon-button uppercase font-mont font-semibold text-sm md:text-lg text-white px-6 py-4 rounded-xl cursor-pointer z-0"
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {title}
        </motion.a>
    )
}
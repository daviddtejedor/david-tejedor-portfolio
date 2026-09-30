import { motion, type Variants } from "framer-motion";

type props = {
    text: string;
    className: string
}

// A. Variants para el Elemento Móvil (la letra)
const childVariants: Variants = {
    // Estado Inicial (Oculto): Posición 100% abajo (fuera de la máscara)
    initial: {
        y: "-100%",
        opacity: 0,
    },
    // Estado Final (Visible): Posición 0% (dentro de la máscara)
    animate: {
        y: "0%",
        opacity: 1,
        transition: {
            ease: "backOut",
            duration: 0.5,
        }
    }
};

// B. Variants para el Contenedor Principal (la palabra completa)
const containerVariants = {
    // Estado inicial (necesario para el 'initial' de Framer Motion)
    initial: {},

    // Estado 'animate' (orquestación)
    animate: {
        transition: {
            // 👈 CLAVE: Define el retraso entre la animación de cada letra
            staggerChildren: 0.03, // 30 milisegundos de retraso entre cada hijo
            delayChildren: 0.4,    // Retraso para que inicie la primera letra
        }
    }
};

export default function SplitText({ text, className }: props) {

    const letters = text.split('')

    return (
        <motion.h2
            className={className}
            style={{ overflow: "hidden" }} // Estilo clave para el layout
            variants={containerVariants}
            initial="initial"
            whileInView="animate" // 👈 Disparo de animación al entrar en vista
            viewport={{ once: false }}
        >
            {letters.map((letter, idx) => (
                // 1. Contenedor Máscara (Exterior): Oculta lo que se sale
                <motion.span
                    key={idx}
                    style={{ overflow: "hidden", display: "inline-block" }}
                >
                    {/* 2. Elemento Móvil (Interior): El que se desliza */}
                    <motion.span
                        variants={childVariants}
                        style={{ display: "inline-block" }}
                    >
                        {/* Truco: Maneja los espacios para que no colapsen */}
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                </motion.span>
            ))}
        </motion.h2>
    )
}
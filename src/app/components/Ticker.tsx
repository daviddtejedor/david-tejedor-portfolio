"use client";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import './ticker.css'

const items = [
    "Despliegue",
    "Desarrollo e Integración de API",
    "Gestión de Bases de Datos",
    "Control de Versiones",
    "Diseño Responsivo",
    "Diseño UI/UX"
];

// Triplicamos el contenido para garantizar un bucle invisible
const repeatedItems = items.concat(items, items);

interface TickerProps {
    reverse?: boolean;
}

export default function Ticker({ reverse = false }: TickerProps) {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null); // Necesario para calcular el ancho
    const speed = 70; // Velocidad en píxeles por segundo

    useEffect(() => {
        if (!containerRef.current) return;

        // 1. Calculamos el ancho de una sola pasada (1/3 del ancho total)
        const fullContentWidth = containerRef.current.scrollWidth / 3;

        // 2. La animación recorre el ancho de DOS conjuntos de ítems para buclear
        const animationDistance = fullContentWidth * 2;

        // 3. Definimos los puntos de inicio y fin
        const from = reverse ? -animationDistance : 0;
        const to = reverse ? 0 : -animationDistance;

        // 4. La duración se calcula en base a la distancia para mantener la velocidad constante
        const duration = animationDistance / speed;

        x.set(from); // Establece la posición inicial

        const controls = animate(x, to, {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
        });

        return () => controls.stop();
        // El bucle se re-ejecuta solo si la dirección o velocidad cambian
    }, [x, reverse, speed]);

    return (
        // Contenedor visible: oculta el desbordamiento horizontal
        <div className="overflow-hidden whitespace-nowrap w-full py-2 my-2">
            {/* motion.div: Usa el ref para medir el ancho y el estilo para animar 'x' */}
            <motion.div ref={containerRef} style={{ x }} className="inline-flex">
                {repeatedItems.map((item, idx) => (
                    <div
                        key={idx}
                        // Clases para el estilo de cada ítem
                        className="neon-ticker px-6 py-1.5 mr-4 rounded-lg text-md flex-shrink-0"
                    >
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
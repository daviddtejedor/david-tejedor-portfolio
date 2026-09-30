"use client";

import { Btn } from "@/app/components/ui/index.ui";

export default function Contact() {
    return (
        <section
            id="contacto"
            className="mt-10 md:mt-40 flex flex-col mx-auto px-6 justify-center items-center relative min-h-screen pt-10"
        >
            <div className="max-w-5xl flex flex-col items-center z-10">
                <h2 className="text-center text-4xl md:text-7xl font-mont font-extrabold text-white uppercase mb-1 leading-tight">
                    ¿LISTO PARA IMPULSAR TU TRABAJO?
                </h2>

                <h3 className="text-center text-xs md:text-md font-inter font-light text-white mb-10 max-w-6xl">
                    Cada emprendimiento tiene su historia y su potencial. Mi objetivo es ayudarte a convertir tus ideas en soluciones reales, que tu negocio crezca y destaque en el mercado. Si querés potenciar tu emprendimiento, escribime y veamos cómo podemos hacerlo juntos.
                </h3>

                <Btn
                    title="Comienza Ahora"
                    href="https://www.linkedin.com/in/daviddtejedor"
                />
            </div>
        </section>
    );
}
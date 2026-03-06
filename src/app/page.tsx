"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MeImage from "../assets/ImageMeRecortpng.png"
import { CardSkill, Skill, Btn, Network, CardProject, Ticker, SplitText } from "./components/index.components";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiBrain2Line } from "react-icons/ri";
import { zinclas, adox, api, mp, pos, contactoBG, inicioBG, proyectoBG, sobreMiBG } from "../assets/background/index.bg";
export default function Home() {
  return (
    <>
      <main>
        <section id="inicio" className="relative">
          <Image src={inicioBG} alt="Fondo de la sección Inicio" quality={80} fill priority sizes="(100% 100%)" style={{ zIndex: -1 }} />
          <div className="relative min-h-screen flex flex-col items-center justify-center ">
            <SplitText text="Desarrollador Fullstack" className="text-[10px] md:text-xs font-inter font-light text-white/70 tracking-[0.2em] uppercase" />

            <h1 className=" text-6xl text-center md:text-8xl font-mont font-extrabold text-white leading-none uppercase">
              David Tejedor
            </h1>
            <div className="flex flex-row gap-8 mt-4">
              <Network Icon={AiFillGithub} href="https://github.com/davidtejedor01" label="GitHub Profile" />
              <Network Icon={AiFillLinkedin} href="https://www.linkedin.com/in/david-tejedor-0178832b3" label="LinkedIn Profile" />
              <Network Icon={AiFillInstagram} href="https://www.instagram.com/davidd.tkd" label="Instagram Profile" />
            </div>
          </div>
        </section>

        <section id="sobre_mi" className="relative pt-20">
          <SplitText text="Sobre Mi" className="text-center text-5xl md:text-9xl font-mont font-extrabold text-white uppercase mb-10" />

          <div className="relative flex flex-row max-w-6xl justify-center gap-2 md:gap-10 mx-4 md:mx-auto items-start">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-5 md:gap-10 w-[55%] md:w-1/2 sticky top-20">
              {/* Descripción */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="w-3/4 text-2xl md:text-6xl font-inter font-bold">Desarrollador Fullstack</h3>
                <h4 className="text-inter text-[10px] md:text-lg font-normal text-white/50 mt-2 md:mt-8 text-pretty">
                  Enfocado en entregar resultados funcionales que aporten valor real a proyectos y negocios.
                </h4>
              </motion.div>

              {/* Software Skills */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <CardSkill hasHeader title="SOFTWARE" HeaderIcon={IoIosRocket} bgImage={proyectoBG.src}>
                  <Skill variant="software" />
                </CardSkill>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <CardSkill hasHeader title="HABILIDADES PERSONALES" HeaderIcon={RiBrain2Line} bgImage={contactoBG.src}>
                  <Skill variant="soft" />
                </CardSkill>
              </motion.div>

              {/* Contacto */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <CardSkill variant="contact" hasHeader title="CONTACTO" HeaderIcon={MdEmail} bgImage={inicioBG.src}>
                  <div className="flex flex-col items-center text-center gap-6">
                    <p className="text-white/80 text-sm md:text-lg max-w-xl text-pretty">
                      Si buscas <span className="font-semibold text-white">potenciar tu proyecto</span> o negocio,
                      descarga mi CV completo o presiona <i>Contactame</i> para iniciar una conversación rápida.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                      <Btn
                        title="Descargar CV"
                        href="/David-Tejedor-CV.pdf"
                        isDownload
                      />

                      {/* Botón 2: Para contacto vía LinkedIn */}
                      <Btn
                        title="Contactame"
                        href="https://www.linkedin.com/in/david-tejedor-0178832b3"
                      />
                    </div>
                  </div>
                </CardSkill>
              </motion.div>
            </div>

            {/* Columna derecha → Imagen */}
            <div className="flex justify-center w-1/2 sticky top-20">
              <Image
                src={MeImage}
                alt="Programador Fullstack David, sentado en un restaurante"
                width={520}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="habilidades" className="mt-20 md:mt-40 relative pt-20 overflow-x-hidden">
          <SplitText text="Habilidades" className="text-center text-5xl md:text-9xl font-mont font-extrabold text-white uppercase mb-20" />

          <div className="relative flex flex-col gap-20 ">

            <div className="flex flex-row max-w-6xl justify-center gap-2 md:gap-10 mx-4 md:mx-auto items-stretch">
              {/* Skills Front */}
              <motion.div className="w-1/2"
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-center text-2xl font-inter font-light text-white mb-2">Frontend</h3>
                <CardSkill HeaderIcon={IoIosRocket} bgImage={proyectoBG.src}>
                  <Skill variant="front" MeOrSkill="skill" />
                </CardSkill>
              </motion.div>

              {/* Skills Back */}
              <motion.div className="w-1/2"
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-center text-2xl font-inter font-light text-white mb-2">Backend</h3>
                <CardSkill HeaderIcon={IoIosRocket} bgImage={inicioBG.src}>
                  <Skill variant="back" MeOrSkill="skill" />
                </CardSkill>
              </motion.div>
            </div>

            <div className="w-full mt-4">
              <Ticker reverse={false} />
              <Ticker reverse={true} />
            </div>
          </div>

        </section>

        <section id="proyectos" className="mt-40 relative pt-20"
          style={{
            backgroundImage: `url(${contactoBG.src})`, backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat", backgroundPosition: "center",
          }}
        >
          <SplitText text="Proyectos" className="text-center text-5xl md:text-9xl font-mont font-extrabold text-white uppercase mb-5" />

          <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-20 ">
            <CardProject
              variant="der" number="1" title="zinclas" image={zinclas}
              description={<span>Gestion de Tareas Administrativas + Chat Interno.<br />[Ganador ExpoProyecto 2025 - UNLaM]</span>}
            />
            <CardProject
              variant="izq" number="2" title="CRUD PAGE" image={adox}
              description="Página de gestión de empleados para la empresa Adox S.A."
            />
            <CardProject
              variant="der" number="3" title="REST API" image={api}
              description="API para consultar y manipular información de películas."
            />
            <CardProject
              variant="izq" number="4" title="MP API" image={mp}
              description="Integración de la API de Mercado Pago para compras online."
            />
            <CardProject
              variant="der" number="5" title="CHACAMARKET" image={pos}
              description="Solución pensada para kioscos: cobranzas fáciles, control de artículos, 
                proveedores y cierre de caja, todo en un mismo lugar."
            />
          </div>
        </section>

        <section id="contacto" className="mt-10 md:mt-40 flex flex-col mx-auto px-6 justify-center items-center relative min-h-[450px] pt-10">

          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none mt-30"
            style={{
              backgroundImage: 'radial-gradient(ellipse 50% 100% at 50% 120%, rgba(150,0,0,0.8) 0%, rgba(40,0,0,10) 60%, transparent 100%)',
              opacity: 1,
              width: '100%',
              height: '100%'
            }}
          />

          <div className="max-w-5xl flex flex-col items-center z-10">
            <h2 className="text-center text-4xl md:text-7xl font-mont font-extrabold text-white uppercase mb-1 leading-tight">¿LISTO PARA IMPULSAR TU TRABAJO?</h2>

            <h3 className="text-center text-xs md:text-md font-inter font-light text-white mb-10 max-w-6xl">
              Cada emprendimiento tiene su historia y su potencial. Mi objetivo es ayudarte a convertir tus ideas en soluciones reales, que tu negocio crezca y destaque en el mercado. Si querés potenciar tu emprendimiento, escribime y veamos cómo podemos hacerlo juntos.
            </h3>
            <Btn
              title="Comienza Ahora"
              href="https://www.linkedin.com/in/david-tejedor-0178832b3"
            />
          </div>

        </section>
      </main >
    </>
  );
}


"use client";

import { useEffect, useRef } from "react";

export default function PS3Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        function resize() {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", resize);
        resize();

        // -------------------------------------------------------------
        // PARTÍCULAS / MOTEADO DE LUZ (Efecto PS3 Sparkles)
        // -------------------------------------------------------------
        const PARTICLE_COUNT = 85;
        const particles: SparkleParticle[] = [];

        class SparkleParticle {
            x = 0;
            y = 0;
            size = 0;
            speedY = 0;
            speedX = 0;
            alpha = 0;
            pulseSpeed = 0;
            angle = 0;

            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * width;
                this.y = initial ? Math.random() * height : height + 10;
                this.size = Math.random() * 2.2 + 0.6;
                this.speedY = -(Math.random() * 0.35 + 0.12);
                this.speedX = (Math.random() - 0.5) * 0.25;
                this.alpha = Math.random() * 0.7 + 0.2;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.angle = Math.random() * Math.PI * 2;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.angle) * 0.2;
                this.angle += this.pulseSpeed;

                if (this.y < -10 || this.x < -30 || this.x > width + 30) {
                    this.reset(false);
                }
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                const currentAlpha =
                    this.alpha * (0.6 + Math.sin(this.angle) * 0.4);
                ctx.fillStyle = `rgba(255, 140, 160, ${currentAlpha})`;
                ctx.shadowColor = "rgba(255, 40, 70, 0.9)";
                ctx.shadowBlur = this.size * 4;
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new SparkleParticle());
        }

        // -------------------------------------------------------------
        // CINTAS Y ONDAS PS3 (Curvas Bézier Limpias y Fluidas)
        // -------------------------------------------------------------
        let time = 0;

        const ribbons = [
            {
                speed: 0.002,
                phase: 0.0,
                yStartRatio: 0.62,
                yEndRatio: 0.38,
                thickness: 80,
                colorTop: "rgba(255, 30, 60, 0.22)",
                colorBottom: "rgba(150, 10, 30, 0.0)",
                strokeColor: "rgba(255, 120, 140, 0.85)",
                strokeWidth: 2.2,
                glow: 18,
            },
            {
                speed: 0.0025,
                phase: 1.8,
                yStartRatio: 0.58,
                yEndRatio: 0.42,
                thickness: 110,
                colorTop: "rgba(230, 20, 50, 0.18)",
                colorBottom: "rgba(120, 5, 20, 0.0)",
                strokeColor: "rgba(255, 80, 100, 0.65)",
                strokeWidth: 1.8,
                glow: 14,
            },
            {
                speed: 0.0018,
                phase: 3.4,
                yStartRatio: 0.65,
                yEndRatio: 0.34,
                thickness: 60,
                colorTop: "rgba(255, 90, 40, 0.15)",
                colorBottom: "rgba(180, 15, 25, 0.0)",
                strokeColor: "rgba(255, 180, 150, 0.95)",
                strokeWidth: 2.5,
                glow: 22,
            },
            {
                speed: 0.003,
                phase: 5.1,
                yStartRatio: 0.55,
                yEndRatio: 0.45,
                thickness: 140,
                colorTop: "rgba(200, 10, 40, 0.12)",
                colorBottom: "rgba(80, 0, 10, 0.0)",
                strokeColor: "rgba(255, 50, 80, 0.45)",
                strokeWidth: 1.2,
                glow: 10,
            },
        ];

        function drawRibbon(r: typeof ribbons[0]) {
            if (!ctx) return;
            ctx.save();

            const yStart =
                height * r.yStartRatio +
                Math.sin(time * r.speed + r.phase) * 35;
            const yEnd =
                height * r.yEndRatio +
                Math.cos(time * r.speed * 0.8 + r.phase) * 45;

            const cp1x = width * 0.32;
            const cp1y =
                yStart + Math.sin(time * r.speed * 1.2 + r.phase) * 80 - 40;

            const cp2x = width * 0.68;
            const cp2y =
                yEnd + Math.cos(time * r.speed * 1.1 + r.phase) * 90 + 40;

            const cp1y_bottom = cp1y + r.thickness;
            const cp2y_bottom = cp2y + r.thickness * 0.8;
            const yStart_bottom = yStart + r.thickness * 0.9;
            const yEnd_bottom = yEnd + r.thickness * 0.7;

            const ribbonGrad = ctx.createLinearGradient(
                0,
                yStart,
                0,
                yStart_bottom + 100
            );
            ribbonGrad.addColorStop(0, r.colorTop);
            ribbonGrad.addColorStop(1, r.colorBottom);

            // Relleno de seda
            ctx.beginPath();
            ctx.moveTo(-100, yStart);
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width + 100, yEnd);
            ctx.lineTo(width + 100, yEnd_bottom);
            ctx.bezierCurveTo(
                cp2x,
                cp2y_bottom,
                cp1x,
                cp1y_bottom,
                -100,
                yStart_bottom
            );
            ctx.closePath();

            ctx.fillStyle = ribbonGrad;
            ctx.fill();

            // Trazo de luz superior
            ctx.beginPath();
            ctx.moveTo(-100, yStart);
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width + 100, yEnd);

            ctx.strokeStyle = r.strokeColor;
            ctx.lineWidth = r.strokeWidth;
            ctx.shadowColor = "rgba(255, 30, 60, 0.9)";
            ctx.shadowBlur = r.glow;
            ctx.stroke();

            ctx.restore();
        }

        // -------------------------------------------------------------
        // BUCLE DE RENDERIZADO
        // -------------------------------------------------------------
        function render() {
            if (!ctx) return;
            const bgGradient = ctx.createRadialGradient(
                width * 0.5,
                height * 0.52,
                10,
                width * 0.5,
                height * 0.52,
                Math.max(width, height) * 0.8
            );
            bgGradient.addColorStop(0, "#120206");
            bgGradient.addColorStop(0.5, "#060103");
            bgGradient.addColorStop(1, "#020002");

            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, width, height);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            time += 1;
            ctx.globalCompositeOperation = "screen";

            ribbons.forEach((ribbon) => {
                drawRibbon(ribbon);
            });

            ctx.globalCompositeOperation = "source-over";
            animationFrameId = requestAnimationFrame(render);
        }

        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none block bg-[#020002]"
        />
    );
}
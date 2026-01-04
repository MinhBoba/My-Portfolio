import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: { value: "#0d47a1" }, // Màu nền (bỏ dòng này nếu muốn nền trong suốt đè lên component khác)
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // Di chuột vào hạt sẽ né ra
            resize: { enable: true },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true, // Nối dây giữa các hạt
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            density: { enable: true, width: 800, height: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10" // Class Tailwind để đẩy xuống background
    />
  );
};

export default ParticlesBackground;

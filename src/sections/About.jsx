import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

import Button from '../components/Button.jsx';
import Globe from '../components/Globe.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('sarthak3604@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Sarthak Kumar</p>
              <p className="grid-subtext">
                A final-year CS student specializing in full-stack development and applied AI. I build intelligent, responsive web platforms using React, Node.js, and NLP to deliver impactful user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a versatile stack—including Python, React, and Node.js—enabling me to architect robust, scalable, and AI-integrated solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div ref={ref} className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {inView && (
                <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[10, 10, 10]} intensity={2} />
                  <Globe />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              )}
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Bhopal, MP and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I turn caffeine into clean code and complex bugs into "aha!" moments. For me, programming is essentially a giant digital Lego set—I'm always building, breaking, and learning something new along the way.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">sarthak3604@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
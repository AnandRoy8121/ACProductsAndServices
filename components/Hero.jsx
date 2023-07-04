import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Ac from "components/Ac";
const Hero = () => {
  return (
    <section className="sm:px-8 sm:py-4 px-4 py-2 w-full mx-auto mt-5 flex flex-col sm:flex-row gap-5">
      {/* Left Side */}
      <div className="w-1/3 text-Primary-Color flex flex-col items-center gap-4 sm:gap-4 mx-auto">
        <h2 className="font-semibold text-2xl sm:text-5xl">
          <span className="text-blue-300">
            <span className="text-yellow-200">H</span>eating, <span className="text-yellow-200">V</span>entilation <span>&</span> <span className="text-yellow-200">A</span>ir{" "}
            <span className="text-yellow-200">C</span>onditioning
          </span>
          <span className="text-white"> Designing Experts</span>
        </h2>
        <p className="font-semibold text-sm sm:text-md text-gray-300">
          Stay cool and comfortable all year round with our exceptional AC
          services.
        </p>
      </div>
      {/* Right Side */}
      <div className="w-2/3 mx-auto">
        <Canvas>
          <Stage
            adjustCamera
            intensity={1}
            shadows="contact"
            environment="city"
          >
            <Suspense fallback={null}>
              <Ac />
            </Suspense>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
          {/* <OrbitControls makeDefault/> */}
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

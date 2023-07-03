import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { AnimationClip } from "three/src/animation/AnimationClip"; //Animation types


const Model = () => {
  const gltfRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('scene.gltf', (gltf) => {
      const model = gltf.scene;
      gltfRef.current.add(model);

      // Optional: Customize the position, rotation, or scale of the model.
      // Example: model.position.set(0, 0, 0);

      // Render the scene
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);
      gltfRef.current.appendChild(renderer.domElement);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(model.scene, model.camera);
      };

      animate();
    });
  }, []);

  return <div ref={gltfRef} />;
}

export default Model;
import React from 'react'
import { Canvas } from "react-three-fiber";
import Lights from './Lights';
import Model from './Model';

const ImageCanva = () => {
  return (
    <>
    <Canvas colorManagement camera={{ position: [0, 0, 300] }}>
        <Model/>
      </Canvas>
    </>
  )
}

export default ImageCanva
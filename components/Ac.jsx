/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 ac.gltf --transform
Author: maxsbond.work (https://sketchfab.com/maxsbond.work)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/air-condition-daikin-26b0f7c8472741f4b85b889cf3b1d870
Title: Air condition Daikin
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ac-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.wire_000000000} rotation={[Math.PI / 2, 0, 0]} scale={0.0035} />
    </group>
  )
}

useGLTF.preload('/ac-transformed.glb')

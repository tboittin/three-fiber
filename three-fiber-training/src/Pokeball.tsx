import * as THREE from 'three' //npm install @types/three accès aux types
import { useRef, useState } from 'react'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Pokeball(props: ThreeElements['mesh']) {

  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>(null!)

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta*25))
  useFrame((state, delta) => (meshRef.current.rotation.y += delta*25))

const {scene} = useGLTF('/pokeball_gltf/scene.gltf')

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? .5 : .075}
      onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <primitive object={scene} />
    </mesh>
  )
}
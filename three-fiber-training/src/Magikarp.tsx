import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber'

function Magikarp(props: ThreeElements['mesh']) {
  const { scene } = useGLTF('/magikarp_gltf/scene.gltf')

  const radians = THREE.MathUtils.degToRad(45)

  return (
    <mesh
      {...props}
      rotation={[0, radians, 0]}
      scale={.5}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Magikarp
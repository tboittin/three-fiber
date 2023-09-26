import { useGLTF } from '@react-three/drei'
import { ThreeElements} from '@react-three/fiber'

function Magikarp(props: ThreeElements['mesh']) {
  const { scene } = useGLTF('/magikarp_gltf/scene.gltf')

  return (
    <mesh
        {...props}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default Magikarp
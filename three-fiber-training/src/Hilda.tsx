import { useGLTF } from '@react-three/drei'
import { ThreeElements} from '@react-three/fiber'

function Hilda(props: ThreeElements['mesh']) {
  const { scene } = useGLTF('/hilda_gltf/scene.gltf')

  return (
    <mesh
        {...props}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default Hilda
import * as THREE from 'three' //npm install @types/three accès aux types
import { useGLTF } from '@react-three/drei'
import { ThreeElements} from '@react-three/fiber'

function Hilda(props: ThreeElements['mesh']) {
  const { scene } = useGLTF('/hilda_gltf/scene.gltf')

  const radians = THREE.MathUtils.degToRad(45)

  return (
    <mesh
        {...props}
        rotation={[0, radians, 0]}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default Hilda
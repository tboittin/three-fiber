import { Canvas } from '@react-three/fiber'
import Hilda from './Hilda'
import Magikarp from './Magikarp'
import { OrbitControls } from '@react-three/drei'
import Pokeball from './Pokeball'

function App() {

  return (
    <>
      <div style={{
        width: '100vw',
        height: '80vh',
        backgroundColor: '#A9DDD6'
      }}>
        <Canvas>
          <mesh>
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[0, 0, 5]} intensity={1} />
            <Magikarp position={[2, 0, 3]} />
            <Pokeball position={[-0.5, 0, 0.75]} />
            <Hilda position={[-2, 0, 0]} />
            <OrbitControls />
          </mesh>
        </Canvas>
      </div>
    </>
  )
}

export default App

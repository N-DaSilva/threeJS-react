import './App.css'
import { Scene } from './Scene'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <div className='canvas-container'>
      <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [2,5,-10]
      }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default App

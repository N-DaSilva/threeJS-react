import './App.css'
import { Scene } from './Scene'
import { Canvas } from '@react-three/fiber'
import BackgroundMusic from './assets/BackgroundMusic'
import Settings from './assets/Settings'
import { useEffect, useState } from 'react'

function App() {

  const [bgVolume, setBGvolume] = useState(5);

  useEffect(()=>{
    console.log(bgVolume);
  },[bgVolume]);

  return (
    <>
    <BackgroundMusic bgVolume={bgVolume} />

    <div className='canvas-container'>
      <Settings setBGvolume={setBGvolume} />
      <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0,2.5,-10]
      }}
      >
        <Scene />
      </Canvas>
    </div>
    </>
    
  )
}

export default App

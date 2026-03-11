import './App.css'
import { Scene } from './Scene'
import { Canvas } from '@react-three/fiber'
import BackgroundMusic from './assets/BackgroundMusic'
import Settings from './assets/Settings'
import { useState } from 'react'

function App() {

  //useState to handle volume change since backgroundMusic and settings are both direct children of App. Passed the set function as prop to settings so it could change the value dynamically, and volume number to background music
  const [bgVolume, setBGvolume] = useState(5);

  return (
    <>
    <BackgroundMusic bgVolume={bgVolume} />
    <Settings setBGvolume={setBGvolume} />

    <div className='canvas-container'>
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

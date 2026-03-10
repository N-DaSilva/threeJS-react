import { useRef, useState } from "react";
import { planetGeometry } from "./PlanetGeometry";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from 'three';

function PlanetObject({ position, scale, note }: { position: [number, number, number]; scale: [number, number, number]; note: string }) {
    const [ isHovered, setIsHovered ] = useState(false);
    const audioRef = useRef<THREE.PositionalAudio>(null);

    const handleClick = () => {
        if (audioRef.current){
            if (!audioRef.current.isPlaying){
            audioRef.current.play();
            } else {
                audioRef.current.stop();
            }
        }
    }

    return (
        <mesh position={position} geometry={planetGeometry} scale={scale} onClick={handleClick}  onPointerEnter={() => { setIsHovered(true) }} onPointerLeave={() => { setIsHovered(false) }}>
            <meshBasicMaterial color={isHovered ? "#9c9c9c" : "white"} />
            <PositionalAudio ref={audioRef} url={"/src/assets/sounds/"+note+".wav"}/>
        </mesh>
    )
}

export default PlanetObject
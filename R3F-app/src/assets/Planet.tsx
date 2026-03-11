import { useRef, useState } from "react";
import { planetGeometry } from "./PlanetGeometry";
import { PositionalAudio } from "@react-three/drei";
import { PositionalAudio as ThreePositionalAudio } from 'three';

function PlanetObject({ position, scale, note }: { position: [number, number, number]; scale: [number, number, number]; note: string }) {
    //use props to initialise position, scale, and determine note name (E, G, or C) for each planet

    //useState to change material color when hovered
    const [ isHovered, setIsHovered ] = useState(false);

    //audioRef as part of PositionalAudio component to be able to play and stop the sound
    const audioRef = useRef<ThreePositionalAudio>(null);

    //play continuous note when planet is clicked and stop when clicked again
    const handleClick = () => {
        if (audioRef.current){
            if (!audioRef.current.isPlaying){
            audioRef.current.play();
            } else {
                audioRef.current.stop();
            }
        }
    }

    //using drei PositionalAudio element so that the notes played sound louder depending on camera distance from the object
    return (
        <mesh position={position} geometry={planetGeometry} scale={scale} onClick={handleClick}  onPointerEnter={() => { setIsHovered(true) }} onPointerLeave={() => { setIsHovered(false) }}>
            <meshBasicMaterial color={isHovered ? "#9c9c9c" : "white"} />
            <PositionalAudio ref={audioRef} url={"/src/assets/sounds/"+note+".wav"}/>
        </mesh>
    )
}

export default PlanetObject
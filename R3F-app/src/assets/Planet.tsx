import { useState } from "react";
import { planetGeometry } from "./PlanetGeometry";

function PlanetObject({ position, scale }: { position: [number, number, number]; scale: [number, number, number] }) {
    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <mesh position={position} geometry={planetGeometry} scale={scale} onPointerEnter={() => { setIsHovered(true) }} onPointerLeave={() => { setIsHovered(false) }}>
            <meshBasicMaterial color={isHovered ? "#9c9c9c" : "white"} />
        </mesh>
    )
}

export default PlanetObject
// import { FontLoader } from "three/examples/jsm/Addons.js";
// import poiretOne from './fonts/Poiret One_Regular.json';
import { Text } from "@react-three/drei";


export default function Title({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: [number, number, number] }) {
    // const font = new FontLoader().parse(poiretOne);
    return (
        // <Text3D font={"./fonts/Poiret One_Regular.json"} position={[0, 0, -10]}>Title</Text3D>
        <Text color="white" anchorX="center" anchorY="middle" position={position} rotation={rotation} scale={scale}>
            Cosmic Harmony
        </Text>

    )
}
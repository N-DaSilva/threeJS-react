import { Text } from "@react-three/drei";


export default function Title({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: [number, number, number] }) {

    return (
        <>
            <Text color="white" anchorX="center" anchorY="middle" position={position} rotation={rotation} scale={scale}>
                Cosmic Harmony
            </Text>

            <Text color="white" anchorX="center" anchorY="middle" position={[0,-15,10]} rotation={[Math.PI /2.5, Math.PI, 0]} scale={[1,1,1]}>
                Click on the planets to play notes continuously. Click again to stop. Getting closer to the planets makes the notes louder.
            </Text>
        </>
    )
}